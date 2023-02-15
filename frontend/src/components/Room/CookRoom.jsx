/* eslint-disable */
import axios from 'axios';
import { useSelector } from 'react-redux';
import { OpenVidu } from 'openvidu-browser';
import React, { Component } from 'react';
import ChatComponent from './chat/ChatComponent';
import DialogExtensionComponent from './dialog-extension/DialogExtension';
import StreamComponent from './stream/StreamComponent';
import ReportModal from '../Modal/ReportModal/ReportModal';
import * as C from './CookRoomStyle';
import CheckUserNum from './models/CheckUserNum';
import UserModel from './models/user-model';
import ToolbarComponent from './toolbar/ToolbarComponent';
import { thisTypeAnnotation } from '@babel/types';
import VerticalC, { data } from './verticalCarousel/VerticalC';
import ConfirmModal from '../Modal/ConfirmModal/ConfirmModal';
// mui import
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StreamFinishModal from '../Modal/StreamFinishModal/StreamFinishModal';

var localUser = new UserModel();
// 서버 URL 지정
// const APPLICATION_SERVER_URL = "https://demos.openvidu.io/";
// const APPLICATION_SERVER_URL = "http://localhost:5000/";
const APPLICATION_SERVER_URL = 'https://i8b206.p.ssafy.io:9000/api/';
// const APPLICATION_SERVER_URL =
//   'https://port-0-https---github-com-lsh9955-loginopenvidu-1jx7m2gld1c88au.gksl2.cloudtype.app/';

class CookRoom extends Component {
  constructor(props) {
    super(props);
    this.hasBeenUpdated = false;
    let sessionName = this.props.roomId;
    let userSeq = this.props.userInfo.userSeq;
    // 세션 유저 이름 지정
    let userName = this.props.userInfo.userNickname;
    this.remotes = [];
    this.findHost = [[userName, Date.now()]];
    this.localUserAccessAllowed = false;
    this.state = {
      mySessionId: sessionName,
      myUserName: userName,
      myPicture: this.props.userInfo.userImg ? this.props.userInfo.userImg : '',
      session: undefined,
      localUser: undefined,
      subscribers: [],
      chatDisplay: 'block',
      currentVideoDevice: undefined,
      kicktrigger: false,
      recipe: undefined,
      nowStep: 0,
      open: false,
      recipeName: '',
      nowVideo: '',
      isHost: false,
      carouselIdx: 0,
      isReport: false,
      enteredNum: -1,
      killPopup: false,
      // 강퇴한 유저
      killedUser: '',
    };
    this.DelRoomRequestInfo = this.DelRoomRequestInfo.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.isReport = this.isReport.bind(this);
    this.joinSession = this.joinSession.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.onbeforeunload = this.onbeforeunload.bind(this);
    this.camStatusChanged = this.camStatusChanged.bind(this);
    this.micStatusChanged = this.micStatusChanged.bind(this);
    this.kickStatusChanged = this.kickStatusChanged.bind(this);
    this.killUser = this.killUser.bind(this);
    this.killPopup = this.killPopup.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
    // 방장인지 확인
    this.isHost = this.isHost.bind(this);
    // 시작 시 시작 API를 전달하여 다른 사람이 못들어오게 함
    this.roomStart = this.roomStart.bind(this);
    // 다음 단계로 넘어가기
    this.nextStep = this.nextStep.bind(this);
    // 이전 단계로 넘어가기
    this.beforeStep = this.beforeStep.bind(this);
    // 전체 화면으로
    this.openFullScreenMode = this.openFullScreenMode.bind(this);
    this.closeFullScreenMode = this.closeFullScreenMode.bind(this);
    // 비디오 클릭 감시
    this.videoClick = this.videoClick.bind(this);

    // 캐러셀 앞
    this.beforeVideo = this.beforeVideo.bind(this);
    // 캐러셀 뒤
    this.afterVideo = this.afterVideo.bind(this);

    this.nicknameChanged = this.nicknameChanged.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.switchCamera = this.switchCamera.bind(this);
    this.screenShare = this.screenShare.bind(this);
    this.stopScreenShare = this.stopScreenShare.bind(this);
    this.closeDialogExtension = this.closeDialogExtension.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.checkNotification = this.checkNotification.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onbeforeunload);
    this.joinSession();
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
    this.leaveSession();
  }

  onbeforeunload(event) {
    this.leaveSession();
  }
  modalOpen() {
    this.setState({ open: !this.state.open });
  }

  joinSession() {
    this.OV = new OpenVidu();

    this.setState(
      {
        session: this.OV.initSession(),
      },
      async () => {
        this.subscribeToStreamCreated();
        await this.connectToSession();
      }
    );
  }

  async connectToSession() {
    if (this.props.token !== undefined) {
      // console.log('token received: ', this.props.token);
      this.connect(this.props.token);
    } else {
      try {
        var token = await this.getToken();
        // console.log(token);
        this.connect(token);
      } catch (error) {
        console.error(
          'There was an error getting the token:',
          error.code,
          error.message
        );
        if (this.props.error) {
          this.props.error({
            error: error.error,
            messgae: error.message,
            code: error.code,
            status: error.status,
          });
        }
        alert('There was an error getting the token:', error.message);
      }
    }
  }

  // 방장인지 확인

  isHost(checkOutput) {
    this.setState({ isHost: checkOutput });
  }

  // 비디오 클릭
  videoClick(user) {
    if (this.state.nowVideo === user) {
      this.setState({ nowVideo: '' });
    } else {
      this.setState({ nowVideo: user });
    }
  }

  // 강퇴 시 팝업창 생성
  killPopup() {
    this.setState({ killPopup: !this.state.killPopup });
  }

  // 레시피 chat에서 가져오기

  getRecipe(getInfo) {
    this.setState({ recipe: getInfo[0], recipeName: getInfo[1] });
  }
  // 연결 시 유저 이름과 유저 사진 동시에 전송
  connect(token) {
    this.state.session
      .connect(token, {
        clientData: this.state.myUserName,
        clientPicture: this.state.myPicture,
        clientSeq: this.props.userInfo.userSeq,
      })
      .then(() => {
        this.connectWebCam();
      })
      .catch(error => {
        if (this.props.error) {
          this.props.error({
            error: error.error,
            messgae: error.message,
            code: error.code,
            status: error.status,
          });
        }
        alert('There was an error connecting to the session:', error.message);
        console.log(
          'There was an error connecting to the session:',
          error.code,
          error.message
        );
      });
  }

  async connectWebCam() {
    await this.OV.getUserMedia({
      audioSource: undefined,
      videoSource: undefined,
    });
    var devices = await this.OV.getDevices();
    var videoDevices = devices.filter(device => device.kind === 'videoinput');

    let publisher = this.OV.initPublisher(undefined, {
      audioSource: undefined,
      videoSource: videoDevices[0].deviceId,

      publishAudio: localUser.isAudioActive(),
      publishVideo: localUser.isVideoActive(),
      resolution: '640x480',
      frameRate: 30,
      insertMode: 'APPEND',
    });

    if (this.state.session.capabilities.publish) {
      publisher.on('accessAllowed', () => {
        this.state.session.publish(publisher).then(() => {
          this.updateSubscribers();
          this.localUserAccessAllowed = true;
          if (this.props.joinSession) {
            this.props.joinSession();
          }
        });
      });
    }
    localUser.setNickname(this.state.myUserName);
    localUser.setConnectionId(this.state.session.connection.connectionId);
    localUser.setScreenShareActive(false);
    localUser.setStreamManager(publisher);
    localUser.setUserSeq(this.props.userInfo.userSeq);
    this.subscribeToUserChanged();
    this.clickNextStep();
    this.clickBeforeStep();
    this.chattoCook();
    this.subscribeToStreamDestroyed();
    this.killSession();

    this.sendSignalUserChanged({
      isScreenShareActive: localUser.isScreenShareActive(),
    });

    this.setState(
      { currentVideoDevice: videoDevices[0], localUser: localUser },
      () => {
        this.state.localUser.getStreamManager().on('streamPlaying', e => {
          publisher.videos[0].video.parentElement.classList.remove(
            'custom-class'
          );
        });
      }
    );
  }
  // 신고 모달 창 띄우는 함수
  isReport() {
    this.setState({ isReport: !this.state.isReport });
  }

  updateSubscribers() {
    var subscribers = this.remotes;
    console.log(
      subscribers.map(v => {
        return v.nickname;
      })
    );
    if (this.props.userInfo.userSeq === null) {
      this.leaveSession();
      alert('로그인이 필요합니다. 로그인 이후 이용해주세요');
      window.location = '/Main';
    } else if (this.state.enteredNum === -1 && subscribers.length > 5) {
      this.leaveSession();
      alert('방 인원이 초과되어 입장이 불가능합니다. 다른 방을 이용해주세요:)');
      window.location = '/Main';
    } else {
      this.setState({ enteredNum: subscribers.length });
    }
    console.log(subscribers.length);

    this.setState(
      {
        subscribers: subscribers,
      },
      () => {
        if (this.state.localUser) {
          this.sendSignalUserChanged({
            isAudioActive: this.state.localUser.isAudioActive(),
            isVideoActive: this.state.localUser.isVideoActive(),
            nickname: this.state.localUser.getNickname(),
            isScreenShareActive: this.state.localUser.isScreenShareActive(),
          });
        }
      }
    );
  }

  // 시작시 API Patch
  async roomStart() {
    const requestInfo = {
      url: `https://i8b206.p.ssafy.io:9000/api/room/start/${this.state.mySessionId}`,
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${this.props.userInfo.accessToken}`,
      },
    };
    try {
      const res = await axios(requestInfo);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  leaveSession() {
    const mySession = this.state.session;

    if (mySession) {
      mySession.disconnect();
    }

    // Empty all properties...
    this.OV = null;
    this.setState({
      session: undefined,
      subscribers: [],
      // 해당 세션 ID 값 부여
      mySessionId: '',
      myUserName: '',
      localUser: undefined,
    });
    if (this.props.leaveSession) {
      this.props.leaveSession();
    }
  }
  camStatusChanged() {
    localUser.setVideoActive(!localUser.isVideoActive());
    localUser.getStreamManager().publishVideo(localUser.isVideoActive());
    this.sendSignalUserChanged({ isVideoActive: localUser.isVideoActive() });
    this.setState({ localUser: localUser });
  }

  micStatusChanged() {
    localUser.setAudioActive(!localUser.isAudioActive());
    localUser.getStreamManager().publishAudio(localUser.isAudioActive());
    this.sendSignalUserChanged({ isAudioActive: localUser.isAudioActive() });
    this.setState({ localUser: localUser });
  }
  kickStatusChanged() {
    this.setState({ kicktrigger: !this.state.kicktrigger });
  }
  killUser(userName) {
    this.setState({ killedUser: userName });
    const signalOptions = {
      data: userName,
      type: 'kickout',
    };
    this.remotes = this.remotes.filter(v => v.nickname !== userName);
    this.state.session.signal(signalOptions);
    this.killPopup();
  }

  // 다음 단계로 넘어가기
  nextStep() {
    const signalOptions = {
      data: Number(this.state.nowStep) + 1,
      type: 'nextStep',
    };

    this.state.session.signal(signalOptions);
  }
  beforeStep() {
    const signalOptions = {
      data: Number(this.state.nowStep) - 1,
      type: 'beforeStep',
    };

    this.state.session.signal(signalOptions);
  }

  nicknameChanged(nickname) {
    let localUser = this.state.localUser;
    localUser.setNickname(nickname);
    this.setState({ localUser: localUser });
    this.sendSignalUserChanged({
      nickname: this.state.localUser.getNickname(),
    });
  }

  deleteSubscriber(stream) {
    const remoteUsers = this.state.subscribers;
    const userStream = remoteUsers.filter(
      user => user.getStreamManager().stream === stream
    )[0];
    let index = remoteUsers.indexOf(userStream, 0);
    if (index > -1) {
      remoteUsers.splice(index, 1);
      this.setState({
        subscribers: remoteUsers,
      });
    }
  }

  subscribeToStreamCreated() {
    this.state.session.on('streamCreated', event => {
      const subscriber = this.state.session.subscribe(event.stream, undefined);
      // var subscribers = this.state.subscribers;
      subscriber.on('streamPlaying', e => {
        this.checkSomeoneShareScreen();
        subscriber.videos[0].video.parentElement.classList.remove(
          'custom-class'
        );
      });

      const newUser = new UserModel();
      newUser.setStreamManager(subscriber);
      newUser.setConnectionId(event.stream.connection.connectionId);
      newUser.setType('remote');
      const nickname = event.stream.connection.data.split('%')[0];
      newUser.setNickname(JSON.parse(nickname).clientData);
      newUser.setImg(JSON.parse(nickname).clientPicture);
      newUser.setUserSeq(JSON.parse(nickname).clientSeq);

      this.remotes.push(newUser);
      console.log(this.remotes);
      this.findHost.push([JSON.parse(nickname).clientData, Date.now()]);

      if (this.localUserAccessAllowed) {
        this.updateSubscribers();
      }
    });
  }

  subscribeToStreamDestroyed() {
    // On every Stream destroyed...
    this.state.session.on('streamDestroyed', event => {
      // Remove the stream from 'subscribers' array
      this.deleteSubscriber(event.stream);
      setTimeout(() => {
        this.checkSomeoneShareScreen();
      }, 20);
      event.preventDefault();
    });
  }
  killSession() {
    this.state.session.on('signal:kickout', event => {
      let remoteUsers = this.state.subscribers;
      if (event.data === this.state.myUserName) {
        this.state.session.disconnect();
        alert('강퇴당했습니다');
        window.location = '/Main';
      }
    });
  }
  clickNextStep() {
    this.state.session.on('signal:nextStep', event => {
      // console.log(event, this.state.recipe.length);
      this.setState({ nowStep: event.data });
      // 요리가 완료되면 닫기
      if (this.state.nowStep > this.state.recipe.length - 1) {
        this.closeFullScreenMode();
      }
    });
  }
  clickBeforeStep() {
    this.state.session.on('signal:beforeStep', event => {
      this.setState({ nowStep: event.data });
    });
  }
  // 채팅방이 없어지고 다음 단계로 이동
  chattoCook() {
    this.state.session.on('signal:startCook', event => {
      this.setState({ chatDisplay: 'none', messageReceived: false });
      // this.openFullScreenMode();
    });
  }

  subscribeToUserChanged() {
    this.state.session.on('signal:userChanged', event => {
      let remoteUsers = this.state.subscribers;
      remoteUsers.forEach(user => {
        if (user.getConnectionId() === event.from.connectionId) {
          const data = JSON.parse(event.data);
          // console.log('EVENTO REMOTE: ', event.data);

          if (data.isAudioActive !== undefined) {
            user.setAudioActive(data.isAudioActive);
          }
          if (data.isVideoActive !== undefined) {
            user.setVideoActive(data.isVideoActive);
          }
          if (data.nickname !== undefined) {
            user.setNickname(data.nickname);
          }
          if (data.isScreenShareActive !== undefined) {
            user.setScreenShareActive(data.isScreenShareActive);
          }
        }
      });
      this.setState(
        {
          subscribers: remoteUsers,
        },
        () => this.checkSomeoneShareScreen()
      );
    });
  }

  sendSignalUserChanged(data) {
    const signalOptions = {
      data: JSON.stringify(data),
      type: 'userChanged',
    };
    this.state.session.signal(signalOptions);
  }

  // 방장이 시작 누를 때 채팅 없어지고 실시간 공유 시작
  sendStart() {
    const signalOptions = {
      data: true,
      type: 'startCook',
    };
    this.state.session.signal(signalOptions);
  }

  toggleFullscreen() {
    const document = window.document;
    const fs = document.getElementById('container');
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (fs.requestFullscreen) {
        fs.requestFullscreen();
      } else if (fs.msRequestFullscreen) {
        fs.msRequestFullscreen();
      } else if (fs.mozRequestFullScreen) {
        fs.mozRequestFullScreen();
      } else if (fs.webkitRequestFullscreen) {
        fs.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  async switchCamera() {
    try {
      const devices = await this.OV.getDevices();
      var videoDevices = devices.filter(device => device.kind === 'videoinput');

      if (videoDevices && videoDevices.length > 1) {
        var newVideoDevice = videoDevices.filter(
          device => device.deviceId !== this.state.currentVideoDevice.deviceId
        );

        if (newVideoDevice.length > 0) {
          // Creating a new publisher with specific videoSource
          // In mobile devices the default and first camera is the front one
          var newPublisher = this.OV.initPublisher(undefined, {
            audioSource: undefined,
            videoSource: newVideoDevice[0].deviceId,
            publishAudio: localUser.isAudioActive(),
            publishVideo: localUser.isVideoActive(),
            mirror: true,
          });

          //newPublisher.once("accessAllowed", () => {
          await this.state.session.unpublish(
            this.state.localUser.getStreamManager()
          );
          await this.state.session.publish(newPublisher);
          this.state.localUser.setStreamManager(newPublisher);
          this.setState({
            currentVideoDevice: newVideoDevice,
            localUser: localUser,
          });
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  screenShare() {
    const videoSource =
      navigator.userAgent.indexOf('Firefox') !== -1 ? 'window' : 'screen';
    const publisher = this.OV.initPublisher(
      undefined,
      {
        videoSource: videoSource,
        publishAudio: localUser.isAudioActive(),
        publishVideo: localUser.isVideoActive(),
        mirror: false,
      },
      error => {
        if (error && error.name === 'SCREEN_EXTENSION_NOT_INSTALLED') {
          this.setState({ showExtensionDialog: true });
        } else if (error && error.name === 'SCREEN_SHARING_NOT_SUPPORTED') {
          alert('Your browser does not support screen sharing');
        } else if (error && error.name === 'SCREEN_EXTENSION_DISABLED') {
          alert('You need to enable screen sharing extension');
        } else if (error && error.name === 'SCREEN_CAPTURE_DENIED') {
          alert('You need to choose a window or application to share');
        }
      }
    );

    publisher.once('accessAllowed', () => {
      this.state.session.unpublish(localUser.getStreamManager());
      localUser.setStreamManager(publisher);
      this.state.session.publish(localUser.getStreamManager()).then(() => {
        localUser.setScreenShareActive(true);
        this.setState({ localUser: localUser }, () => {
          this.sendSignalUserChanged({
            isScreenShareActive: localUser.isScreenShareActive(),
          });
        });
      });
    });
    publisher.on('streamPlaying', () => {
      publisher.videos[0].video.parentElement.classList.remove('custom-class');
    });
  }

  closeDialogExtension() {
    this.setState({ showExtensionDialog: false });
  }

  stopScreenShare() {
    this.state.session.unpublish(localUser.getStreamManager());
    this.connectWebCam();
  }

  checkSomeoneShareScreen() {
    let isScreenShared;
    // return true if at least one passes the test
    isScreenShared =
      this.state.subscribers.some(user => user.isScreenShareActive()) ||
      localUser.isScreenShareActive();
  }

  toggleChat(property) {
    let display = property;
    // console.log(display);
    if (display === undefined) {
      // 방장이 시작하면 신호를 모두에게 보냄
      this.roomStart();
      this.sendStart();

      display = this.state.chatDisplay === 'none' ? 'block' : 'none';
    }
    if (display === 'block') {
      this.setState({ chatDisplay: display, messageReceived: false });
    } else {
      console.log('chat', display);
      this.setState({ chatDisplay: display });

      //세션 보내기
    }
  }

  checkNotification(event) {
    this.setState({
      messageReceived: this.state.chatDisplay === 'none',
    });
  }

  // 전체화면 설정
  openFullScreenMode() {
    if (document.documentElement.requestFullscreen)
      document.documentElement.requestFullscreen();
    else if (document.documentElement.webkitRequestFullscreen)
      // Chrome, Safari (webkit)
      document.documentElement.webkitRequestFullscreen();
    else if (document.documentElement.mozRequestFullScreen)
      // Firefox
      document.documentElement.mozRequestFullScreen();
    else if (document.documentElement.msRequestFullscreen)
      // IE or Edge
      document.documentElement.msRequestFullscreen();
  }

  // 전체화면 해제
  closeFullScreenMode() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen)
      // Chrome, Safari (webkit)
      document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen)
      // Firefox
      document.mozCancelFullScreen();
    else if (document.msExitFullscreen)
      // IE or Edge
      document.msExitFullscreen();
  }
  // 캐러셀 이전 사람들
  beforeVideo() {
    if (this.state.carouselIdx > 0) {
      this.setState({ carouselIdx: this.state.carouselIdx - 1 });
    }
  }
  // 캐러셀 이후 사람들
  afterVideo() {
    // this.state.subscribers.length+1에서 +1을 뺌. 오류시 다시 복구
    if (this.state.carouselIdx < this.state.subscribers.length / 2 - 1) {
      this.setState({ carouselIdx: this.state.carouselIdx + 1 });
    }
  }

  // 방 나가기
  async DelRoomRequestInfo() {
    const outRoom = axios.delete(
      `https://i8b206.p.ssafy.io:9000/api/room/${this.state.mySessionId}/${this.props.userInfo.userSeq}`,
      { Authorization: `Bearer ${this.props.userInfo.accessToken}` }
    );

    try {
      const DelRoomForm = await outRoom;
      history.push('/main');
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const mySessionId = this.state.mySessionId;
    const localUser = this.state.localUser;
    var chatDisplay = { display: this.state.chatDisplay };

    return (
      <>
        <CheckUserNum
          userNum={this.state.subscribers.length + 1}
          thisRoom={this.props.roomId}
        />
        {this.state.killPopup && (
          <div>
            <Modal
              open={this.state.killPopup}
              onClose={() => this.killPopup()}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '40%',
                  height: '30%',
                  bgcolor: '#FFFFFF',
                  border: '2px solid #ffffff',
                  boxShadow: 24,
                  borderRadius: '16px',
                  p: 4,
                }}
              >
                <ConfirmModal
                  info={`${this.state.killedUser}를 내보냈습니다`}
                  killPopup={this.killPopup}
                />
              </Box>
            </Modal>
          </div>
        )}
        {this.state.isReport && (
          <div>
            <Modal
              open={this.state.isReport}
              onClose={this.isReport}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '50%',
                  height: '60%',
                  bgcolor: '#FFFFFF',
                  border: '2px solid #ffffff',
                  boxShadow: 24,
                  borderRadius: '16px',
                  p: 4,
                }}
              >
                <ReportModal
                  userInfo={this.props.userInfo}
                  subscribers={this.state.subscribers}
                  isReport={this.isReport}
                  onChangeShow={this.props.onChangeShow}
                />
              </Box>
            </Modal>
          </div>
        )}
        {this.state.chatDisplay === 'none' &&
        this.state.nowStep > this.state.recipe.length - 1 ? (
          <div>
            <Modal
              open={this.state.nowStep > this.state.recipe.length - 1}
              onClose={this.modalOpen}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '50%',
                  height: '60%',
                  bgcolor: '#FFFFFF',
                  border: '2px solid #ffffff',
                  boxShadow: 24,
                  borderRadius: '16px',
                  p: 4,
                }}
              >
                <StreamFinishModal onChangeShow={this.props.onChangeShow} />
              </Box>
            </Modal>
          </div>
        ) : (
          ''
        )}

        {localUser !== undefined &&
          this.state.chatDisplay !== 'none' &&
          localUser.getStreamManager() !== undefined && (
            <ChatComponent
              DelRoomRequestInfo={this.DelRoomRequestInfo}
              remoteUsers={this.state.subscribers}
              user={localUser}
              userImg={this.state.myPicture}
              chatDisplay={this.state.chatDisplay}
              close={this.toggleChat}
              messageReceived={this.checkNotification}
              getRecipe={this.getRecipe}
              onChangeShow={this.props.onChangeShow}
              isHost={this.isHost}
            />
          )}
        <DialogExtensionComponent
          showDialog={this.state.showExtensionDialog}
          cancelClicked={this.closeDialogExtension}
        />
        {this.state.chatDisplay === 'none' && (
          <C.CookContainer>
            <C.CookVodDivideBox>
              {/* this.state.nowVideo 와 같으면 큰 화면으로 이동 */}
              {this.state.nowVideo !== '' ? (
                <>
                  <C.FocusVideo>
                    <StreamComponent
                      nowFocus={this.state.nowVideo}
                      user={this.state.nowVideo}
                      handleNickname={this.nicknameChanged}
                      subscribeNum={this.state.subscribers.length}
                      videoClick={this.videoClick}
                    />
                  </C.FocusVideo>
                  <C.CarouselVideo>
                    <ArrowBackIosNewIcon
                      style={{ cursor: 'pointer' }}
                      onClick={this.beforeVideo}
                    />
                    <C.OutFocusVideo>
                      {/* 현재 큰화면이 아닌 유저들만 캐러셀에 나옴 */}
                      {/* {localUser !== undefined &&
                        this.state.nowVideo !== localUser &&
                        localUser.getStreamManager() !== undefined && (
                          <StreamComponent
                            nowFocus={this.state.nowVideo}
                            user={localUser}
                            handleNickname={this.nicknameChanged}
                            subscribeNum={this.state.subscribers.length}
                            videoClick={this.videoClick}
                          />
                        )} */}
                      {[localUser, ...this.state.subscribers]
                        .filter(v => v !== this.state.nowVideo)
                        .map((sub, i) => {
                          return (
                            (i === this.state.carouselIdx * 2 ||
                              i === this.state.carouselIdx * 2 + 1) && (
                              <StreamComponent
                                nowFocus={this.state.nowVideo}
                                key={i}
                                user={sub}
                                killPopup={this.killPopup}
                                streamId={sub.streamManager.stream.streamId}
                                kicktrigger={
                                  sub !== localUser && this.state.kicktrigger
                                }
                                kickStatusChanged={
                                  sub !== localUser && this.kickStatusChanged
                                }
                                killUser={sub !== localUser && this.killUser}
                                subscribeNum={this.state.subscribers.length}
                                videoClick={this.videoClick}
                              />
                            )
                          );
                        })}
                    </C.OutFocusVideo>
                    <ArrowForwardIosIcon
                      style={{ cursor: 'pointer' }}
                      onClick={this.afterVideo}
                    />
                  </C.CarouselVideo>
                </>
              ) : (
                /* this.state.nowVideo가 없으면 일반 화면 */
                <>
                  {localUser !== undefined &&
                    localUser.getStreamManager() !== undefined && (
                      <StreamComponent
                        nowFocus={this.state.nowVideo}
                        user={localUser}
                        handleNickname={this.nicknameChanged}
                        subscribeNum={this.state.subscribers.length}
                        videoClick={this.videoClick}
                        style={{
                          width:
                            this.state.nowVideo === localUser
                              ? '100px'
                              : '10px',
                        }}
                      />
                    )}
                  {this.state.subscribers.map((sub, i) => (
                    <StreamComponent
                      nowFocus={this.state.nowVideo}
                      key={i}
                      user={sub}
                      streamId={sub.streamManager.stream.streamId}
                      kicktrigger={this.state.kicktrigger}
                      kickStatusChanged={this.kickStatusChanged}
                      killUser={this.killUser}
                      subscribeNum={this.state.subscribers.length}
                      videoClick={this.videoClick}
                    />
                  ))}
                </>
              )}
            </C.CookVodDivideBox>
            <C.RecipeDivideBox>
              {/* <VerticalC data={this.state.recipe} /> */}
              <C.RecipeTitle>{this.state.recipeName}</C.RecipeTitle>
              <C.BeforeRecipe>
                <C.RecipeTxt>
                  {Number(this.state.nowStep) - 3 >= 0
                    ? this.state.recipe
                        .filter((v, a) => a === Number(this.state.nowStep) - 3)
                        .map(v => {
                          return v.recipeStepContent;
                        })
                    : ' '}
                </C.RecipeTxt>
                <C.RecipeTxt>
                  {' '}
                  {Number(this.state.nowStep) - 2 >= 0
                    ? this.state.recipe
                        .filter((v, a) => a === Number(this.state.nowStep) - 2)
                        .map(v => {
                          return v.recipeStepContent;
                        })
                    : ' '}
                </C.RecipeTxt>
                <C.RecipeTxt>
                  {' '}
                  {Number(this.state.nowStep) - 1 >= 0
                    ? this.state.recipe
                        .filter((v, a) => a === Number(this.state.nowStep) - 1)
                        .map(v => {
                          return v.recipeStepContent;
                        })
                    : ' '}
                </C.RecipeTxt>
              </C.BeforeRecipe>
              <C.NowRecipe>
                {this.state.recipe
                  .filter((v, a) => a === Number(this.state.nowStep))
                  .map(v => {
                    return (
                      <C.NowRecipeTxt>{v.recipeStepContent}</C.NowRecipeTxt>
                    );
                  })}
              </C.NowRecipe>
              <C.BeforeRecipe>
                <C.RecipeTxt>
                  {Number(this.state.nowStep) + 1 <=
                  this.state.recipe.length - 1
                    ? this.state.recipe
                        .filter((v, a) => a === Number(this.state.nowStep) + 1)
                        .map(v => {
                          return v.recipeStepContent;
                        })
                    : ' '}
                </C.RecipeTxt>
                <C.RecipeTxt>
                  {' '}
                  {Number(this.state.nowStep) + 2 <=
                  this.state.recipe.length - 1
                    ? this.state.recipe
                        .filter((v, a) => a === Number(this.state.nowStep) + 2)
                        .map(v => {
                          return v.recipeStepContent;
                        })
                    : ' '}
                </C.RecipeTxt>
                <C.RecipeTxt>
                  {Number(this.state.nowStep) + 3 <=
                  this.state.recipe.length - 1
                    ? this.state.recipe
                        .filter((v, a) => a === Number(this.state.nowStep) + 3)
                        .map(v => {
                          return v.recipeStepContent;
                        })
                    : ' '}
                </C.RecipeTxt>
              </C.BeforeRecipe>
            </C.RecipeDivideBox>
            <C.ToolbarMargin>
              <ToolbarComponent
                DelRoomRequestInfo={this.DelRoomRequestInfo}
                isReport={this.isReport}
                recipe={this.state.recipe}
                nowStep={this.state.nowStep}
                modalOpen={this.modalOpen}
                nextStep={this.nextStep}
                beforeStep={this.beforeStep}
                sessionId={mySessionId}
                user={localUser}
                showNotification={this.state.messageReceived}
                kicktrigger={this.state.kicktrigger}
                kickStatusChanged={this.kickStatusChanged}
                camStatusChanged={this.camStatusChanged}
                micStatusChanged={this.micStatusChanged}
                screenShare={this.screenShare}
                stopScreenShare={this.stopScreenShare}
                toggleFullscreen={this.toggleFullscreen}
                switchCamera={this.switchCamera}
                leaveSession={this.leaveSession}
                toggleChat={this.toggleChat}
                onChangeShow={this.props.onChangeShow}
                isHost={this.state.isHost}
              />
            </C.ToolbarMargin>
          </C.CookContainer>
        )}
      </>
    );
  }

  /**
   * --------------------------------------------
   * GETTING A TOKEN FROM YOUR APPLICATION SERVER
   * --------------------------------------------
   * The methods below request the creation of a Session and a Token to
   * your application server. This keeps your OpenVidu deployment secure.
   *
   * In this sample code, there is no user control at all. Anybody could
   * access your application server endpoints! In a real production
   * environment, your application server must identify the user to allow
   * access to the endpoints.
   *
   * Visit https://docs.openvidu.io/en/stable/application-server to learn
   * more about the integration of OpenVidu in your application server.
   */
  async getToken() {
    const sessionId = await this.createSession(this.state.mySessionId);
    return await this.createToken(sessionId);
  }

  async createSession(sessionId) {
    const response = await axios.post(
      APPLICATION_SERVER_URL + 'api/sessions',
      { customSessionId: sessionId },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response.data; // The sessionId
  }

  async createToken(sessionId) {
    const response = await axios.post(
      APPLICATION_SERVER_URL + 'api/sessions/' + sessionId + '/connections',
      {},
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response.data; // The token
  }
}
export default CookRoom;

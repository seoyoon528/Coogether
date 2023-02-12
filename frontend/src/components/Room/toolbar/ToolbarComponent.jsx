/* eslint-disable */
import React, { Component } from 'react';
import './ToolbarComponent.css';
import * as T from './ToolbarComponentStyle';
import { Link } from 'react-router-dom';
export default class ToolbarComponent extends Component {
  constructor(props) {
    super(props);

    // step을 여기서 따로 두기
    this.state = { fullscreen: true, toolNowStep: 0 };
    this.openModal = this.openModal.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.beforeStep = this.beforeStep.bind(this);
    this.camStatusChanged = this.camStatusChanged.bind(this);
    this.micStatusChanged = this.micStatusChanged.bind(this);
    this.kickStatusChanged = this.kickStatusChanged.bind(this);
    this.screenShare = this.screenShare.bind(this);
    this.stopScreenShare = this.stopScreenShare.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.switchCamera = this.switchCamera.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.openFullScreenMode = this.openFullScreenMode.bind(this);
    this.closeFullScreenMode = this.closeFullScreenMode.bind(this);
  }
  openModal() {
    this.props.modalOpen();
  }

  nextStep() {
    this.props.nextStep();
    this.setState({ toolNowStep: this.state.toolNowStep + 1 });
  }
  beforeStep() {
    this.props.beforeStep();
    this.setState({ toolNowStep: this.state.toolNowStep - 1 });
  }

  kickStatusChanged() {
    this.props.kickStatusChanged();
  }
  micStatusChanged() {
    this.props.micStatusChanged();
  }

  camStatusChanged() {
    this.props.camStatusChanged();
  }

  screenShare() {
    this.props.screenShare();
  }

  stopScreenShare() {
    this.props.stopScreenShare();
  }

  toggleFullscreen() {
    if (this.state.fullscreen) {
      this.closeFullScreenMode();
    } else {
      this.openFullScreenMode();
    }
    this.setState({ fullscreen: !this.state.fullscreen });
  }

  switchCamera() {
    this.props.switchCamera();
  }

  leaveSession() {
    this.closeFullScreenMode();
    this.props.onChangeShow();
    this.props.leaveSession();
  }

  toggleChat() {
    this.props.toggleChat();
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

  render() {
    const mySessionId = this.props.sessionId;
    const localUser = this.props.user;
    return (
      <T.ToolContainer>
        <T.ToolBar>
          {localUser !== undefined && localUser.isAudioActive() ? (
            <button onClick={this.micStatusChanged}>음소거</button>
          ) : (
            <button onClick={this.micStatusChanged}>마이크 켜기</button>
          )}
          {localUser !== undefined && localUser.isVideoActive() ? (
            <button onClick={this.camStatusChanged}>화면끄기</button>
          ) : (
            <button onClick={this.camStatusChanged}>화면켜기</button>
          )}
          {this.props.isHost &&
          this.props.recipe.length - 1 <= this.state.toolNowStep ? (
            <button onClick={this.nextStep}>요리 마치기</button>
          ) : (
            this.props.isHost && (
              <button onClick={this.nextStep}>다음단계</button>
            )
          )}
          {this.state.toolNowStep > 0 ? (
            <button onClick={this.beforeStep}>이전단계</button>
          ) : (
            ''
          )}
          <button>신고하기</button>
          {this.props.isHost && !this.props.kicktrigger ? (
            <button onClick={this.kickStatusChanged}>내보내기</button>
          ) : (
            this.props.isHost && (
              <button onClick={this.kickStatusChanged}>취소</button>
            )
          )}

          {/* <span
              color="inherit"
              className="navButton"
              onClick={this.screenShare}
            >
              {localUser !== undefined && localUser.isScreenShareActive() ? (
                <span>화면공유</span>
              ) : (
                <span>화면공유</span>
              )}
            </span>

            {localUser !== undefined && localUser.isScreenShareActive() && (
              <span onClick={this.stopScreenShare} id="navScreenButton">
                화면공유 멈추기
              </span>
            )}

            <span
              color="inherit"
              className="navButton"
              onClick={this.switchCamera}
            >
              카메라 바꾸기
            </span> */}
          {/* <span
              color="inherit"
              className="navButton"
              onClick={this.toggleFullscreen}
            >
              {localUser !== undefined && this.state.fullscreen ? (
                <span>전체화면끄기</span>
              ) : (
                <span>전체화면</span>
              )}
            </span> */}

          <Link to="/Main" onClick={this.leaveSession}>
            <button>나가기</button>
          </Link>
        </T.ToolBar>
      </T.ToolContainer>
    );
  }
}

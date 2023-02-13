class UserModel {
  connectionId;

  audioActive;

  videoActive;

  screenShareActive;

  nickname;

  streamManager;

  type;

  img;

  userSeq;

  // 'remote' | 'local'
  // 초기 유저는 음성, 비디오 꺼진 상태로

  constructor() {
    this.connectionId = '';
    this.audioActive = false;
    this.videoActive = false;
    this.screenShareActive = false;
    this.nickname = '';
    this.streamManager = null;
    this.type = 'local';
    this.img = '';
    this.userSeq = '';
  }

  isAudioActive() {
    return this.audioActive;
  }

  isVideoActive() {
    return this.videoActive;
  }

  isScreenShareActive() {
    return this.screenShareActive;
  }

  getConnectionId() {
    return this.connectionId;
  }

  getNickname() {
    return this.nickname;
  }

  getStreamManager() {
    return this.streamManager;
  }

  isLocal() {
    return this.type === 'local';
  }

  isRemote() {
    return !this.isLocal();
  }

  setAudioActive(isAudioActive) {
    this.audioActive = isAudioActive;
  }

  setVideoActive(isVideoActive) {
    this.videoActive = isVideoActive;
  }

  setScreenShareActive(isScreenShareActive) {
    this.screenShareActive = isScreenShareActive;
  }

  setStreamManager(streamManager) {
    this.streamManager = streamManager;
  }

  setConnectionId(conecctionId) {
    this.connectionId = conecctionId;
  }

  setNickname(nickname) {
    this.nickname = nickname;
  }

  setType(type) {
    if (type === 'local' || type === 'remote') {
      this.type = type;
    }
  }

  setImg(url) {
    this.img = url;
  }

  setUserSeq(seq) {
    this.userSeq = seq;
  }
}

export default UserModel;

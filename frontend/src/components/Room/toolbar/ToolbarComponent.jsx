/* eslint-disable */
import React, { Component } from 'react';
import './ToolbarComponent.css';
import * as T from './ToolbarCom';
export default class ToolbarComponent extends Component {
  constructor(props) {
    super(props);

    // step을 여기서 따로 두기
    this.state = { fullscreen: false, toolNowStep: 0 };
    this.openModal = this.openModal.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.camStatusChanged = this.camStatusChanged.bind(this);
    this.micStatusChanged = this.micStatusChanged.bind(this);
    this.kickStatusChanged = this.kickStatusChanged.bind(this);
    this.screenShare = this.screenShare.bind(this);
    this.stopScreenShare = this.stopScreenShare.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.switchCamera = this.switchCamera.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
  }
  openModal() {
    this.props.modalOpen();
  }

  nextStep() {
    this.props.nextStep();
    this.setState({ toolNowStep: this.state.toolNowStep + 1 });
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
    this.setState({ fullscreen: !this.state.fullscreen });
    this.props.toggleFullscreen();
  }

  switchCamera() {
    this.props.switchCamera();
  }

  leaveSession() {
    this.props.leaveSession();
  }

  toggleChat() {
    this.props.toggleChat();
  }

  render() {
    const mySessionId = this.props.sessionId;
    const localUser = this.props.user;
    return (
      <T.ToolContainer>
        <div className="toolbar">
          <div id="navSessionInfo">
            {this.props.sessionId && (
              <div id="titleContent">
                <span id="session-title">{mySessionId}</span>
              </div>
            )}
          </div>

          <div className="buttonsContent">
            {!this.props.kicktrigger ? (
              <button onClick={this.kickStatusChanged}>강퇴시키기</button>
            ) : (
              <button onClick={this.kickStatusChanged}>취소</button>
            )}
            <span
              color="inherit"
              className="navButton"
              id="navMicButton"
              onClick={this.micStatusChanged}
            >
              {localUser !== undefined && localUser.isAudioActive() ? (
                <span>마이크 켜기</span>
              ) : (
                <span>음소거</span>
              )}
            </span>

            <span
              color="inherit"
              className="navButton"
              id="navCamButton"
              onClick={this.camStatusChanged}
            >
              {localUser !== undefined && localUser.isVideoActive() ? (
                <span>카메라 켜기</span>
              ) : (
                <span>카메라 끄기</span>
              )}
            </span>

            <span
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
            </span>
            <span
              color="inherit"
              className="navButton"
              onClick={this.toggleFullscreen}
            >
              {localUser !== undefined && this.state.fullscreen ? (
                <span>전체화면 끄기</span>
              ) : (
                <span>전체화면</span>
              )}
            </span>
            {this.props.recipe.length - 1 <= this.state.toolNowStep ? (
              <button onClick={this.openModal}>요리 마치기</button>
            ) : (
              <button onClick={this.nextStep}>다음 단계로</button>
            )}

            <span
              color="secondary"
              className="navButton"
              onClick={this.leaveSession}
              id="navLeaveButton"
            >
              나가기
            </span>
          </div>
        </div>
      </T.ToolContainer>
    );
  }
}

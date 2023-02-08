/* eslint-disable */
import React, { Component } from 'react';
import * as S from './StreamComponentStyle';
import './StreamComponent.css';

import OvVideoComponent from './OvVideo';

export default class StreamComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: this.props.user.getNickname(),
      showForm: false,
      mutedSound: false,
      isFormValid: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePressKey = this.handlePressKey.bind(this);
    this.toggleNicknameForm = this.toggleNicknameForm.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
    this.kickStatusChanged = this.kickStatusChanged.bind(this);
    this.killUser = this.killUser.bind(this);
  }
  kickStatusChanged() {
    this.props.kickStatusChanged();
  }

  killUser() {
    this.props.killUser(this.state.nickname);
  }
  handleChange(event) {
    this.setState({ nickname: event.target.value });
    event.preventDefault();
  }

  toggleNicknameForm() {
    if (this.props.user.isLocal()) {
      this.setState({ showForm: !this.state.showForm });
    }
  }

  toggleSound() {
    this.setState({ mutedSound: !this.state.mutedSound });
  }

  handlePressKey(event) {
    if (event.key === 'Enter') {
      console.log(this.state.nickname);
      if (this.state.nickname.length >= 3 && this.state.nickname.length <= 20) {
        this.props.handleNickname(this.state.nickname);
        this.toggleNicknameForm();
        this.setState({ isFormValid: true });
      } else {
        this.setState({ isFormValid: false });
      }
    }
  }

  render() {
    return (
      <S.StreamBox subscribeNum={this.props.subscribeNum + 1}>
        {this.props.user !== undefined &&
        this.props.user.getStreamManager() !== undefined ? (
          <div className="streamComponent">
            <OvVideoComponent
              user={this.props.user}
              mutedSound={this.state.mutedSound}
            />
            <div id="statusIcons">
              {!this.props.user.isVideoActive() ? (
                <div id="camIcon">카메라 끄기</div>
              ) : null}

              {!this.props.user.isAudioActive() ? (
                <div id="micIcon">음소거</div>
              ) : null}
            </div>
            <div>
              {/* 음소거 선택 */}
              {!this.props.user.isLocal() && (
                <span id="volumeButton" onClick={this.toggleSound}>
                  {this.state.mutedSound ? (
                    <button color="secondary">음소거</button>
                  ) : (
                    <button color="secondary">소리 켜기</button>
                  )}
                </span>
              )}
            </div>
            <div></div>
            {!this.props.user.isLocal() && this.props.kicktrigger && (
              <button id="volumeButton" onClick={this.killUser}>
                강퇴
              </button>
            )}
          </div>
        ) : null}
        <S.NickName>{this.props.user.getNickname()}</S.NickName>
      </S.StreamBox>
    );
  }
}

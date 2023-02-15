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
    this.props.killPopup();
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
      <S.StreamBox
        isOutFocused={
          this.props.nowFocus !== '' && this.props.nowFocus !== this.props.user
        }
        isFocused={this.props.nowFocus === this.props.user}
        subscribeNum={this.props.subscribeNum + 1}
      >
        {this.props.user !== undefined &&
        this.props.user.getStreamManager() !== undefined ? (
          <S.StreamComponent
            onClick={() => {
              this.props.videoClick(this.props.user);
            }}
          >
            <OvVideoComponent
              user={this.props.user}
              mutedSound={this.state.mutedSound}
            />

            <S.StatusIcons>
              {!this.props.user.isVideoActive() ? (
                <S.CamMicIcon>카메라 Off</S.CamMicIcon>
              ) : null}

              {!this.props.user.isAudioActive() ? (
                <S.CamMicIcon>음소거</S.CamMicIcon>
              ) : null}
            </S.StatusIcons>
            {/* 음소거 선택 */}
            {/* {!this.props.user.isLocal() && (
              <S.ControlIcon onClick={this.toggleSound}>
                {this.state.mutedSound ? 'Mute' : 'Sound On'}
              </S.ControlIcon>
            )} */}
            {/* 강퇴 */}

            <S.NickName>{this.props.user.getNickname()}</S.NickName>
          </S.StreamComponent>
        ) : null}
        {!this.props.user.isLocal() && this.props.kicktrigger && (
          <S.ControlIcon onClick={this.killUser}>
            <S.ControlTxt>강퇴</S.ControlTxt>
          </S.ControlIcon>
        )}
      </S.StreamBox>
    );
  }
}

/* eslint-disable */
import React, { Component, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import CarouselBtn from '../../Btn/CarouselBtn/CarouselBtn';
import { useSelector } from 'react-redux';
import * as C from './ChatComponentStyle';

import axios from 'axios';

import clock from '../../../assets/icon/clock.svg';

export default class ChatComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageList: [],
      message: '',
      resStep: [],
      ingredients: [],
      startTime: '',
      recipeIngredient: 'recipe',
      cookingRoomName: '',
      recipeName: '',
      isHost: false,
      accessToken: '',
    };
    this.chatScroll = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handlePressKey = this.handlePressKey.bind(this);
    this.close = this.close.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

    this.recipeIngredient = this.recipeIngredient.bind(this);
    // 재료 가져오기
    this.ingredient = this.ingredient.bind(this);
  }
  componentWillMount() {
    this.ingredient();
    const mapStateToProps = state =>
      // accessToken: state.user.accessToken,
      console.log(state);
    mapStateToProps();
  }
  componentDidMount() {
    this.props.user
      .getStreamManager()
      .stream.session.on('signal:chat', event => {
        const data = JSON.parse(event.data);
        let messageList = this.state.messageList;
        messageList.push({
          connectionId: event.from.connectionId,
          nickname: data.nickname,
          message: data.message,
        });
        const document = window.document;
        setTimeout(() => {
          // avatar.drawImage(video, 200, 120, 285, 285, 0, 0, 60, 60);
          this.props.messageReceived();
        }, 50);
        this.setState({ messageList: messageList });
        this.scrollToBottom();
      });
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handlePressKey(event) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  // 재료,시작시간 가져오기
  async ingredient() {
    const res = await axios.get(
      `https://i8b206.p.ssafy.io:9000/api/room/${
        this.props.user.getStreamManager().stream.session.sessionId
      }`,
      {
        headers: {
          Authorization: `Bearer ${this.state.accessToken}`,
        },
      }
    );
    console.log(res);
    this.setState({
      cookingRoomName: res.data.cookingRoomName,
      recipeName: res.data.recipe.recipeName,
      // 방 생성 유저와 현재 유저를 비교하여, 방장인지 파악
      isHost: this.props.user.getNickname() === res.data.cookingRoomHost,
    });
    this.props.isHost(
      this.props.user.getNickname() === res.data.cookingRoomHost
    );
    const recipeId = res.data.recipe.recipeId;

    const resIng = await axios.get(
      `https://i8b206.p.ssafy.io:9000/api/ingredient/list/${recipeId}`,
      {
        headers: {
          Authorization: `Bearer ${this.state.accessToken}`,
        },
      }
    );
    const resStep = await axios.get(
      `https://i8b206.p.ssafy.io:9000/api/recipestep/list/${recipeId}`,
      {
        headers: {
          Authorization: `Bearer ${this.state.accessToken}`,
        },
      }
    );
    //레시피 정보 video로 보냄
    this.props.getRecipe([resStep.data, res.data.recipe.recipeName]);
    const targetTime = new Date(res.data.cookingRoomStartTime);
    const targetH = targetTime.getHours();
    let targetM = targetTime.getMinutes();
    if (targetM < 10) {
      targetM = `0${String(targetM)}`;
    }
    this.setState({ startTime: `${targetH}:${targetM}` });
    this.setState({ ingredients: resIng.data });
    this.setState({ resStep: resStep.data });
  }
  // 레시피 재료 전환
  recipeIngredient(target) {
    if (target === 'left') {
      this.setState({ recipeIngredient: 'recipe' });
    } else {
      this.setState({ recipeIngredient: 'ingredient' });
    }
  }
  sendMessage() {
    if (this.props.user && this.state.message) {
      let message = this.state.message.replace(/ +(?= )/g, '');
      if (message !== '' && message !== ' ') {
        const data = {
          message: message,
          nickname: this.props.user.getNickname(),
          streamId: this.props.user.getStreamManager().stream.streamId,
        };
        this.props.user.getStreamManager().stream.session.signal({
          data: JSON.stringify(data),
          type: 'chat',
        });
      }
    }
    this.setState({ message: '' });
  }

  scrollToBottom() {
    setTimeout(() => {
      try {
        this.chatScroll.current.scrollTop =
          this.chatScroll.current.scrollHeight;
      } catch (err) {}
    }, 20);
  }

  close() {
    this.props.close(undefined);
  }

  render() {
    return (
      <C.WaitContainer>
        <C.WaitDivideBox>
          <C.WaitTitle>{this.state.cookingRoomName}</C.WaitTitle>

          {/* 유저 정보 입력 공간, 사진도 같이 가져와야함 */}
          <C.WrapUserList>
            <C.WrapUserInfo>
              <C.ThisUserImg src={this.props.userImg} />
              <div>{this.props.user.nickname}</div>
            </C.WrapUserInfo>
            {this.props.remoteUsers.map((v, a) => {
              return (
                <C.WrapUserInfo>
                  <C.ThisUserImg src={v.img} />
                  <div>{v.nickname}</div>
                </C.WrapUserInfo>
              );
            })}
          </C.WrapUserList>
          {/* 재료 및 레시피 정보 입력 공간 */}

          <C.ContentWrap>
            <CarouselBtn
              left={'레시피'}
              right={'재료'}
              recipeIngredient={this.recipeIngredient}
            />
            {this.state.recipeIngredient === 'recipe' ? (
              <C.RecipeWrap>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    fontSize: '2vh',
                  }}
                >
                  <img
                    src={clock}
                    alt="시계아이콘"
                    style={{ marginRight: '0.5vw' }}
                  />
                  {this.state.startTime} 시작
                </div>
                <h1>{this.state.recipeName}</h1>
                {this.state.resStep.map(v => {
                  return (
                    <C.StepTitle>
                      {v.recipeStepNum < 10
                        ? '0' + String(v.recipeStepNum)
                        : v.recipeStepNum}
                      <div>{v.recipeStepContent}</div>
                    </C.StepTitle>
                  );
                })}
              </C.RecipeWrap>
            ) : (
              <C.IngWrap>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    fontSize: '2vh',
                  }}
                >
                  <img
                    src={clock}
                    alt="시계아이콘"
                    style={{ marginRight: '0.5vw' }}
                  />
                  {this.state.startTime} 시작
                </div>
                <h1>{this.state.recipeName}</h1>
                {this.state.ingredients.map(v => {
                  return (
                    <C.StepIngTitle>
                      <div> {v.ingredient.ingredientName}</div>
                      <div>{v.ingredientAmount}</div>
                    </C.StepIngTitle>
                  );
                })}
              </C.IngWrap>
            )}
          </C.ContentWrap>
        </C.WaitDivideBox>
        <C.WaitDivideBox>
          <C.ChatContentWrap>
            <C.ChatComponent>
              <C.DivBox></C.DivBox>
              <C.ChatBox>
                <C.ChatTitle>
                  {/* 방 이름+ 채팅 */}
                  <span>
                    {/* {
                      this.props.user.getStreamManager().stream.session
                        .sessionId
                    } */}
                    채팅
                  </span>
                </C.ChatTitle>
                <C.UserLen>
                  참가자 ({this.props.remoteUsers.length + 1})
                </C.UserLen>
                <C.MsgWrap ref={this.chatScroll}>
                  {this.state.messageList.map((data, i) => (
                    <div
                      key={i}
                      id="remoteUsers"
                      className={
                        'message' +
                        (data.connectionId !== this.props.user.getConnectionId()
                          ? 'left'
                          : 'right')
                      }
                    >
                      {data.nickname === this.props.user.nickname ? (
                        <img
                          src={this.props.userImg}
                          alt="채팅이미지"
                          style={{
                            width: '30px',
                            height: '30px',
                            marignBottom: '1vh',
                          }}
                        />
                      ) : (
                        <img
                          src={this.props.remoteUsers[0].img}
                          alt="채팅이미지"
                          style={{
                            width: '30px',
                            height: '30px',
                            marignBottom: '1vh',
                          }}
                        />
                      )}
                      <div
                        className="msg-detail"
                        style={{ marignBottom: '1vh' }}
                      >
                        <div
                          className="msg-info"
                          style={{ marginTop: '0.5vh' }}
                        >
                          <p> {data.nickname}</p>
                        </div>
                        <div
                          className="msg-content"
                          style={{ marginTop: '1vh' }}
                        >
                          <C.TextBox>{data.message}</C.TextBox>
                        </div>
                      </div>
                    </div>
                  ))}
                </C.MsgWrap>
                <hr />
                <C.InputTxt>
                  <input
                    placeholder="여기에 메세지를 입력해주세요"
                    id="chatInput"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handlePressKey}
                  />
                  <div>
                    <button onClick={this.sendMessage}> 보내기</button>
                  </div>
                </C.InputTxt>
              </C.ChatBox>
            </C.ChatComponent>
          </C.ChatContentWrap>
        </C.WaitDivideBox>
        <C.ExitBox>
          <Link
            to="/Main"
            onClick={() => {
              this.props.onChangeShow();
              this.props.DelRoomRequestInfo();
            }}
          >
            나가기
          </Link>
          {this.state.isHost && <button onClick={this.close}>시작하기</button>}
        </C.ExitBox>
      </C.WaitContainer>
    );
  }
}

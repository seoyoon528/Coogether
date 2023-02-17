# 쿠게더 - 함께 요리하는 라이브 쿠킹 플랫폼

## [🍳지금 요리하러 가기 !](http://i8b206.p.ssafy.io)

## [📺 소개 영상 (UCC)](https://youtu.be/u9HH0QnkUlQ)


# 📢 프로젝트 소개

### ✔️ **프로젝트 명**

---
![Untitled](/uploads/6d6e56c9bac702c10fbd307993dcdf50/Untitled.png)


### ✔️ **실행**

---

[포팅 매뉴얼](https://lab.ssafy.com/s08-webmobile1-sub2/S08P12B206/-/blob/dev/exec/%EC%BF%A0%EA%B2%8C%EB%8D%94_%ED%8F%AC%ED%8C%85%EB%A7%A4%EB%89%B4%EC%96%BC.pdf)

### ✔️ **프로젝트 일정**

---

### **2023-01-03(화) ~ 2023-02-17(금) (7주)**

### ✔️ 협업 툴

---

- Git
- Notion
- JIRA
- MatterMost
- Webex

### ✔️ 기술

---

1. Querydsl을 이용한 Dynamic Query 성능 최적화
2. Spring Security + OAuth2 + JWT 소셜 로그인 구현
3. Jenkins를 이용한 CI/CD Pipeline 구축
4. S3를 이용한 파일 업로드 구현

## ⭐ 쿠게더 기능

---

1. 사용자가 가진 재료를 가상 공간의 나만의 냉장고에 등록
2. 나만의 커스텀 레시피 등록
3. 내 재료를 활용할 수 있는 요리방 추천
4. 가장 빠르게 참가할 수 있는 요리방 추천
5. 사용자가 선호하는 카테고리 기반 요리방 추천
6. 다른 사용자와 함께하는 라이브 쿠킹
7. 내가 사용한 재료를 한 번에 삭제
8. 요리에 참여한 참여자 리스트와 요리방 정보 히스토리 제공
9. 다른 사용자 팔로우
10. 요리방 / 레시피 검색
11. 요리에 필요한 재료가 없다면 구매 링크 연결

## 🎨 화면 디자인

---

![figma](/uploads/945760c21b037119d331bb94c4706e72/figma.png)


## 💥 기술 스택

---

![architecture](/uploads/9b9ed3eb8161621c0605e2a51bb7c014/architecture.png)

```jsx
FE : React(v17.0.2), Redux toolkit, React-router-dom(v5.3.4), styled-components(v5.3.6)

BE : Java(JDK 11), SpringBoot (2.7.7), SpringDataJPA, QueryDSL (5.0.0), Swagger (2.9.2)

DB : MySQL(v8.0.30)

Storage : S3 Bucket

WebRTC : openvidu(2.25.0)

IDE: IntelliJ, VSCode

DevOps : Docker(20.10.23), Jenkins(2.375.3), nginx(1.18.0), AWS ec2 
```

```jsx
1. Querydsl을 이용한 Dynamic Query 성능 최적화

2. Spring Security + OAuth2 + JWT 소셜 로그인 구현

3. S3를 이용한 파일 업로드 구현

4. Jenkins를 이용한 CI/CD Pipeline 구축
```

## 🔔 서비스 플로우


![flow](/uploads/23079ef87406e2a7534e3a7b4a80a036/flow.png)

## 📙 [기능 명세](https://www.notion.so/413d4eca2d46491c83f0c4543bee066c)


![function](/uploads/9c35c5824932f798f9be143b86e19aa5/function.png)

## 💾 [ERD](https://www.notion.so/ERD-b3acd3fae0124044b38b357ee4d9c99c)


![Coogether_ERD](/uploads/5675f7fd87006c8cb956c178096426a1/Coogether_ERD.png)

## 📜  [API Docs](https://www.notion.so/API-Docs-a933fc057ec446b5bf9c2ceb738b0809)


![api](/uploads/8b41cc7b2485d85bc32c051b5b3082a2/api.png)

## 📁 디렉토리 구조


```jsx
📦frontend
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Btn
 ┃ ┃ ┃ ┣ 📂CarouselBtn
 ┃ ┃ ┃ ┣ 📂FloatBtn
 ┃ ┃ ┃ ┗ 📂NextBtn
 ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┃ ┣ 📂AllMyIngredientsModal
 ┃ ┃ ┃ ┣ 📂ConfirmModal
 ┃ ┃ ┃ ┣ 📂CookRoomEnterModal
 ┃ ┃ ┃ ┣ 📂Follow
 ┃ ┃ ┃ ┣ 📂RecipeModal
 ┃ ┃ ┃ ┣ 📂ReportModal
 ┃ ┃ ┃ ┣ 📂StreamFinishModal
 ┃ ┃ ┃ ┣ 📂StreamHistoryModal
 ┃ ┃ ┃ ┗ 📂StreamModal
 ┃ ┃ ┣ 📂Nav
 ┃ ┃ ┣ 📂Rank
 ┃ ┃ ┣ 📂Recipe
 ┃ ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┃ ┗ 📂Register
 ┃ ┃ ┣ 📂Room
 ┃ ┃ ┃ ┣ 📂chat
 ┃ ┃ ┃ ┣ 📂dialog-extension
 ┃ ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┣ 📂stream
 ┃ ┃ ┃ ┣ 📂toolbar
 ┃ ┃ ┃ ┣ 📂verticalCarousel
 ┃ ┃ ┗ 📂Wrapper
 ┃ ┣ 📂hooks
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂Main
 ┃ ┃ ┣ 📂MakeCookRoom
 ┃ ┃ ┣ 📂MyIngredientsManage
 ┃ ┃ ┣ 📂NotFound
 ┃ ┃ ┣ 📂Recipe
 ┃ ┃ ┣ 📂Room
 ┃ ┃ ┣ 📂Search
 ┃ ┃ ┗ 📂User
 ┃ ┃ ┃ ┣ 📂Login
 ┃ ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┃ ┗ 📂SignIn
 ┃ ┣ 📂store
 ┃ ┣ 📂styles
 ┃ ┣ 📂utils
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┃ ┣ 📜App.test.js
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.js
 ┃ ┣ 📜logo.svg
 ┃ ┣ 📜reportWebVitals.js
 ┃ ┗ 📜setupTests.js
 ┣ 📜.eslintrc.js
 ┣ 📜.gitignore
 ┣ 📜.prettierrc.js
 ┣ 📜Dockerfile
 ┣ 📜nginx.conf
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```

```jsx
📦backend
 ┣ 📂.gradle
 ┣ 📂.idea
 ┣ 📂build
 ┃ ┣ 📂generated
 ┃ ┃ ┗ 📂querydsl
 ┃ ┗ 📂tmp
 ┃ ┃ ┗ 📂compileQuerydsl
 ┣ 📂gradle
 ┣ 📂out
 ┣ 📂src/main/java/coogether/backend
 ┃ ┣ 📂config
 ┃ ┣ 📂controller
 ┃ ┣ 📂domain
 ┃ ┣ 📂dto
 ┃ ┣ 📂repository
 ┃ ┃ ┣ 📂cookingroom
 ┃ ┃ ┣ 📂follow
 ┃ ┃ ┣ 📂history
 ┃ ┃ ┣ 📂ingredient
 ┃ ┃ ┣ 📂ingredientlist
 ┃ ┃ ┣ 📂myingredientmanage
 ┃ ┃ ┣ 📂recipe
 ┃ ┃ ┣ 📂recipestep
 ┃ ┃ ┣ 📂report
 ┃ ┃ ┣ 📂token
 ┃ ┃ ┣ 📂user
 ┃ ┃ ┗ 📂userjoinlist
 ┃ ┣ 📂service
 ┃ ┗ 📜BackendApplication.java
 ┣ 📂src
 ┃ ┣ 📂main
 ┃ ┃ ┗ 📂resources
 ┃ ┃ ┃ ┣ 📜application.yml
 ┃ ┃ ┃ ┗ 📜keystore.p12
 ┃ ┗ 📂test
 ┣ 📜.gitignore
 ┣ 📜build.gradle
 ┣ 📜Dockerfile
 ┣ 📜gradlew
 ┣ 📜gradlew.bat
 ┗ 📜settings.gradle
```

## 📢 화면 구성

### 로그인
![1._로그인](/uploads/67b8c872bdd14acf9d93bb15e2208c8f/1._로그인.PNG)
![2._아이디입력](/uploads/a8ed961c341a491d243cd95fb0dc80a6/2._아이디입력.PNG)
![2-1._개인정보_동의화면](/uploads/39d396e055d82f2f7ff2001d56fefe99/2-1._개인정보_동의화면.PNG)
![3._회원가입_추가정보입력](/uploads/8a36138f3fb39753561efd342a27d1c5/3._회원가입_추가정보입력.PNG)
![3-1._회원가입_추가정보입력완료](/uploads/c3d845838b784994717edb80a280e67c/3-1._회원가입_추가정보입력완료.PNG)
![4._회원가입완료](/uploads/34dcc14fb90f95919b85a8579f3c9417/4._회원가입완료.PNG)

### 메인페이지
![5._메인페이지-요리방추천_gif_](/uploads/b659858eeaa6a912819480aaff702ca3/5._메인페이지-요리방추천_gif_.gif)

### 요리방
![7._요리방_gif_](/uploads/0508ffff9fee6674693f0a0371ba573f/7._요리방_gif_.gif)

### 요리방 생성
![7-1._요리방_생성](/uploads/eace733b78980b52e7b57bdd9ece3c6d/7-1._요리방_생성.PNG)
![7-2._요리방_생성완료](/uploads/8e295dcf83d0d90de088e258f6a4d007/7-2._요리방_생성완료.PNG)

### 냉장고
![8._냉장고_gif_](/uploads/411cabcd60e641f8e911b4f9e883eeaf/8._냉장고_gif_.gif)

### 재료 검색
![8-1._재료_검색_gif_](/uploads/d6a9cdb857aca49e423edc56c895eb9d/8-1._재료_검색_gif_.gif)

### 재료 추가
![8-2._냉장고_재료_추가_gif_](/uploads/7f5c217ac87df56a549c96d1454ade61/8-2._냉장고_재료_추가_gif_.gif)

### 재료 즐겨찾기
![8-3._냉장고_재료_즐겨찾기_gif_](/uploads/70888a633da6d75f389f1bd32090ea82/8-3._냉장고_재료_즐겨찾기_gif_.gif)

### 전체 레시피 조회
![9._전체_레시피_조회_gif_](/uploads/9e2b634a6b7f6ff43cbea506d8970334/9._전체_레시피_조회_gif_.gif)

### 레시피 추가
![9-2._레시피_추가_gif_](/uploads/7a91a1c6d2d8400840b767c57aa865d5/9-2._레시피_추가_gif_.gif)

### 요리방 검색
![10._요리방_검색_gif_](/uploads/5e339297bd0c9ec77ce64fa4cd36678f/10._요리방_검색_gif_.gif)

### 요리방 입장
![10-1._요리방_입장시_재료표시_+_구매링크_gif_](/uploads/738f62c287f99ce262f5de2564a8c670/10-1._요리방_입장시_재료표시_+_구매링크_gif_.gif)

### 마이페이지 
![11._마이페이지-팔로우_gif_](/uploads/1e481fe9282be9b7f9771d34f5cbcd2d/11._마이페이지-팔로우_gif_.gif)

![11._마이페이지-히스토리_gif_](/uploads/f7215ac13d84b36c67cfed29c4de4f86/11._마이페이지-히스토리_gif_.gif)

### 요리 대기방
![12._요리_대기방](/uploads/6c0e85abbc4f786ddfb3ee16c83ebc5a/12._요리_대기방.png)

### 요리 진행방
![13._요리_진행방](/uploads/6c3d2d6ea1375911d68e18e37806a4fc/13._요리_진행방.png)


### 신고하기
![14._신고하기](/uploads/c82d620489c621a24a05b5ee21b46f78/14._신고하기.png)

### 내보내기
![15._내보내기](/uploads/bd10c2435d63727ec3b5e004ea1557a5/15._내보내기.gif)

### 다음단계 진행
![16._다음단계_진행](/uploads/5acd6e87ecb4704cbe882408e1729812/16._다음단계_진행.gif)

### 요리 사진 등록
![16._요리_사진_등록](/uploads/721666a26e71fd999e1461d7d7397f43/16._요리_사진_등록.png)

### 히스토리 제공
![17._요리_히스토리](/uploads/7c6a6783ffec62e6672b07de4e894c25/17._요리_히스토리.png)

### 유저 팔로우
![18._유저_팔로우](/uploads/c7910c6e3cbd838ec5e1a6e4bf69c066/18._유저_팔로우.png)

## ✨ EC2 포트


| PORT | 이름 |
| --- | --- |
| 443 | HTTPS |
| 80 | HTTP - HTTPS로 리다이렉트 |
| 8443 | Openvidu |
| 3306 | MySQL |
| 9999 | Jenkins |
| 9000 | Spring boot Docker Container |
| 3000 | React, NginX Docker Container |

## 🚢 **팀원**

![team](/uploads/aee54e017f0fcbff6a0d71f2ac05bca3/team.png)

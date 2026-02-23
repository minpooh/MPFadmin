<h1 align="center"> 🛠 MPF Admin – React 관리자 대시보드 </h1>

**🔗 Live Demo**: [[MPF Admin Dashboard]](https://mpfadmin-lemon.vercel.app/)
&nbsp;

## 📌 Project Overview

React 기반 **SPA 관리자 페이지**로, 운영 중인 웹 서비스의 관리 기능을 제공합니다.<br/>
사이드바 네비게이션, 헤더, 콘텐츠 영역으로 완전히 분리된 레이아웃을 설계하고,<br/>
**React Router v6**를 활용한 클라이언트 사이드 라우팅으로 Dashboard, Review, Notice, FAQ 페이지를 구현했습니다.

&nbsp;

## 👨🏻‍💻 My Role

- **React SPA 레이아웃** 완전 모듈화 설계 (Sidebar/Header/Pages)
- **React Router v6** 도입 및 클라이언트 사이드 라우팅 구현  
- **Tailwind CSS** 기반 반응형 UI 시스템 구축
- Vite 기반 고속 개발 환경 구성
- **NavLink**를 통한 active 상태 자동화

&nbsp;

## 🏗 Architecture

```html
BrowserRouter
↓
App.jsx (Routes/Route)
↓
Page Components (Dashboard/Review/Notice/Faq)
```

&nbsp;

## ✨ Core Implementation

### 1. **React Router v6 SPA 라우팅**
- `BrowserRouter`로 전체 앱 감싸기
- `Routes/Route`로 페이지 매핑
- `NavLink` 콜백 API로 active 스타일링

### 2. **반응형 사이드바 네비게이션**
- Tailwind CSS w-1/3 md:w-72 반응형
- React Icons 통합
- hover/active 상태 전환 애니메이션

&nbsp;

## 🛠 Tech Stack

### Frontend
- React 18+ – SPA 프론트엔드
- React Router v6 – 클라이언트 사이드 라우팅
- Tailwind CSS – 유틸리티 퍼스트 CSS
- React Icons – 아이콘 시스템
- Vite – 초고속 개발 서버

### Build Tool
- Vite – HMR 및 최적화 빌드



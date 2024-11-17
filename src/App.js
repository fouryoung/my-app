import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 라우팅 관련 컴포넌트
import StartPage from './pages/StartPage'
import _ from './pages/_'
import LoginPage from './pages/LoginPage'
import NoticeBoard from './pages/NoticeBoard';
import WritePage from './pages/WritePage';
import Classroom from './pages/Classroom';
import BootCamp from './pages/BootCamp';
import Industry from './pages/Industry';
import Study from './pages/Study';
import NoticeBoot from './pages/NoticeBoot';
import InformationCode from './pages/InformationCode';
import BoardPage from './pages/BoardPage';



function App() {
  return (
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<StartPage/>} />
            <Route path="/_" element={<_ />} />  {/* 두 번째 페이지 라우팅 */}
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/Notice" element={<NoticeBoard />} />
            <Route path="/Write" element={<WritePage />} />
            <Route path="/Classroom" element={<Classroom />} />
            <Route path="/Bootcamp" element={<BootCamp />} />
            <Route path="/Industry" element={<Industry />} />
            <Route path="/Study" element={<Study />} />
            <Route path="/NoticeBoot" element={<NoticeBoot />} />
            <Route path="/InformationCode" element={<InformationCode />} />
            <Route path="/BoardPage" element={<BoardPage />} />
            

    </Routes>
    </BrowserRouter>
  );
}

export default App;
import './App.css';
import { NavLink, Route, Routes, BrowserRouter } from 'react-router-dom'

import Header from './header/Header';
import Main from './components/content/Main';
import Menu from './components/sidebar/Menu';
import WritePosting from './components/Posting/WritePosting';
import RecentPosting from './components/Posting/RecentPosting';
import Profile from './components/sidebar/Profile';
import Footer from './components/footer/Footer';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className='wrap'>
      {/* 헤더 */}
      <div className='header_wrap'>
        <Header />
      </div>
      {/* 중앙 컨텐츠 */}
      <div className='content_wrap'>
        <div className='content'>
          <div className='left_wrap'>
            {/* Router에 의해 URL에 맞춰 content영역 변경 */}
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/posting/recent' element={<RecentPosting />} />
              <Route path='/posting/write' element={<WritePosting />} />
            </Routes>
          </div>
          <div className='right_wrap'>
            <Box className='profile_wrap' sx={{
              display:"flex"
            }}>
              <Profile/>
                <NavLink to='/posting/write'>글쓰기</NavLink>
            </Box>
            <div className='menu_wrap'>
              <Menu/>
            </div>
          </div>
        </div>
      </div>
      {/* 푸터 */}
      <div className='footer_wrap'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
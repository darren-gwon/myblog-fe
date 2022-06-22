import React from "react";
import Header from "./header/Header";
import { NavLink, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Menu from "../sidebar/Menu";
import Profile from "../sidebar/Profile";
import Footer from "./footer/Footer";

const Main = () => {
  return (
    <div className="wrap">
      {/* 헤더 */}
      <div className="header_wrap">
        <Header />
      </div>
      {/* 중앙 컨텐츠 */}
      <div className="content_wrap">
        <div className="content">
          <div className="left_wrap">
            {/* 수정될 영역 */}
            <Outlet />
          </div>
          <div className="right_wrap">
            <Box
              className="profile_wrap"
              sx={{
                display: "flex",
              }}>
              <Profile />
              <NavLink to="/posting/write">글쓰기</NavLink>
            </Box>
            <div className="menu_wrap">
              <Menu />
            </div>
          </div>
        </div>
      </div>
      {/* 푸터 */}
      <div className="footer_wrap">
        <Footer />
      </div>
    </div>
  );
};

export default Main;

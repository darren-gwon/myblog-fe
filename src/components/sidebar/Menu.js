import React from "react";
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <li><NavLink to='/'>전체게시글</NavLink></li>
            <li><NavLink to='/posting'>공지사항</NavLink></li>
            <li><NavLink to='/'>홈</NavLink></li>
            <li><NavLink to='/login'>로그인</NavLink></li>

        </div>
    )
}
export default Menu;
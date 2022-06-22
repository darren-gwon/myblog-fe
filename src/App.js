import "./App.css";
import {
  NavLink,
  Route,
  Routes,
  BrowserRouter,
  Outlet,
} from "react-router-dom";

import Main from "./components/main/Main";
import WritePosting from "./components/posting/WritePosting";
import RecentPosting from "./components/posting/RecentPosting";

import MainLayout from "./components/layout/MainLayout";
import Login from "./components/user/Login";
import Register from "./components/user/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Main />}></Route>
        <Route path="/posting/recent" element={<RecentPosting />}></Route>
        <Route path="/posting/write" element={<WritePosting />}></Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

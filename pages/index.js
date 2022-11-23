import Head from "next/head";
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Header from "../components/Header";
// import FunComp from "../components/FunComp";
// import Counter from "../components/Counter";
// import Youtube from "../components/Youtube";
// import Login from "../components/Login";
// import AuthUser from "../components/AuthUser";
// import UserList from "../components/UserList";
import Users from "../components/Users";
// import Navbar from "../components/Navbar"
// import UserDetail from "../components/UserDatail"

const index = () => {
  return (
    <>
    <Head>
      <title>xya</title>
    </Head>
    {/* <Navbar /> */}
    {/* <Header /> */}
    {/* <FunComp /> */}
    {/* <Counter /> */}
    {/* <Youtube />  */}
    {/* <Login /> */}
    {/* <AuthUser /> */}
    {/* <UserList /> */}
    <Users />
    {/* <UserDetail /> */}
    </>
  );
};

export default index;
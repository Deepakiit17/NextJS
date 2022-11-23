import Head from "next/head";
import Header from "../components/Header";
import FunComp from "../components/FunComp";
import Counter from "../components/Counter";
import Youtube from "../components/Youtube";
import Login from "../components/Login"
import AuthUser from "../components/AuthUser"

const index = () => {
  return (
    <>
    <Head>
      <title>xya</title>
    </Head>
    {/* <Header /> */}
    {/* <FunComp /> */}
    {/* <Counter /> */}
    {/* <Youtube />  */}
    {/* <Login /> */}
    <AuthUser />
    </>
  );
};

export default index;
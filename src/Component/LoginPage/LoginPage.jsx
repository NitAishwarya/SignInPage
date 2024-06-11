import "./LoginPage.css";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from "@react-oauth/google";
import { IoMailOpenOutline } from "react-icons/io5";
import { BiSolidLock } from "react-icons/bi";
import { IoEye } from "react-icons/io5";

import horse from "../Image/horse-removebg-preview.png";

const LoginPage = () => {
  return (
    <div>
      <img src={horse} className="horse" />

      <div
        className="div1"
        style={{ background: "white", borderRadius: "10px" }}
      >
        <text className="head"> Sign In Access </text>
        <p style={{ color: "gray" }} className="subHead">
          {" "}
          You must become a member to login and access the entire site.{" "}
        </p>
        <br />
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <br />
        <hr
          className="hr"
          style={{ color: "lightgray", width: "530px" }}
        />{" "}
        <text
          className="OR"
          style={{ color: "lightgray", background: "white" }}
        >
          {" "}
          OR{" "}
        </text>
        <br />
        <form>
          <text className="text1">Email Address</text> <br />
          <input
            className="email"
            type="email"
            placeholder="Enter email address"
          />{" "}
          <IoMailOpenOutline className="email-icon" />
          <br />
          <text className="text2"> Password </text> <br />
          <input
            className="email"
            type="password"
            placeholder="Enter Password"
          />
          <BiSolidLock className="email-icon" />
          <br />
          <IoEye className="eye" />
        </form>
        <div style={{ textAlign: "right", marginTop: "-45px" }}>
          <text
            className="forgot"
            style={{
              color: "navy",
              fontWeight: "500",
              paddingRight: "9px",
            }}
          >
            {" "}
            Forgot Password{" "}
          </text>{" "}
          <br />
          <br />
          <br />
        </div>
        <button className="btn1"> SIGN IN </button> <br />
        <br />
        <p style={{ color: "gray" }}>
          {" "}
          Not a member yet?{" "}
          <span
            style={{
              color: "navy",
              fontWeight: "500",
            }}
          >
            {" "}
            Sign Up{" "}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

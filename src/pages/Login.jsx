import { useRef } from "react";
import supabase from "../supabase/supabase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigator = useNavigate();

  const onClickLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email === 0) {
      alert("Email을 입력해주세요");
      return;
    }
    if (password === 0) {
      alert("Password를 입력해주세요");
      return;
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    navigator("/");
    console.log("data", data);
    console.log("error", error);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex flex-col gap-4 p-6 border-double shadow-xl h-72 rounded-2xl w-80">
        <h2 className="text-2xl text-center">로 그 인</h2>
        <input
          type="text"
          placeholder="Email"
          ref={emailRef}
          className="w-full px-2 py-2 text-xs border-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          className="w-full px-2 py-2 text-xs border-2 rounded-md"
        />
        <button onClick={onClickLogin} className="p-2 text-xs text-white rounded bg-sky-300">
          로그인
        </button>
        <div className="flex justify-between text-xs ">
          <p>계정이 없으신가요?</p>
          <Link to={"/Signup"} className="font-bold text-sky-400">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

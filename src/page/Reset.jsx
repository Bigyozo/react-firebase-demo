import React, { useCallback, useState } from "react";
import { PrimaryButton, TextInput } from "./component";
import { resetPassword } from "../store/user/user.operation";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Reset = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">パスワードリセット</h2>
      <div className="module-spacer--medium "></div>

      <TextInput
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      ></TextInput>

      <div className="module-spacer--medium "></div>
      <div className="center">
        <PrimaryButton
          label={"Reset Password"}
          onClick={() => dispatch(resetPassword(email))}
        ></PrimaryButton>
        <div className="module-spacer--medium "></div>
        <p onClick={() => dispatch(push("/signin"))}>ログイン画面に戻る</p>
      </div>
    </div>
  );
};
export default Reset;

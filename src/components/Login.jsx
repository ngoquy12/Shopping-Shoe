import React, { useState } from "react";
import { listUser } from "./Data";
import { useNavigate } from "react-router-dom";
import { checkEmai } from "./FomatData";
import { formatDate } from "./FomatData";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(listUser);
  const navigate = useNavigate();

  console.log(new Date());

  // Validate: Kiểm tra dữ liệu đầu vào
  const Validate = () => {
    if (!userName) {
      alert("Tên đăng nhập không được phép để trống");
    } else if (!password) {
      alert("Mật khẩu không được phép để trống");
    }
  };

  // Tiến hành submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gọi hàm validate dữ liệu
    Validate();
    // Tiến hành lặp qua từng phần tư của listUser để kiểm tra với dữ liệu nhập vào từ người dùng
    for (let i = 0; i < users.length; i++) {
      // Kiểm tra username và password trong data có trùng vói dữ liệu nhập vào tuf bàn phím không?
      if (users[i].userName == userName && users[i].password == password) {
        // Nếu đăng nhập thành công thif sẽ chuyển hướng đến trang quản trị sản phẩm
        navigate("/manager-product");
        // Hiển thị thị alert sau khi đăng nhập và chuyển hướng thành công
        setTimeout(() => {
          alert("Đăng nhập thành công");
        }, 200);
        break;
      } else {
        // Nếu đăng nhập thất bại thì sẽ chuyển hướng về trang login
        navigate("/login");
        // làm rỗng giá trị trong ô input
        setUserName("");
        setPassword("");
        setTimeout(() => {
          alert("Đăng nhập thất bại");
        }, 200);
        break;
      }
    }
  };
  const formatDates = formatDate;
  console.log(formatDates());
  return (
    <div>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            {" "}
            Sign in
          </h1>
          <input
            name="user"
            type="text"
            id="inputEmail"
            className="form-control"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            name="pass"
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-group form-check">
            <input
              name="remember"
              defaultValue={1}
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <button className="btn btn-success btn-block" type="submit">
            <i className="fas fa-sign-in-alt" /> Sign in
          </button>
          <hr />
          <button
            className="btn btn-primary btn-block"
            type="button"
            id="btn-signup"
          >
            <i className="fas fa-user-plus" /> Sign up New Account
          </button>
        </form>
        <form action="signup" method="post" className="form-signup">
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            {" "}
            Sign up
          </h1>
          <input
            name="user"
            type="text"
            id="user-name"
            className="form-control"
            placeholder="User name"
            required=""
            autofocus=""
          />
          <input
            name="pass"
            type="password"
            id="user-pass"
            className="form-control"
            placeholder="Password"
            required=""
            autofocus=""
          />
          <input
            name="repass"
            type="password"
            id="user-repeatpass"
            className="form-control"
            placeholder="Repeat Password"
            required=""
            autofocus=""
          />
          <button className="btn btn-primary btn-block" type="submit">
            <i className="fas fa-user-plus" /> Sign Up
          </button>
          <a href="#" id="cancel_signup">
            <i className="fas fa-angle-left" />
            Back
          </a>
        </form>
        <br />
      </div>
    </div>
  );
}

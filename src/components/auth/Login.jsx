import auth from "./auth.module.css";
import "../../css/common.css";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
      <main className="flex-center">
        <div
          className={`${auth["login-card "]} ${auth["auth-card"]} flex-col flex-center gap-md`}
        >
          <h3 className={auth["auth-heading"]}>Login</h3>

          <label className={`flex-col gap-sm full-width`}>
            Enter your email id
            <input
              type="text"
              className={`full-width input-line ${auth["input-line"]} `}
            />
          </label>

          <label className={`flex-col gap-sm full-width`}>
            Enter password
            <div className="flex-row">
              <input
                type="password"
                className={`full-width input-line ${auth["input-line"]}  `}
              />
              <span className="pwd-eye">
                <i className="fas fa-eye-slash"></i>
              </span>
            </div>
          </label>

          <div className={`flex-row spc-btwn full-width`}>
            <label>
              <input type="checkbox" /> Remember me
            </label>

            <a href="#" className="footer-link">
              Forgot your password?
            </a>
          </div>

          <button className="cart-btn full-width">Login</button>
          <div>or</div>

          <Link
            to="/signup"
            className="sign-up text-link text-dec-none cursor-pointer"
          >
            Create New Account
          </Link>
        </div>
      </main>
    </>
  );
}

import { PersonFill, LockFill } from "react-bootstrap-icons";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Login() {
  return (
    <div className="login">
      <Dashboardhead />

      <div className="d-flex align-items-center justify-content-center mainpagehead ">
        <div className="signup-body "></div>
        <div className="oo col-lg-9  col-11"></div>

        <div className="back col-lg-9  col-11">
          <form className="form-body">
            <div className="d-flex align-items-center w-100">
              <div className="form-img">
                <img
                  className="img-fluid"
                  src="https://ouch-cdn2.icons8.com/9FZFmNzLmJtt4cz8XtfpAlnQmY8bUxTOTqjXb-RabcE/rs:fit:624:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjMx/LzQ2YzVhYjYyLWE2/OGYtNDlmZS1iOTUy/LTJiYTJiNjJjYWM0/YS5wbmc.png"
                ></img>
              </div>

              <div className=" form-content ">
                <h2 className="mb-3">𝐋𝐎𝐆𝐈𝐍</h2>

                <div className="input-div">
                  <i>
                    <PersonFill />
                  </i>
                  <input
                    className="input-field"
                    placeholder="name , email , number"
                    type="text"
                  />
                  <span className="bar"></span>
                </div>

                <div className="input-div">
                  <i>
                    <LockFill />
                  </i>
                  <input
                    className="input-field"
                    placeholder="Password"
                    type="password"
                  />
                  <span className="bar"></span>
                </div>

                <div className="col-12 mt-5 d-flex justify-content-center">
                  <button className="button col-4" type="submit">
                    Submit
                  </button>
                </div>
                <p className="mt-4 text-dark">I am already a member</p>
                <a className="text-decoration-none text-dark fs-5 " href="#">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <Dashboardfooter /> */}
    </div>
  );
}

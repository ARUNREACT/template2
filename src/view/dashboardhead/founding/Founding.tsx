import { PersonFill, LockFill } from "react-bootstrap-icons";
import { Firstsildes, Testimonial, Text } from "../../../component/Layout";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Founding() {
  return (
    <div className="main founding">
      <Dashboardhead />
      <div className="mainpagehead pt-1">
        <Firstsildes
          h1={`𝗢𝘂𝗿 𝗖𝗼𝗺𝗽𝗮𝗻𝘆 𝗙𝗼𝘂𝗻𝗱𝗲𝗿 𝗮𝗻𝗱 𝗖𝗼-𝗙𝗼𝘂𝗻𝗱𝗲𝗿`}
          img="https://value4brand.com/wp-content/uploads/2022/07/64-scaled.webp"
        />
      </div>
      <Text h1={"𝗙𝗼𝘂𝗻𝗱𝗶𝗻𝗴 𝗧𝗲𝗮𝗺"} h2={"𝗙𝗼𝘂𝗻𝗱𝗶𝗻𝗴 𝗧𝗲𝗮𝗺"} />

      <div className="col-lg-10 mx-auto py-5">
        <Testimonial
          img={
            "https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1622920319069-Z4F95L48OSY72TJM9RJY/Ollie+Business+LinkedIn+Headshot+Photo.jpg"
          }
          h4={`Derrick Rose`}
          p1={`Co Founder & CEO`}
          p2={`Entrepreneurial director proven his ability to enhance the operational efficiency, customer experience and ultimately profitability of businesses spanning the last 20 years.`}
          p3={
            "Has enjoyed supreme success during employment, for his start up focusing on Digital payments, Distribution Channel, Financial Inclusion, Business Development and other Financial services which will increase the business turnover rapidly."
          }
        />
        <Testimonial
          img={
            "https://eddie-hernandez.com/wp-content/uploads/2021/08/Commercial-Real-Estate-Headshot-1026.jpg"
          }
          h4={`Lebron James`}
          p1={`Co Founder & C0O`}
          p2={`Successful in Sales and Distribution across Pharma Telecom and financial services Focusing on generating business and deriving the same. Have been part of launching team member of Reliance Petroleum, Hutch Vodafone Aircel and MTS, 22 years of experience in all domains.`}
        />
      </div>

      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="signup-body"></div>
        <div className="oo col-lg-9 col-11"></div>

        <div className="back col-lg-9 col-11">
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
                  <button className="submit-btn" type="submit">
                    Submit
                  </button>
                </div>
                <p className="mt-4 text-black">I am already a member</p>
                <a className="text-decoration-none" href="/signup">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="">
        <Dashboardfooter />
      </div>
    </div>
  );
}

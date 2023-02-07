// import { PersonFill, LockFill } from "react-bootstrap-icons";
import {
  Button,
  Firstsildes,
  Input,
  Testimonial,
  Text,
} from "../../../component/Layout";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Contactus() {
  return (
    <div className="main contactus">
      <Dashboardhead />
      <div className="mainpagehead pt-1">
        <Firstsildes
          h1={`𝗖𝗼𝗺𝗲 𝗝𝗼𝗶𝗻 𝗨𝘀 & 𝗘𝘅𝗽𝗹𝗼𝗿𝗲 𝗡𝗲𝘄 𝗢𝗽𝗽𝗼𝗿𝘁𝘂𝗻𝗶𝘁𝗶𝗲`}
          img="https://value4brand.com/wp-content/uploads/2022/07/64-scaled.webp"
        />
      </div>
      <Text h1={"𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗨𝗦"} h2={"𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗨𝗦"} />

      <div className="mt-5" data-aos="zoom-out">
        <div className=" mx-auto d-flex contactus-login flex-wrap justify-content-center px-lg-0 px-sm-5">
          <Input
            inputdiv={"input-div col-lg-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 "}
            placeholder={"First Name"}
            type={"name"}
          />
          <Input
            inputdiv={"input-div col-lg-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11"}
            placeholder={"Last Name"}
            type={"name"}
          />
          <Input
            inputdiv={"input-div col-lg-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11"}
            placeholder={"Email Address"}
            type={"name"}
          />
          <Input
            inputdiv={"input-div four col-lg-8 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11"}
            placeholder={"Organization"}
            type={"name"}
          />
          <Input
            inputdiv={"input-div col-md-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11"}
            placeholder={"Mobile Number"}
            type={"name"}
          />
          <div className="input-div col-md-4 four1 col-md-8 col-11">
            <textarea
              className="input-field col-lg-11 col-11"
              placeholder="Message"
              name="textarea"
              id=""
            ></textarea>
          </div>

          <Input
            inputdiv={"input-div file col-md-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11 "}
            placeholder={"Hello"}
            type={"file"}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Button btnclassname={"col-sm-5 col-8 button"} btnvalue={"Submit"} />
        </div>
      </div>
      <Dashboardfooter />
    </div>
  );
}

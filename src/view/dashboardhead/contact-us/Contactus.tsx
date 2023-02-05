import { PersonFill, LockFill } from "react-bootstrap-icons";
import {
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

      <div className="mt-5">
        <div className=" mx-auto d-flex jj flex-wrap justify-content-center px-lg-0 px-sm-5 py-5">
          <Input
            inputdiv={"input-div col-lg-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 "}
            icon={"fa fa-user"}
            placeholder={"Name"}
            type={"name"}
          />
          <Input
            inputdiv={"input-div col-lg-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11"}
            icon={"fa fa-user"}
            placeholder={"Name"}
            type={"name"}
          />
          <Input
            inputdiv={"input-div col-lg-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11"}
            icon={"fa fa-user"}
            placeholder={"Name"}
            type={"name"}
          />
          <Input
            inputdiv={"input-div four col-lg-8 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11"}
            icon={"fa fa-user"}
            placeholder={"Name"}
            type={"name"}
          />
          <Input
            inputdiv={"input-div col-md-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11"}
            icon={"fa fa-user"}
            placeholder={"Name"}
            type={"name"}
          />
          <Input
            inputdiv={"input-div col-md-4 four1 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11"}
            icon={"fa fa-user"}
            placeholder={"Name"}
            type={"name"}
          />

          <Input
            inputdiv={"input-div file col-md-4 col-md-8 col-11"}
            inputfield={"input-field col-lg-11 col-11 "}
            // icon={"fa fa-user"}
            placeholder={""}
            type={"file"}
          />
        </div>
      </div>
      <Dashboardfooter />
    </div>
  );
}

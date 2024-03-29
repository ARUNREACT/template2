import "./Dashboardfooter.styles.css";

export function Footeroption(props: any) {
  return (
    <li className={props.footerli}>
      <h5 className={props.footheadclassname}>{props.footerhead}</h5>
      <a className="" href={props.href} target={props.footertarget}>
        {props.footaname}
        <span>{props.footeroption}</span>
      </a>
    </li>
  );
}

export function Dashboardfooter() {
  return (
    <div data-aos="zoom-in" className="main-footer">
      <div className="col-lg-11 mt-5 mx-auto py-4 ">
        <div className="row foot justify-content-center ">
          <div className="footimg col-12 col-md-3 col-lg-3">
            <img
              src={require("../../asset/sample1/logo.png")}
              alt="paype logo"
              className="img-fluid  mt-sm-4 "
            />
            {/* <p className="mt-3">
              Eko has been catering to millions of low and moderate-income
              Indians by providing them with a cash-in point to convert their
              cash to digital and make payments for an array of services
            </p> */}
            {/* <h6 className="mt-3">© 2022 PayPe Technologies Private Limited.</h6> */}
          </div>

          <div className="foot1 col-6 col-sm-4 col-md-3 col-lg-3 ">
            <Footeroption
              footheadclassname={"foothead my-4 pt-3 "}
              footerhead={"GENERAL"}
            />
            <Footeroption href={"/"} footeroption={"Home"} />
            <Footeroption href={"/aboutus"} footeroption={"About us"} />
            <Footeroption href={"/services"} footeroption={"Services"} />
          </div>

          <div className="foot1 col-6 col-sm-4 col-md-3 col-lg-2 ">
            <Footeroption
              footheadclassname={"foothead my-4 pt-3 "}
              footerhead={"COMPANY"}
            />
            <Footeroption href={"/founding"} footeroption={"Founding Team"} />
            <Footeroption href={"/contactus"} footeroption={"Contact us"} />
            <Footeroption href={"/login"} footeroption={"Login"} />
          </div>

          <div className="text-center col-12 col-sm-4 col-md-3 col-lg-3 ">
            <Footeroption
              footheadclassname={"foothead my-4 pt-3"}
              footerhead={"CONNECT US"}
            />

            <div className="row mt-4">
              <ul className="footer-icon">
                <li className="linkedin">
                  <a href="#" target="blank">
                    <i className="fa">&#xf08c;</i>
                  </a>
                </li>
                <li className="twitter">
                  <a href="#" target="blank">
                    <i className="fa">&#xf099;</i>
                  </a>
                </li>
                <li className="facebook">
                  <a href="#" target="blank">
                    <i className="fa">&#xf082;</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h6 className="text-center fw-light py-4 m-0">
        © 2022 PayPe Technologies Private Limited.
      </h6>
    </div>
  );
}

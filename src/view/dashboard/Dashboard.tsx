import "./Dashboard.styles.css";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";
import { Carousel, Testimonial, Text } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";

export function Dashboard() {
  return (
    <div className="main">
      <Dashboardhead />
      <div className="mainpagehead">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner ">
            <Carousel
              classname={"carousel-item active"}
              interval={"10000"}
              img={require("../../asset/sample1/main.png")}
              h1={`𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝘄𝗶𝘁𝗵 𝗮𝗻𝗱 𝗰𝗼𝗻𝘃𝗲𝗿𝘁 𝘆𝗼𝘂𝗿 𝗗𝘂𝗸𝗮𝗮𝗻 𝗶𝗻𝘁𝗼 𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗗𝘂𝗸𝗮𝗮𝗻`}
            />
            <Carousel
              classname={"carousel-item active"}
              interval={"2000"}
              img="https://media.istockphoto.com/id/1213544046/photo/happy-grocery-store-owner-holding-credit-card-reader.jpg?s=612x612&w=0&k=20&c=UJpio_CiETgafl9-vdMBQvkMzxKgASy1LkGlHwg_DBY="
              h1={`𝗔𝘀𝘀𝗼𝗰𝗶𝗮𝘁𝗲 𝘄𝗶𝘁𝗵 𝗮𝗻𝗱 𝗲𝗮𝗿𝗻 𝗮𝘁𝘁𝗿𝗮𝗰𝘁𝗶𝘃𝗲 𝗰𝗼𝗺𝗺𝗶𝘀𝘀𝗶𝗼𝗻`}
            />
            <Carousel
              classname={"carousel-item"}
              img="https://media.istockphoto.com/id/1213508052/photo/woman-pointing-at-blank-digital-tablet-screen-in-supermarket.jpg?s=612x612&w=0&k=20&c=JjpVvtu6h1rbPOMRv7yMJyg7sIHmVeUuoSXQcc0N6uU="
              h1={`𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝘄𝗶𝘁𝗵 𝗮𝗻𝗱 𝗰𝗼𝗻𝘃𝗲𝗿𝘁 𝘆𝗼𝘂𝗿 𝗗𝘂𝗸𝗮𝗮𝗻 𝗶𝗻𝘁𝗼 𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗗𝘂𝗸𝗮𝗮𝗻`}
            />
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <Text h1={"𝗢𝗨𝗥 𝗣𝗔𝗥𝗧𝗡𝗘𝗥𝗦"} h2={"𝗢𝗨𝗥 𝗣𝗔𝗥𝗧𝗡𝗘𝗥𝗦"} />
      <div className="container infinite-scroll" id="container">
        <div className="scroll-img">
          <img src="https://vidcom.in/images/razorpay.png" alt="" />
          <img src="https://vidcom.in/images/paytm.png" alt="" />
          <img src="https://vidcom.in/images/airtel.png" alt="" />
          <img src="https://vidcom.in/images/indicore.png" alt="" />
          <img src="https://vidcom.in/images/fino.png" alt="" />
          <img src="https://vidcom.in/images/razorpay.png" alt="" />
          <img src="https://vidcom.in/images/paytm.png" alt="" />
          <img src="https://vidcom.in/images/airtel.png" alt="" />
          <img src="https://vidcom.in/images/indicore.png" alt="" />
          <img src="https://vidcom.in/images/fino.png" alt="" />
        </div>
      </div>

      <Text h1={"𝗧𝗘𝗦𝗧𝗜𝗠𝗢𝗡𝗜𝗔𝗟𝗦"} h2={"𝗧𝗘𝗦𝗧𝗜𝗠𝗢𝗡𝗜𝗔𝗟𝗦"} />
      <div className="testimonial d-flex flex-wrap justify-content-around py-3">
        <Testimonial
          img={"https://vidcom.in/images/testimonial2.jpg"}
          h4={`Arun Kumar`}
          p1={`Fronted Developer`}
          p2={`Vidcom ke sevaye bahut ni surakshit aur vishwasniye hai mujhe bahut aacha laga. Main sab ko vidcom ki sewaon upyog k liye salah dunga.`}
        />
        <Testimonial
          img={"https://vidcom.in/images/testimonial2.jpg"}
          h4={`Arun Kumar`}
          p1={`Fronted Developer`}
          p2={`Vidcom ke sevaye bahut ni surakshit aur vishwasniye hai mujhe bahut aacha laga. Main sab ko vidcom ki sewaon upyog k liye salah dunga.`}
        />
        <Testimonial
          img={"https://vidcom.in/images/testimonial2.jpg"}
          h4={`Arun Kumar`}
          p1={`Fronted Developer`}
          p2={`Vidcom ke sevaye bahut ni surakshit aur vishwasniye hai mujhe bahut aacha laga. Main sab ko vidcom ki sewaon upyog k liye salah dunga.`}
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}

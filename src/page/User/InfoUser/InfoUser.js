import React, { use, useEffect, useState } from "react";
import "./styles.css";
import { FaGlobe, FaShoppingCart } from "react-icons/fa";
import logo from "../../../img/EXE/34.png";
import logo1 from "../../../img/EXE/carusel.jpg";
import CarouselIntro from "./CarouselIntro";
import { FaFacebookF, FaInstagram, FaLink } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import CarousellFeedBack from "./CarousellFeedBack";
import HotProduct from "./HotProduct";
import FooterPage from "../../../components/Footer/FooterPage";

export default function InfoUser() {
  const nagivate = useNavigate();
  const data = [
    {
      key: 1,
      stt: "áo hoodle",
    },
    {
      key: 2,
      stt: "áo hoodle 2",
    },
    {
      key: 3,
      stt: "áo hoodle 3 ",
    },
  ];
  const [mb, setMb] = useState(false);
  const [mp, setMp] = useState(false);
  const [ip, setIp] = useState(false);
  const [dt, setDt] = useState(false);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;

      if (width < 480) {
        setIp(false);
        setMp(false);
        setMb(true);
        setDt(false);
      } else if (width < 768) {
        setIp(false);
        setMp(true);
        setMb(false);
        setDt(false);
      } else if (width < 1024) {
        setIp(true);
        setMp(false);
        setMb(false);
        setDt(false);
      } else {
        setIp(false);
        setMp(false);
        setMb(false);
        setDt(true);
      }
    };

    updateSlidesToShow(); // Cập nhật lần đầu

    window.addEventListener("resize", updateSlidesToShow); // Lắng nghe resize

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Hiệu ứng kéo dài 1 giây
  }, []);

  const onClick = () => {
    nagivate("/home");
    window.location.reload();
  };

  return (
    <div style={{ backgroundColor: "#f8f8f8" }}>
      {/* Header */}
      <div className="header-intro">
        <div className="header-container">
          <span className="font-xmark">xmark</span>
          {(dt || ip) &&(
            <div className="header-right">
              <div className="language">
                <FaGlobe className="icon iconglo" />
                <span>VI - Vietnamese</span>
              </div>
              <div className="cart">
                <FaShoppingCart className="icon cart-icon" />
              </div>
              <button onClick={onClick} className="menu-button">
                Tới trang mua sắm
              </button>
            </div>
          )}
          {mb && <div className="header-right"></div>}
        </div>
      </div>

      {/* Intro */}
      <div className="intro-page">
        <div className="container-intro">
          {dt && (
            <h1 className="allura-regular" style={{ fontSize: "90px" }}>
              Thời trang vượt thời gian
            </h1>
          )}
          {ip  && (
            <h1 className="allura-regular" style={{ fontSize: "70px" }}>
              Thời trang vượt thời gian
            </h1>
          )}
          {mp  && (
            <h1 className="allura-regular" style={{ fontSize: "50px" }}>
              Thời trang vượt thời gian
            </h1>
          )}
          
          <span
            style={{
              letterSpacing: "1px",
              fontSize: "16px",
              fontWeight: "300",
            }}
          >
            Khám phá xu hướng thời trang mới nhất từ xmark. Nâng tầm tủ đồ của
            bạn với những bộ <br /> sưu tập ấn tượng của chúng tôi
          </span>
          <div
            style={{
              background: "white",
              width: "50%",
              borderRadius: "60px",
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 13px",
              marginTop: "7%",
              marginBottom: "1.5%",
            }}
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <span style={{ marginLeft: "5%" }}>Áo thun nam</span>
            <div>
              <img style={{ width: "20%" }} src={logo} alt="img" />
              <button
                style={{
                  border: "none",
                  padding: "10px 25px",
                  background: "rgb(110,181,102)",
                  color: "white",
                  borderRadius: "30px",
                  letterSpacing: "3px",
                  marginLeft: "18px",
                }}
              >
                Tìm kiếm
              </button>
            </div>
          </div>
          <div
            style={{
              marginLeft: "2%",
              marginBottom: "10%",
            }}
          >
            <span>Từ khóa nổi bật: </span>
            {/* handle map */}
            {data.map((item) => (
              <span
                key={item.id} // Always include a unique key when mapping elements
                style={{
                  padding: "2px 1%",
                  border: "1px solid white",
                  borderRadius: "20px",
                  margin: "0 1%",
                }}
              >
                {item.stt}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="banner-intro" style={{ padding: "6% 5%" }}>
        <CarouselIntro />
      </div>

      {/* sản phẩm nội bật */}
      <div>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "900",
            fontFamily: "serif",
          }}
        >
          Thương Hiệu Nổi Bật
        </h1>
        <p
          style={{
            color: "black",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Hơn 50.000+ món đồ second-hand đến từ các thương hiệu nổi tiếng đang
          chờ bạn!
        </p>
        <HotProduct />
      </div>

      {/* Special Offers */}
      <div
        className="officer-intro"
        style={{
          padding: "5%",
          display: "flex",
        }}
        data-aos="zoom-in"
      >
        <img
          style={{ width: "58%" }}
          src={logo1}
          alt=""
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="300"
        />
        <div
          style={{
            padding: "8% 0%",
            textAlign: "center",
            width: "42%",
            letterSpacing: "3px",
          }}
          data-aos="fade-down-left"
          data-aos-delay="800"
        >
          <h2 style={{ fontSize: "40px" }}>Chương trình</h2>
          <h1 style={{ fontSize: "60px" }}>KHUYẾN MÃI</h1>
          <button
            style={{
              marginTop: "40%",
              padding: "10px 45px",
              background: "#2E7D32",
              border: "none",
              color: "white",
              borderRadius: "50px",
              fontSize: "30px",
            }}
          >
            Mua sắm ngay
          </button>
        </div>
      </div>

      {/* Tầm nhìn */}
      <div
        className="officer-intro2"
        style={{
          padding: "4% 5%",
          display: "flex",
        }}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div
          style={{
            width: "42%",
            textAlign: "center",
            padding: "10% 0",
            letterSpacing: "5px",
          }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="300"
        >
          <h1 style={{ fontSize: "40px", color: "#1B5E20" }}>Lợi ích của </h1>
          <h1 style={{ fontSize: "42px", color: "#1B5E20" }}>
            ĐỒ SECOND HAND{" "}
          </h1>
          <button
            style={{
              marginTop: "40%",
              padding: "10px 45px",
              background: "#2E7D32",
              border: "none",
              color: "white",
              borderRadius: "50px",
              fontSize: "30px",
            }}
          >
            Tìm hiểu ngay
          </button>
        </div>
        <img style={{ width: "58%" }} src={logo1} alt="" />
      </div>

      {/* Guest */}
      <div
        className="guest-intro"
        style={{ padding: "4% 5%" }}
        data-aos="fade-in"
      >
        <h1 style={{ fontSize: "73px", textAlign: "center" }}>Khách hàng</h1>
        <div>
          <hr
            style={{
              border: "1px solid black",
              width: "2%",
            }}
          />
        </div>
        <p style={{ textAlign: "center", color: "black", marginTop: "3%" }}>
          This is your Team section. Briefly introduce the team then add their
          bios below.
        </p>
        <div>
          <CarousellFeedBack />
        </div>
      </div>

      {/* Footer */}
      <FooterPage />
    </div>
  );
}

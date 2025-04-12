import React, { useState, useRef, useEffect } from "react";
import { Carousel, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import logo1 from "../../../img/EXE/1.png";
import logo2 from "../../../img/EXE/1.png";
import logo3 from "../../../img/EXE/1.png";
import logo4 from "../../../img/EXE/1.png";
import logo5 from "../../../img/EXE/1.png";
import logo6 from "../../../img/EXE/1.png";
import logo7 from "../../../img/EXE/1.png";
import logo8 from "../../../img/EXE/1.png";

const { Meta } = Card;

const CarouselIntro = () => {
  const carouselRef = useRef();
  const [slidesToShow, setSlidesToShow] = useState(4);


  const products = [
    {
      id: 1,
      title: "Sản phẩm mới",
      price: "100.000đ",
      image: logo1,
      image2: logo2,
    },
    {
      id: 2,
      title: "Sản phẩm mới",
      price: "100.000đ",
      image: logo2,
      image2: logo3,
    },
    {
      id: 3,
      title: "Sản phẩm mới",
      price: "100.000đ",
      image: logo3,
      image2: logo4,
    },
    {
      id: 4,
      title: "Sản phẩm mới",
      price: "100.000đ",
      image: logo4,
      image2: logo5,
    },
    {
      id: 5,
      title: "Sản phẩm mới",
      price: "100.000đ",
      image: logo5,
      image2: logo6,
    },
    {
      id: 6,
      title: "Sản phẩm mới",
      price: "100.000đ",
      image: logo6,
      image2: logo7,
    },
    {
      id: 7,
      title: "Sản phẩm mới rer e rerer e",
      price: "100.000đ",
      image: logo7,
      image2: logo8,
    },
    {
      id: 8,
      title: "Sản phẩm mới",
      price: "100.000đ",
      image: logo8,
      image2: logo1,
    },
  ];

  const [imageSrcs, setImageSrcs] = useState(
    products.map((product) => product.image)
  );

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
  
      if (width < 480) {
        setSlidesToShow(1);
      } else if (width < 768) {
        setSlidesToShow(2);
      } else if (width < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };
  
    updateSlidesToShow(); // Cập nhật lần đầu
  
    window.addEventListener("resize", updateSlidesToShow); // Lắng nghe resize
  
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);
  

  return (
    <div style={{ borderRadius: "10px", position: "relative" }}>
      <h1
        style={{
          color: "black",
          marginBottom: "50px",
          fontSize: "70px",
          marginLeft: "15px",
        }}
      >
        Sản phẩm nổi bật
      </h1>

      <LeftOutlined
        onClick={() => carouselRef.current.prev()}
        style={{
          position: "absolute",
          left: "20px",
          top: "65%",
          transform: "translateY(-50%)",
          fontSize: "24px",
          color: "green",
          cursor: "pointer",
          zIndex: 1,
        }}
      />

      <Carousel
        ref={carouselRef}
        autoplay
        dots={false}
        slidesToShow={slidesToShow}
        arrows={false}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            style={{ padding: "10px", marginRight: "15px" }}
          >
            <Card
              hoverable
              style={{
                width: "100%",
                textAlign: "center",
                border: "none",
                boxShadow: "none",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.03)",
                borderRadius: "0px",
              }}
              cover={
                <div style={{ position: "relative", paddingTop: "100%" }}>
                  <img
                    src={imageSrcs[index]}
                    alt={product.title}
                    onMouseEnter={() => {
                      const newImages = [...imageSrcs];
                      newImages[index] = product.image2;
                      setImageSrcs(newImages);
                    }}
                    onMouseLeave={() => {
                      const newImages = [...imageSrcs];
                      newImages[index] = product.image;
                      setImageSrcs(newImages);
                    }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "350%",
                      height: "auto",
                      transition: "opacity 0.5s ease-in-out", // 🔥 Hiệu ứng chuyển đổi mượt
                      opacity: 1,
                    }}
                  />
                </div>
              }
            >
              <div
                style={{
                  textAlign: "left",
                  marginTop: "3%",
                  marginLeft: "10%",
                  fontSize: "20px",
                }}
              >
                {product.title.length > 10
                  ? product.title.slice(0, 10) + "..."
                  : product.title}
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "16px",
                  marginLeft: "10%",
                  fontSize: "24px",
                  color: "#42B635",
                  fontWeight: "bold",
                }}
              >
                {product.price}
              </div>
            </Card>
          </div>
        ))}
      </Carousel>

      <RightOutlined
        onClick={() => carouselRef.current.next()}
        style={{
          position: "absolute",
          right: "20px",
          top: "65%",
          transform: "translateY(-50%)",
          fontSize: "24px",
          color: "green",
          cursor: "pointer",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default CarouselIntro;

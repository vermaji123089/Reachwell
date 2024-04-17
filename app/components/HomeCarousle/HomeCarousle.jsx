"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const HomeCarousle = () => {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      stopOnHover={true}
      showStatus={false}
     
    >
      <div>
        <Image
          src={"/assets/homeslide.webp"}
          alt="home slide"
          width={1280}
          height={200}
          
        />
        {/* <img src={"/assets/homeslide.webp"} alt="home slide"/> */}

        {/* <p className="legend text-white bg-gray-800 bg-opacity-50 p-2">Welcome To Reachwell Worldwide Express</p> */}
      </div>
      <div>
      {/* <Image
          src={"/assets/banner/homeslidenew.webp"}
          alt="home slide"
          width={1280}
          height={200}
          
        /> */}
        <img src="https://5.imimg.com/data5/BR/GT/GLADMIN-62817844/domestic-courier-service-500x500.png" alt="" />
        {/* <p className="legend text-red bg-gray-800 bg-opacity-50 p-2" >Legend</p>  */}
      </div>
      <div>
        <img src="https://5.imimg.com/data5/SELLER/Default/2022/9/WA/UU/YV/138420665/local-courier-services-500x500.jpg" alt="" />
      </div>
    </Carousel>
  );
};

export default HomeCarousle;

import { Download } from "@mui/icons-material";
import React from "react";
import "./Home.css";
import Product from "./Product";
import Drow from "./Drow";
// import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61gPOiG6YiL._SX3000_.jpg"
          alt=""
        />
         <div className="home_row">
          <Product
            title="OnePlus 80 cm (32 inches) Y Series HD Ready LED "
            price="420000"
            rating={3}
            image="https://m.media-amazon.com/images/I/71d5fMDvq9L._AC_UY218_.jpg"
          />

          <Product
          id="12121212"
            title="Acer 80 cm (32 inches) I Series HD Ready Android Smart LED "
            price="28000"
            rating={4}
            image="https://m.media-amazon.com/images/I/712am1RDNiL._AC_UY218_.jpg"
          />

          <Product
            title="Kodak 80 cm (32 inches) HD Ready Certified Android LED TV"
            price="25000"
            rating={3}
            image="https://m.media-amazon.com/images/I/81pOKCk2z1L._AC_UY218_.jpg"
          />
          {/* <Product 
          title=''
          price=''
          rating={}
          image = ""
          /> */}
        </div>
         <div className="home_row">
          <Product
            title='Noise ColorFit Pro 4 Advanced Bluetooth Calling Smart Watch with 1.72" TruView Display'
            price="2999"
            rating={4}
            image="https://m.media-amazon.com/images/I/61u2dhY-JBL._AC_UL320_.jpg"
          />

          <Product
            title="boAt Wave Call Smart Watch, Smart Talk with Advanced Dedicated Bluetooth "
            price="5000"
            rating={3}
            image="https://m.media-amazon.com/images/I/614AipEWSIL._AC_UL320_.jpg"
          />

          <Product
            l
            title='boAt Wave Lite Smartwatch with 1.69" HD Display, Sleek Metal Body, HR & SpO2'
            price="6000"
            rating={4}
            image="https://m.media-amazon.com/images/I/61akt30bJsL._AC_UL320_.jpg"
          />

          <Product
            title="Noise Pulse Go Buzz Bluetooth Calling Smart Watch"
            price="19000"
            rating={1}
            image="https://m.media-amazon.com/images/I/612uv057m8L._AC_UL320_.jpg"
          />
        </div>  
       
        <div className="home_row">
          <Product
            title="ASIAN
            Men's Wonder-13 Sports Running"
            price="2500"
            rating={5}
            image="https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg"
          />

          <Product
            title="Bourge
            Mens Loire-z178 Running Shoe"
            price="2600"
            rating={4}
            image="https://m.media-amazon.com/images/I/71+LQt0KwNS._AC_UL320_.jpg"
          />

          <Product
            title="Campus
            Men's OXYFIT (N) Walking Shoe"
            price="1300"
            rating={3}
            image="https://m.media-amazon.com/images/I/61ePa5fEKnL._AC_UL320_.jpg"
          />

          <Product
            title="BATA
            Mens Alfred E Formal Shoes"
            price="4000"
            rating={4}
            image="https://m.media-amazon.com/images/I/71HrC2zHK+L._AC_UL320_.jpg"
          />
          <Product
            title="Nike
            Jordan Mens Air Jordan "
            price="70000"
            rating={4}
            image="https://m.media-amazon.com/images/I/61OzUni8t2L._AC_UL320_.jpg"
          />
        </div>
        <div className="home_row">
          <Drow 
          link = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Cat_Intgration/CEPC/Dongles_routers_1500x300.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="ASUS Vivobook 14, Intel Core i7-1165G7 11th Gen"
            price="56900"
            rating={4}
            image="https://m.media-amazon.com/images/I/611SRh1TG7L._AC_UY218_.jpg"
          />
          <Product
            title='Samsung Galaxy Book3 Pro Intel 13th Gen i7 EvoTM 40.62cm(16")'
            price="149900"
            rating={3}
            image="https://m.media-amazon.com/images/I/71YKQeB6onL._AC_UY218_.jpg"
          />
          <Product
            title='Lenovo V15 AMD Ryzen 3 5300U 15.6" (39.62cm) '
            price="₹32,990"
            rating={2}
            image="https://m.media-amazon.com/images/I/61ZSIAryRmL._AC_UY218_.jpg"
          />
          <Product
            title="Apple 2020 MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm"
            price="81000"
            rating={4}
            image="https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY218_.jpg"
          />
        </div>

        <div className="home_row">
          <Drow 
          link = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/072021/bookshprefresh/1500-x-300-header-BHP-Final.jpg"
          />
        </div>

       

       

        {/* <div className="home_row">
          <Footer/>
        </div> */}
       
      </div>
    </div>
  );
}

export default Home;

import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import ProductNewPC from "../../components/ProductNew/ProductNewPC";

const ProductNew = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "/get_product_new",
    })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="amante-new container">
      <div className="row row-new">
        <div className="col-left col-4">
          <div className="title-best">
            <p>신상품</p>
            <h2>NEW</h2>
            <a className="icon-arrow" href="#">
              전체보기
            </a>
          </div>
        </div>
        <div className="col-right col-8">
          <Swiper
            breakpoints={{
              1297: {
                slidesPerView: 4,
              },
              0: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            <div className="slide-new">
              {products &&
                products.map((item) => (
                  <SwiperSlide
                    key={item.product_cd}
                    style={{ width: 296.688 }}
                    className="swiper-item"
                  >
                    <ProductNewPC product={item} />
                  </SwiperSlide>
                ))}
            </div>
            <div
              className="item-opacity"
              style={{ left: 21, bottom: 407 }}
            ></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductNew;

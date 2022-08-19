const ProductNewPC = ({ product }) => {
  const { product_nm, supply_price, sale_price, file_nm } = product;

  const salePrice = Math.ceil((supply_price / sale_price) * 10);

  return (
    <div
      id="owl-slide-new"
      className="owl-carousel owl-theme owl-slide-new"
      style={{ marginLeft: 20 }}
    >
      <div className="item">
        <div className="">
          <p className="label">6컬러</p>
          <a href="#">
            <img src={`images/${file_nm}`} alt="" />
          </a>
          <div className="caption-infor">
            <a href="#">
              <p className="txt" style={{ marginBottom: 20 }}>
                {product_nm} <span>6컬러(SS/Q/K)</span>
              </p>
            </a>

            <p className="price price-active ">
              <span>{supply_price}원</span>
              <span className="percent-sale-active">{salePrice}%</span>
              <span style={{ fontweight: 400 }} className="label-season">
                여름침구
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNewPC;

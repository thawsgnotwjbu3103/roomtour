import React from 'react';

const BestProductItem = (props) => {
    const { product_nm, sale_price, fee_rate, file_nm } = props.product;
    const no = props.no
    return (
        <>
            {
                props.mode === "PC" ?
                    (
                        <div className="col-4 ">
                            <div className={(no === 0 || no === 1 || no === 2) ? (no===0 ? "col-img-top img-active" : "col-img-top") : "col-img-bottom"}>
                                <p className="label">6컬러</p>
                                <a href="/#"><img src={`https://www.amante.co.kr/uploads/product/` + file_nm} alt="" /></a>
                                <div className="caption-infor">
                                    <a href="/#">
                                        <p className="txt">{product_nm}</p>
                                    </a>
                                    {
                                        no === 0 ?
                                            <>
                                                <p className="price price-active">
                                                    <span>{sale_price}원</span>
                                                    <span className="percent-sale-active">{fee_rate}%</span>
                                                    <span style={{fontWeight: 400}} className="label-season">여름침구</span>
                                                </p>
                                            </> :
                                            <>
                                                <div className="space-hr">
                                                    <hr />
                                                </div>
                                                <p className="price">
                                                    <span>{sale_price}원</span>
                                                    <span className="percent-sale">{fee_rate}%</span>
                                                    <a href="/#"><span className="icon-arrow">arrow</span></a>
                                                </p>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        <div className="col-6">
                            <p className="label">6컬러</p>
                            <a href="/#"><img src={`https://www.amante.co.kr/uploads/product/` + file_nm} alt="" /></a>
                            <div className="caption-infor">
                                <a href="/#">
                                    <p className="txt">{product_nm}</p>
                                </a>
                                <p className="price">
                                    <span>{sale_price}원</span>
                                    <span className="percent-sale">{fee_rate}%</span>
                                </p>
                            </div>
                        </div>
                    )
            }
        </>
    );
}

export default BestProductItem;

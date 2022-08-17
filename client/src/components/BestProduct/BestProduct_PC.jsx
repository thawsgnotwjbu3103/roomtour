import { React, useState, useEffect } from 'react';
import axios from 'axios';
const BestProductPC = (props) => {
    const { product_cd, product_nm, sale_price, fee_rate } = props.product;

    const [imageName, setImageName] = useState("");
    useEffect(() => {
        axios({
            method: "GET",
            url: "/get_images/" + product_cd
        }).then(res => setImageName(res.data[0].file_nm))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="col-4 ">
            <div className="col-img-bottom">
                <p className="label">6컬러</p>
                <a href="#"><img src={`images/`+imageName} alt="" /></a>
                <div className="caption-infor">
                    <a href="#">
                        <p className="txt">{product_nm}</p>
                    </a>
                    <div className="space-hr">
                        <hr />
                    </div>
                    <p className="price">
                        <span>{sale_price}원</span>
                        <span className="percent-sale">{fee_rate}%</span>
                        <a href="#"><span className="icon-arrow">arrow</span></a>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default BestProductPC;

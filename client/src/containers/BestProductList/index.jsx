import {React, useState, useEffect} from 'react';
import BestProductMB from '../../components/BestProduct/BestProduct_MB';
import BestProductPC from '../../components/BestProduct/BestProduct_PC';
import axios from 'axios';

const BestProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "/best_products"
        }).then(res => setProducts(res.data))
          .catch(err => console.log(err))
    }, []);

    
    return (
        <div className="amante-best">
            <div className="row row-best">
                <div className="col-left col-4">
                    <div className="title-best">
                        <p>베스트</p>
                        <h2>amante <br /> best</h2>
                        <a className="icon-arrow" href="#">전체보기</a>
                    </div>
                </div>
                <div id="img-best-pc" className="col-right col-8">
                    <div className="row">
                        {
                            products && products.map(item => <BestProductPC key={item.product_cd} product = {item}/>)
                        }
                    </div>
                </div>
                <div id="img-best-mb" className="best-mb">
                    <div className="flex-container">
                        <div className="row">
                        {
                            products && products.map(item => <BestProductMB key={item.product_cd} product = {item}/>)
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-see-more">
                <button type="button" className="btn-more">9개 더보기</button>
            </div>
        </div>
    );
};

export default BestProductList;

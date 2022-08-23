import React from 'react';

const BottomBanner = () => {
    return (
        <div className="banner-bottom">
            <a href="#">
                <div className="txt-banner">
                    <span>04.28 - 05.29</span>
                    <h4>고밀도 300T 60수 침구</h4>
                    <p>고밀도의 촘촘함을 더한  깨끗한 순면</p>
                    <button type="button">전제품 20% 세일</button>
                </div>
                <picture>
                    <source srcSet="images/banner-bottom.png" media="(min-width: 768px)" />
                    <source srcSet="images/banner-bottom-mb.png" media="(max-width: 767px)" />
                    <img src="images/banner-bottom.png" alt />
                </picture>
            </a>
        </div>
    );
}

export default BottomBanner;

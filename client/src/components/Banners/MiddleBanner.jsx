import React from 'react';

const MiddleBanner = () => {
    return (
        <div className="banner-middle-main">
            <div className="img-banner-middle">
                <a href="#">
                    <div className="txt-banner">
                        <div className="infor-txt">
                            <p>잠 잘 때 만큼은</p>
                            <p>미세먼지 없는 이불</p>
                            <span>04.22-05.01</span>
                        </div>
                    </div>
                    <picture>
                        <source srcSet="images/banner-middle.png" media="(min-width: 768px)" />
                        <source srcSet="images/banner-middle-mb.png" media="(max-width: 767px)" />
                        <img src="images/banner-middle.png" alt />
                    </picture>
                </a>
            </div>
        </div>
    );
}

export default MiddleBanner;

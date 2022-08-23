import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
        <div className="top-footer">
            <div className="footer-infor container">
                <div className="colum col-left">
                    <div className="col-cus col-infor-cus">
                        <div className=" col-top">
                            <p>CUSTOMER CENTER</p>
                            <span>1588-2933</span>
                        </div>
                        <div className=" col-bottom">
                            <p>평일 10시-17시</p>
                            <p>점심시간 12시-13시</p>
                            <p>주말 및 공휴일은 휴무입니다.</p>
                        </div>
                    </div>
                    <div className="col-cus col-bank-infor">
                        <div className="col-top">
                            <p>BANK INFO</p>
                            <span>1588-2933</span>
                        </div>
                        <div className="col-bottom">
                            <p>농협 245-01-001182</p>
                            <p>예금주 (주)평안</p>
                        </div>
                    </div>
                </div>
                <div className="colum col-right">
                    <button type="button" className="btn-footer">고객센터</button>
                </div>
            </div>

        </div>
        <div className="middle-footer container">
            <div className="nav-footer">
                <ul>
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#">이용안내</a></li>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보처리</a></li>
                </ul>
            </div>
        </div>
        <div className="bottom-footer">
            <div className="txt-infor container">
                <h5>(주)평안 <span>대표</span> 오희택</h5>
                <p><span>본사</span> 대구광역시 달서구 성서로71</p>
                <p><span>서울사업소</span> 서울시 강서구 마곡동로 31</p>
                <p><span>사업자등록번호</span> 514-81-16510</p>
                <p><span>통신판매업소신고번호</span> 대구시 42호</p>
                <p><span>개인정보보호책임자</span> 정주환(webmaster@ono.co.kr)</p>
            </div>
        </div>
    </div>
    );
};

export default Footer;
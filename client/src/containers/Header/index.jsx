import { React, useState, useEffect } from 'react';
import axios from 'axios';
import TopMenu from '../../components/Menu/TopMenu';

const Header = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "/top_menu"
        }).then(res => setMenu(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <div className="header-pc">
                <div className="header">
                    <a href="#" target="">
                        <img src="./images/top_logo.png" alt="" />
                    </a>
                </div>
                <div className="nav-header">
                    <div className="nav">
                        <div className="nav-left">
                            <ul>
                                <li style={{ marginTop: 8 }}>
                                    <a href="#" target="">
                                        <img src="./images/pc_logo.png" alt="" />
                                    </a>
                                </li>

                                {
                                    menu && menu.map(item => <TopMenu key={item.banner_seq} topMenu={item} />)
                                }

                            </ul>
                        </div>
                        <div className="nav-right">
                            <ul>
                                <li>
                                    <div className="form-search-pc">
                                        <form acction="">
                                            <input
                                                type="text"
                                                className="input-search-pc"
                                                name="search"
                                                placeholde=""
                                            />
                                            <button type="button" className="icon-search" />
                                        </form>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" target="">
                                        회원가입
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="">
                                        로그인
                                    </a>
                                </li>
                            </ul>
                            <button
                            type="button"
                            className="btn-search-tablet icon-search"
                            onclick="openSearch()"
                        />
                            <div id="myOverlay" className="overlay">
                                <span
                                    className="closebtn"
                                    onClick="closeSearch()"
                                    title="Close Overlay"
                                >
                                    ×
                                </span>
                                <div className="overlay-content">
                                    <form action="/action_page.php">
                                        <input type="text" placeholder="Search.." name="search" />
                                        <button type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header mb */}
            <div class="header-mb">
                <div id="top-mb" class="top-nav-mb">
                    <div class="logo-mb">
                        <img src="images/pc_logo .png" alt="" />
                    </div>
                    <div class="btn-toggle">
                        <button id="open-toggle" type="button" class="toggle-open icon-toggle" onclick="openToggle()"></button>
                    </div>
                    <div class="icon-right-top">
                        <button type="button" class="icon-search-mb" onclick="openSearchmb()"></button>
                        <button type="button" class="icon-cart-mb"></button>
                    </div>
                    <div id="toggle-search" class="overlay">
                        <span class="closebtn" onclick="closeSearchmb()" title="Close Overlay">×</span>
                        <div class="overlay-content">
                            <form action="/action_page.php">
                                <input type="text" placeholder="Search.." name="search" />
                                <button type="submit" ></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="nav-mb" class="nav-mb">
                    <ul>
                        {
                            menu && menu.map(item => <TopMenu key={item.banner_seq} topMenu={item} />)
                        }
                    </ul>
                </div>
                <div id="div-toggle-mb" class="toggle-mb">

                    <span class="close-toggle" onclick="closeToggle()">x</span>
                    <div class="toggle-top">
                        <div class="logo">
                            <img src="./images/pc_logo.png" alt="" />
                        </div>
                        <div class="icon-app">
                            <p class="txt">앱 다운로드</p>
                            <button type="button" class="icon-android"></button>
                            <button type="button" class="icon-ios"></button>
                        </div>
                    </div>
                    <div class="btn-login-toggle">
                        <button type="button" class="btn-toggle-group btn-login-mb">로그인</button>
                        <button type="button" class="btn-toggle-group btn-sign-mb">회원가입</button>
                    </div>
                    <div class="icon-service-mb">
                        <ul>
                            <li class="icon-cart-toggle"><a href="#">장바구니</a></li>
                            <li class="icon-deliver"><a href="#">주문/배송</a></li>
                            <li class="icon-user"><a href="#">마이페이지</a></li>
                            <li class="icon-cs"><a href="#">고객센터</a></li>
                        </ul>
                    </div>
                    <div class="cate-toggle">
                        <ul>
                            <li class="icon-sale"><a href="#">SALE</a></li>
                            <li class="icon-pet"><a href="#">PET</a></li>
                            <li class="icon-concept"><a href="#">컨셉룸</a></li>
                            <li class="icon-new"><a href="#">신상품</a></li>
                            <li class="icon-best"><a href="#">베스트</a></li>
                        </ul>
                    </div>
                    <div class="list-icon-cate-mb">
                        <h4>카테고리</h4>
                        <ul>
                            <li><a href="#"><img src="images/bed1.png" alt="" /></a>
                                <p>침구</p>
                            </li>
                            <li><a href="#"><img src="images/kids1.png" alt="" /></a>
                                <p>키즈</p>
                            </li>
                            <li><a href="#"><img src="images/cutton1.png" alt="" /></a>
                                <p>커튼</p>
                            </li>
                            <li><a href="#"><img src="images/lug1.png" alt="" /></a>
                                <p>러그</p>
                            </li>
                            <li><a href="#"><img src="images/kitchen1.png" alt="" /></a>
                                <p>키친</p>
                            </li>
                            <li><a href="#"><img src="images/mattress1.png" alt="" /></a>
                                <p>매트리스</p>
                            </li>
                            <li><a href="#"><img src="images/homedeco1.png" alt="" /></a>
                                <p>홈데코</p>
                            </li>
                            <li><a href="#"><img src="images/p1.png" alt="" /></a>
                                <p>솜</p>
                            </li>
                            <li><a href="#"><img src="images/bath1.png" alt="" /></a>
                                <p>욕실</p>
                            </li>
                            <li><a href="#"><img src="images/Background copy 1.png" alt="" /></a>
                                <p>생활용품</p>
                            </li>
                        </ul>
                    </div>
                    <div class="list-icon-bottom-mb">
                        <ul>
                            <li class="icon-special"><a href="#">기획전</a></li>
                            <li class="icon-community"><a href="#">커뮤니티</a></li>
                            <li class="icon-push"><a href="#">알림내역</a></li>
                            <li class="icon-setting"><a href="#">알림설정</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

import { React, useState, useEffect } from 'react';
import axios from 'axios'
import DisplayItem from '../../components/Display/DisplayItem';

const Display = () => {
    const [displaylist, setDisplaylist] = useState([]);
    useEffect(() => {
        axios({
            method: "GET",
            url: "/list_display"
        }).then(res => setDisplaylist(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="display">
            <div className="row container">
                {/* <!--display-pc--> */}
                <div id="display-pc" className="img-display">
                    {
                      displaylist && displaylist.map((item, index) => <DisplayItem mode="PC" number={index} display={item}/>)  
                    }
                </div>

                <div className="title-display">
                    <p>오늘의 기획전</p>
                    <h3>DISPLAY</h3>
                    <a href="#" className="icon-arrow">전체보기</a>
                </div>
                {/* <!--display-mb--> */}
                <div id="display-mb" className="display-mb">
                    <div id="slide-display" className="owl-carousel owl-theme  owl-display">
                        <div className="item">
                            <a href="#">
                                <img src="images/images-1.png" />
                                <div className="caption-display">
                                    <p>아망떼 X 디즈니 콜라보레이션</p>
                                    <span>디즈니 친구들이 놀러왔어요!</span>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#">
                                <img src="images/img-7.png" />
                                <div className="caption-display">
                                    <p>아망떼 X 디즈니 콜라보레이션</p>
                                    <span>디즈니 친구들이 놀러왔어요!</span>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#">
                                <img src="images/img-6.png" />
                                <div className="caption-display">
                                    <p>아망떼 X 디즈니 콜라보레이션</p>
                                    <span>디즈니 친구들이 놀러왔어요!</span>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="btn-see-more">
                <button type="button" className="btn-more">9개 더보기</button>
            </div>
        </div>
    );
}

export default Display;


import {React, useState, useEffect} from 'react';
import axios from 'axios'
import InstagramItem from '../../components/Insta/InstagramItem';
const Instagram = () => {

    const [instaList, setInstaList] = useState([]);
    useEffect(()=>{
        axios({
            method: "GET",
            url: "/list_insta"
        }).then(res => setInstaList(res.data))
          .catch(err => console.log(err))
    }, [])

    return (
        <div className="container insta">
            <div className="row">
                <div className="title-insta">
                    <p>인스타그램</p>
                    <h3>INSTA</h3>
                    <a href="#" className="icon-arrow">전체보기</a>
                </div>
                <div className="img-insta">
                    {/*gird-insta-pc*/}
                    <div className="gird-insta">
                        {
                            instaList && instaList.map(item => <InstagramItem key={item.seq} insta = {item}/>)
                        }
                    </div>
                    {/*gird-insta-mb*/}
                    <div className="gird-insta-mb">
                        {
                            instaList && instaList.map(item => <InstagramItem key={item.seq} insta = {item}/>)
                        }
                    </div>
                    <div className="btn-arrow">
                        <button type="button" className="icon-insta">icon-arrow</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Instagram;

import {React, useState, useEffect} from 'react';
import axios from 'axios';
import ReviewItem from '../../components/ReviewItems/RoomtourReview';
const RoomTourReviews = () => {

    const [reviewList, setReviewList] = useState([]);
    useEffect(() => {
        axios({
            method: "GET",
            url: "/reviews"
        }).then(res => setReviewList(res.data))
          .catch(err => console.log(err))
    }, []);

    return (
        <div className="house-warming container">
            <div className="title-house-warming">
                <p>아망떼 집들이</p>
                <h3>ROOM TOUR</h3>
                <a href="#" className="icon-arrow">전체보기</a>
            </div>
            <div className="img-house-warming">
                <div className="row">
                    {
                        reviewList && reviewList.map(
                                                    (item, index) => 
                                                        <ReviewItem 
                                                            no = {index} 
                                                            key = {item.room_tour_view_seq} 
                                                            review = {item}
                                                        />
                                                    )
                    }
                </div>
            </div>
        </div>
    );
}

export default RoomTourReviews;

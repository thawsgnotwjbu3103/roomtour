import React from 'react';

const ReviewItem = (props) => {
    const {name, event, number_comment, file_img, number_like} = props.review
    return (
        <div className={props.no == 0 ? "colum col-6" : "colum col-3"}>
            <span className="number">{props.no + 1}st</span>
            <a href="/#"><img src={`https://www.amante.co.kr/uploads/housewarming/`+file_img} alt="" /></a>
            <div className="caption-house">
                <span>{event}</span>
                <a href="/#"><p>{name}</p></a>
                <div className="comment">
                    <p className="icon-comment">{number_comment}</p>
                    <p className="icon-wish">{number_like}</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewItem;

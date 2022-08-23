import React from 'react';

const InstagramItem = (props) => {
    const {media_url, permalink} = props.insta
    return (
        <div className="item">
            <a href={permalink}><img src={media_url} alt="" /></a>
        </div>
    );
};

export default InstagramItem;

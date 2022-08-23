import React from 'react';

const DisplayItem = (props) => {
    const { name, content, file_img } = props.display;
    const number = props.number;
    const mode = props.mode
    return (
        <>
            {
                mode == "PC" 
                ?
                    <div className={(number % 2 != 0) ? "item item-middle" : "item"}>
                        <a href="#">
                            <img src={`./images/display/` + file_img} />
                            <div className="caption-display">
                                <p>{name}</p>
                                <span>{content}</span>
                            </div>
                        </a>
                    </div> 
                :
                <div className="item">
                <a href="#">
                    <img src="images/images-1.png" />
                    <div className="caption-display">
                        <p>아망떼 X 디즈니 콜라보레이션</p>
                        <span>디즈니 친구들이 놀러왔어요!</span>
                    </div>
                </a>
            </div>
            }
        </>
    );
};


export default DisplayItem;

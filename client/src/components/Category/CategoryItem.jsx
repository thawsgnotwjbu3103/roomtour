import React from 'react';

const CategoryItem = (props) => {
    const {category_nm, file_nm1} = props.category
    return (
        <li>
            <a href="#">
                <img src={`./images/category/` + file_nm1} alt="" />
                <p>{category_nm}</p>
            </a>
        </li>
    );
};

export default CategoryItem;
import { React, useState, useEffect } from "react";
import CategoryItem from "../../components/Category/CategoryItem";

const CategoryList = () => {

    const [categorylist, setCategorylist] = useState([])
    useEffect(() => {
        fetch('/list_category')
            .then(res => res.json())
            .then(data => setCategorylist(data))
    }, []);
    return (
        <div className="container cate-main">
            <div id="title-cate-main">
                <p>카테고리별 상품 찾기</p>
                <a className="icon-arrow" href="#">더보기</a>
            </div>
            <div className="list-cate-main">
                <ul>
                    {
                        categorylist && categorylist.map(item => <CategoryItem key={item.category_cd} category = {item}/>)
                    }
                </ul>
            </div>
        </div>


    );
};

export default CategoryList;
import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";

function Categories() {
    const dispatch = useDispatch();
    const categoryId = useSelector((state) => state.filter.categoryId);
    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <ul className="categories">
            {
                categories.map((categoryName, index) => (
                    <li key={index} onClick={() => {onChangeCategory(index)}} className={categoryId === index ? 'active' : ''}>
                        {categoryName}
                    </li>
                ))
            }
        </ul>
    );
}

export default Categories;
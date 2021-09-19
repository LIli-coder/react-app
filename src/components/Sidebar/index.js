import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import {BASE_API_URL} from '../../Config';
import {
    NavBar,
    NavLink,
} from './SidebarElements';
import {getCategories} from '../../reducer/categories';
import {changeActiveCategory, setActiveCategoryImages} from '../../reducer/categoryImages';

const SideBar = () => {
    const dispatch = useDispatch();
    const {categories, categoryImages} = useSelector(state => state);
    //only fetch categores from api if empty
    useEffect(() => {
        // console.log(categores);
        if (categories.length === 0){
            axios.get(`${BASE_API_URL}/categories`)
                .then(function (response) {
                    // handle success
                    dispatch(getCategories(response.data));
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
            
        }


         
    }, []);

    const categorySelect = id => {
        const {images} = categoryImages;
       if (!images[id]){
            axios.get(`${BASE_API_URL}/images/search?limit=10&page=1&category_ids=${id}`)
                .then(function (response) {
                    // handle success
                    dispatch(setActiveCategoryImages({
                        category:id,
                        images:response.data
                    }));
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }else {
            dispatch(changeActiveCategory(id));
        }
    }

    return (
        <>
            {categories.map((category) => {
                return (                       
                    <NavLink 
                        key={`category-nav-link-${category.id}`} 
                        onClick = {() => {
                            categorySelect(category.id)
                        }}
                    >
                        {category.name}
                    </NavLink>
                );
            })}
        </>
    )
}

export default SideBar;
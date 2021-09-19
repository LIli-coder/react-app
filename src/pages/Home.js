import React from "react";
import {useSelector } from 'react-redux';
import SideBar  from "../components/Sidebar";
 
export const Home = () => {
    const {categoryImages} = useSelector(state => state);
    const {activeCategory, images} = categoryImages;

    return (
        <div>
            <h1>Home page is displaying pictures</h1>
            <SideBar/>
            
            {
                activeCategory && images[activeCategory] && images[activeCategory].map(v => (
                    
                    <div>
                        <img 
                            width={v.width}
                            height={v.height}
                            src={v.url}
                        />
                    </div>  
                    
                ))
            }
        </div>
    );
};
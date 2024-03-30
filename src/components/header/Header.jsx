import React from 'react';
import cls from './Header.module.css'
import {MdLocationOn} from "react-icons/md";


const Header = (props) => {
    const {cityName}=props
    return (
        <div className={cls.header}>

            <h4>
                <span> <MdLocationOn/></span>
                {cityName}
            </h4>
        </div>
    );
};

export default Header;
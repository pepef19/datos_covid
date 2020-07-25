import React from 'react';
import logo from "./images/images.png";
import styles from './nav.module.css';

const Navbar = ({listOfCountries, country, setCountry}) => {
    console.log(listOfCountries);

    return (
        <div className={styles.__container}>
                <img src={logo} className={styles.__logo}/>
                    <div className={styles.__search}>
                        <select className={styles.__select-styles} onChange={event =>
                        {setCountry(event.target.value)
                        }}>
                           {listOfCountries.map(country => <option value={country} >{country}</option>)}
                        </select>
                    </div>
        </div>
    );
};

export default Navbar;










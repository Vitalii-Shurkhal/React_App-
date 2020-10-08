import React from "react";
import styles from './Wallpaper.module.css'
import image from './Wallpaper.jpg'

const Wallpaper = () => {
    return (
            <div>
                <img src={image} alt="" height={styles.img} width={styles.img}/>
            </div>

    );
};

export default Wallpaper;
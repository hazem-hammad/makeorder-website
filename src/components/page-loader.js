import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const PageLoder = () => {
    return (
        <div className='page-loader'>
            <Loader
                type="Oval"
                color="#F15C41"
                height={80}
                width={80}
                timeout={3000} //3 secs
            />
        </div>
    )
};

export default PageLoder;

import { useState } from "react";

function GalleryHeader(){
    const [Translate, setTranslate] = useState(0);

    function setscroll(){
        let rate = window.scrollY * 0.3;
        setTranslate(rate); 
    }

    window.addEventListener("scroll", setscroll);

    return(
        <div className = "gallery-head">
            <h2 style= {{transform: `translateY(${Translate}px)`}}>Mars Rover Images</h2>
        </div>
    );
}

export default GalleryHeader;
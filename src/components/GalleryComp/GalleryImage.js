import { useState } from "react";
import ImageInfo from "./ImageInfo";

function GalleryImage(props){
    const [Info, setInfo] = useState(false);

    function setinfo(){
        setInfo(true);
    }
    function unsetinfo(evt){
        setInfo(false);
        evt.stopPropagation();
    }

    return(
        <>
            <div className="grid-item" onClick={setinfo}>
                <img className = "rover-image" src = {props.img_src} alt = "Rover " />
                <span>Camera: <strong>{props.camera}</strong></span>
                {
                    (Info) && (
                    <ImageInfo photo_id = {props.photo_id}
                    camera_fullname = {props.camera_fullname} 
                    rover = {props.rover}
                    launch_date = {props.launch_date}
                    landing_date = {props.landing_date}
                    status = {props.status}
                    unsetinfo = {unsetinfo}/>
                    )
                }
            </div>
        </>
    );
}

export default GalleryImage;
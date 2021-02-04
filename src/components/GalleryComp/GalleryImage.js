function GalleryImage(props){
    return(
        <div className="grid-item">
        <img className = "rover-image" src = {props.img_src} alt = "Rover " />
        <span>Camera: <strong>{props.camera}</strong></span>
        </div>
    );
}

export default GalleryImage;
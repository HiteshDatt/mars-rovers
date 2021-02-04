import Nav from "./Nav";
import GalleryHeader from "./GalleryComp/GalleryHeader";
import GalleryOptions from "./GalleryComp/GalleryOptions";
import GalleryGrid from "./GalleryComp/GalleryGrid";
import { useState } from "react";

function Gallery() {
    const [Date, setDate] = useState("2019-11-27");
    const [Rover, setRover] = useState("curiosity");

    function changeDate(date){
        setDate(date);
    }
    function changeRover(rover){
        setRover(rover);
    }

    return (
      <div className="gallery">
        <Nav />
        <GalleryHeader />
        <GalleryOptions changedate = {changeDate}
         date = {Date} 
         changerover = {changeRover}
         rover = {Rover}
         />
        <GalleryGrid date = {Date} 
         rover = {Rover}
        />
      </div>
    );
  }
  
  export default Gallery;
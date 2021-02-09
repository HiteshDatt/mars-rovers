import {useState, useEffect} from "react"
import GalleryImage from "./GalleryImage"

const key= process.env.REACT_APP_API_KEY;

function GalleryGrid(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect( () => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${props.rover}/photos?earth_date=${props.date}&page=1&api_key=${key}`)
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
            setIsLoaded(true);
          },
          (error) => {
            setError(error);
            setIsLoaded(true);
          }
        )
    }, [props.date, props.rover]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
        return <div>Loading...</div>;
    } 
    else {
        return (
          <div>  
            {
             (Object.keys(items.photos).length === 0) ?
                (
                <div className="no-img">
                 No images available for the entered data. Please set another date.
                </div>
                ) :
                (
                <div className="gallery-grid">
                  {
                  items.photos.map(i => (
                    <GalleryImage key = {i.id}
                    photo_id = {i.id} 
                    img_src = {i.img_src} 
                    camera = {i.camera.name} 
                    camera_fullname = {i.camera.full_name}
                    rover = {i.rover.name}
                    launch_date = {i.rover.launch_date}
                    landing_date = {i.rover.landing_date}
                    status = {i.rover.status}/>
                  ))}
                </div>
                )
            }
          </div>
        );
      }
  }
  
  export default GalleryGrid;
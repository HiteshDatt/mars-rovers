import Nav from "./Nav";
import {Link} from "react-router-dom";

function Home() {
    return (
      <>
        <Nav />
        <div className="home">
            <h1>Welcome to the NASA Rover Image Gallery</h1>
            <Link to="/gallery">Explore The Red Planet</Link>
        </div>
      </>
    );
  }
  
  export default Home;
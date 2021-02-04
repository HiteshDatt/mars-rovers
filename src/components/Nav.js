import {Link} from "react-router-dom";

function Nav(){
    return(
      <div className="nav-bar">
            <div className="nav-link">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-link">
              <Link to="/gallery">Gallery</Link>
            </div>
      </div>
    );
}

export default Nav;
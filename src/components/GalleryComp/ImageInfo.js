function ImageInfo(props){
    return(
        <div className="info-bg">
        <div className="info">
        <table >
        <tbody>
            <tr>
                <td>Photo ID :</td>
                <td>{props.photo_id}</td>
            </tr>
            <tr>
                <td>Camera :</td>
                <td>{props.camera_fullname}</td>
            </tr>
            <tr>
                <td>Rover :</td>
                <td>{props.rover}</td>
            </tr>
            <tr>
                <td>Launch date :</td>
                <td>{props.launch_date}</td>
            </tr>
            <tr>
                <td>Landing date :</td>
                <td>{props.landing_date}</td>
            </tr>
            <tr>
                <td>Rover status :</td>
                <td>{props.status}</td>
            </tr>
        </tbody>
        </table>
        <button onClick={(evt)=>props.unsetinfo(evt)}>X</button>
        </div>
        </div>
    )
}

export default ImageInfo;
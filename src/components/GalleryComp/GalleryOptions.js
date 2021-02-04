function GalleryOptions(props){
    return(
        <div className="gallery-optn">
            <div className="date">
                <span>Date (Earth)</span>

                <input type="date" value = {props.date} onChange = {(event) => props.changedate(event.target.value)} />

                <span className="note">{

                (props.rover === "curiosity") ? 
                (<>From 6th Aug 2012 till last month</>) :
                ((props.rover === "opportunity") ? (<>From 26 Jan 2004 till 7 Jun 2018</>) : (<>From 6th Jan 2004 till 20 Mar 2010</>))

                }
                </span>
            </div>
            <div className="rover">
                <span>Rover</span>

                <select name="rovers" value = {props.rover} onChange = {(event) => props.changerover(event.target.value)} >
                    <option value="curiosity" selected>Curiosity</option>
                    <option value="opportunity">Opportunity</option>
                    <option value="spirit">Spirit</option>
                </select>
            </div>
        </div>
    );
}

export default GalleryOptions;
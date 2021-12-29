import React from "react";
import MarkerManager from "../util/marker_manager";

class BenchMap extends React.Component {
    constructor(props){
        super(props);
        // debugger
    }

    componentDidMount(){

        // this.mapNode = ReactDOM.findDOMNode(this)

        const mapOptions = {
            center: { lat: 41.310785, lng: -72.930086},
            zoom: 15
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.manager = new MarkerManager(this.map);
        this.manager.updateMarkers(this.props.benches);
    }

    componentDidUpdate(){
        this.manager.updateMarkers(this.props.benches);
    }

    render() {
        return (
            <div id='map-container' ref={ map => this.mapNode = map}>
            </div>
        )
    }
}

export default BenchMap;
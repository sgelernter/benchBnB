export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches){
        let benchesObj = {};
        benches.forEach (bench => {
            this.createMarkerFromBench(bench);
            benchesObj[bench.id] = bench;
        })
        debugger
    }

    removeMarker(){
        
    }

    createMarkerFromBench(bench){
        if (!this.markers[bench.id]) {
            this.markers[bench.id] = bench;
            const benchLatLng = {lat: bench.lat, lng: bench.lng};
            new google.maps.Marker({position: benchLatLng, map: this.map});
        }
    }
}


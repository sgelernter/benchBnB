export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches){
        console.log("time to update");
        benches.forEach (bench => {
            this.createMarkerFromBench(bench);
        })
    }

    createMarkerFromBench(bench){
        if (!this.markers[bench.id]) {
            this.markers[bench.id] = bench;
            const benchLatLng = {lat: bench.lat, lng: bench.lng};
            new google.maps.Marker({position: benchLatLng, map: this.map});
        }
    }
}


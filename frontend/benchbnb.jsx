import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { fetchBenches } from "./util/bench_api_util";



document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    };

    const rootEl = document.getElementById('root');
    window.bounds = {bounds: {northEast: {lat: 41.314190, lng: -72.920007}, southWest: {lat: 41.306720, lng: -72.934826}}};
    window.fetchBenches = fetchBenches;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, rootEl);
})



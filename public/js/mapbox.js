/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGhydXYyMDAzc3dhbWkiLCJhIjoiY2w4Y3pyZHRyMHJsYTN2bXI1bHh2d3gxdyJ9.JEf3SzrlxPEed3f3sn74dw";

  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/dhruv2003swami/cl8d0ih5u00a014qq42dgoz8c/draft",
    scrollZoom: false,
    //   center: [-118.1238400702876, 34.01201319520277],
    //   zoom: 4,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // create marker
    const el = document.createElement("div");
    el.className = "marker";
    //  Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    // Add pop up
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day} : ${loc.description}</p>`)
      .addTo(map);
    // extend map bound to include current locations
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};

const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData));

// How would Roza rewrite the code to retrieve the details only from the Vandenberg Air Force Base?
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// How would Roza access the latitude of the Vandenberg Airforce Base?
// d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults[0].location.latitude));

// Use map() to print only the latitude and longitude coordinates of each SpaceX launch station.
d3.json(url).then(spaceXResults => Object.keys(spaceXResults).map(key =>
    console.log(spaceXResults[key].location.latitude, spaceXResults[key].location.longitude)));
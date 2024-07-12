"use strict";

//* The geolocation API is a browser API by which we can navigate the location of a place.

//* we pass two call back functions to the getCurrentPosition method of the geolocation object.
//* The first call back function is the success call back, and the second is the error call back function.
//* As the name itself means when the data and location is accurate(whenever the browser gets the current position of the user) then the success call back function will be called otherwise the error message by the call beack will be executed.

//* The first callback function will take a position parameter.
//* In the second call back function, we can specify a message of error.

navigator.geolocation.getCurrentPosition(
  (position) => {
    //* We can get the longitude and latitude using destructuring, the coords is the child object of the GeolocationPosition.
    //* This could be not an accurate coordinates.
    //* We can check our longitude and latitude with google map url, in which we will specify our coordinates.
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);

    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    console.log(position);
  },
  () => alert("Could not get the location ):")
);

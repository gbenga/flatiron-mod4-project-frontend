const eventsURL = "http://localhost:3000/api/v1/events";
const usersURL = "http://localhost:3000/api/v1/users";
const locationsURL = "http://localhost:3000/api/v1/locations";

function fetchEvents() {
  return fetch(eventsURL)
    .then((response) => response.json())
    .catch((error) => alert("fetching events from API didn't work"));
}
function fetchUsers() {
  return fetch(usersURL)
    .then((resp) => resp.json())
    .catch((error) => alert("fetching users from API didn't work"));
}
function fetchLocations() {
  return fetch(locationsURL)
    .then((resp) => resp.json())
    .catch((error) => alert("fetching locations from API didn't work"));
}
function postToUsers(userObj) {
  const configObject = {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(userObj),
  };

  fetch(usersURL, configObject)
    .then((resp) => resp.json())
    .then((object) => console.log(object))
    .catch((error) => alert("Creating a new user didn't work"));
}
function fetchUser(userId) {
  return fetch(`${usersURL}/${userId}`)
    .then((response) => response.json())
    .catch((error) => alert(`fetching data for user ${userId} didn't work"`));
}
function fetchLocation(locationId) {
  return fetch(`${locationsURL}/${locationId}`)
    .then((response) => response.json())
    .catch((error) =>
      alert(`fetching data for location ${locationId} didn't work"`)
    );
}
function patchToUser(userObj) {
  const configObject = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userObj),
  };

  return fetch(`${usersURL}/${userObj.id}`, configObject)
    .then((resp) => resp.json())
    .catch((err) => alert("updating this user didn't work"));
}
export default {
  fetchEvents,
  fetchLocations,
  fetchUsers,
  postToUsers,
  fetchUser,
  fetchLocation,
  patchToUser,
};

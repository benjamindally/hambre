import axios from "axios";

export default {
  allTrucks: function() {
    return axios.get("/api/owner");
  },

  findLocation: function(ownerFindbyLocation) {
    return axios.get("/api/owner/", ownerFindbyLocation);
  },

  createOwner: function(ownerData) {
    return axios.post("/api/owner", ownerData);
  },

  filter: function(filterTerms) {
    return axios.get("/api/owner/filter", filterTerms);
  },

  deleteOwner: function(id) {
    return axios.post("/api/owner/" + id);
  },

  updateInformation: function(id, newInformation) {
    return axios.update("/api/owner/" + id, newInformation);
  },

  newLocation: function(id, newLocation) {
    return axios.put("/api/owner" + id, newLocation);
  },

  truckActive: function(id, newLocation) {
    return axios.post("/api/owner/" + id + "/active", newLocation);
  },

  currentLocation: function(id, currentLocation) {
    return axios.get("/api/owner/" + id + "/active", currentLocation);
  },
};

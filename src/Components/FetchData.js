import axios from "axios";

export function fetchFeedbackData() {
  return axios.get(
    "https://run.mocky.io/v3/56bdb026-85cb-4ce4-a40b-1cff6f786555"
  );
}

export function fetchServicesData() {
  return axios.get(
    "https://run.mocky.io/v3/40a09c5b-42a5-4555-92c6-86e503350610"
  );
}

import http from "http";

setInterval(() => {
  http.get("https://pacific-lake-62804.herokuapp.com/");
}, 300000);
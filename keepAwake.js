import https from "https";

setInterval(() => {
  https.get("https://pacific-lake-62804.herokuapp.com/");
}, 300000);
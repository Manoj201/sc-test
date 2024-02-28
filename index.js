const express = require("express");
const app = express();

const port = process.env.PORT || 3030;

app.get("/", (req, res) => res.send("Hello World! Scania.. Test!!"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error::", err);
  }
  console.log(`Onexlab app listening on port ${port}`);
});

// auth:
//   providers:
//     github:
//       development:
//         clientId: b8de9c3b13133f98bd0f
//         clientSecret: 435a84ecb65e3050baf729bd870baec84eab700f

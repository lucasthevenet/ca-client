import fs from "fs";
import https from "https";

const req = https.request({
  hostname: "localhost",
  port: 3333,
  path: "/api",
  method: "GET",
  cert: fs.readFileSync("client.crt").toString(),
  key: fs.readFileSync("client.key").toString(),
  ca: fs.readFileSync("ca.crt").toString(),
},
  res => {
    res.on("data", data => {
      console.log(data.toString());
    });
  }
)

req.end()
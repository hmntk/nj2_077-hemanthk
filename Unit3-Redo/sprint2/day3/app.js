const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>NodeJS</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message' /><button >Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      fs.writeFileSync("message.txt", `${message}`);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  // console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>NodeJS</title></head>");
  res.write("<body><h1>Hello this is written in Node JS !</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);

const next = require('next');
const express = require('express');
// const cookieParser = require('cookie-parser');

console.log("Server", process.env.NODE_ENV, process.env.NODE_ENV !== 'production');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
const server = express();


server.use(express.json());
// server.use(cookieParser(COOKIIE_SECRET, ));


app.prepare().then(() => {
  require("./routes")(server, handle, app);
  server.listen(3000, () => { console.log(`> Ready on http://localhost:${3000}`) })
}).catch( err => console.log("Error in app.preparecatch ==>", err) );


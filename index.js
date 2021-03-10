/* eslint-disable @typescript-eslint/no-var-requires */
const servestatic = require('serve-static')
const path = require('path')
const express = require('express')
const port = process.env.PORT || 3000;
const app = express();
app.use(servestatic(path.join(path.resolve(), 'dist')));
app.listen(port, () => {console.log("API server started on " + port);});
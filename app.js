const express = require('express')
const app = express()

const PORT = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const IP = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, IP, function () {
  console.log('Example app listening on port 3000!')
})

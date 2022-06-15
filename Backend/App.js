const express = require('express')
const app = express()
const port = 3030
app.use(express.json())
const cors = require('cors')
app.use(cors())
/// IMPORT DB
require('./Config')

/// IMPORT ROUTER
const RouterV1 = require('./Routers');
app.use("/api/v1", RouterV1);

app.get('/', (req, res) => {
    res.send('Welcome to my Api')
})  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.static('uploads'))
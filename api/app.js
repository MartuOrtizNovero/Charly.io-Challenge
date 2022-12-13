const routes = require('./routes/index.js') ;
const express = require("express");
const cors = require('cors') ;
const app = express();
app.use(express.json())

app.use(cors())

//Esto da autorizacion al Client para que pueda conectarse con el servidor
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use('/', routes)

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

const PORT = process.env.PORT || 3001; 

app.listen(PORT,()=>{
    console.log(`Server listen on PORT ${PORT}`)
})
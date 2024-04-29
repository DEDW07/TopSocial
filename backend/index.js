const express = require('express');
//解决跨域问题，导入cors
const cors = require('cors'); 
const router = require('./routes/index')
const {handleErrors} = require('./middleware/errorMiddleware')
//create a web server
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',router);
//use error middleware at the end
app.use(handleErrors);

const PORT = 80;
app.listen(PORT,function(){
    console.log('Server is running on http://localhost:80')
})


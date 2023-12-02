const Express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan=require('morgan');
const helmet=require('helmet');

const app = new Express();
const PORT=8001;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const app = express();
const port = 4001;
const cors = require('cors');

app.use(cors(
    {
        origin: "*"
    }
));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
})
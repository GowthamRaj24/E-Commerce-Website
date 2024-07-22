const express = require('express');
const app = express();
const port = 4001;
const cors = require('cors');
const { connection } = require('./db.js');
const userRoutes = require('./routers/user');
const productRoutes = require('./routers/products');

connection();

app.use(cors(
    {
        origin: "*"
    }
));

app.use(express.json());


app.use('/user', userRoutes.route);
app.use('/products', productRoutes.route);


app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
})
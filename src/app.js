const express = require('express');
const app = express();

app.use("/test",(request, response) =>{
    response.send("Hi from the server!")
})

app.listen(3000, () =>{
    console.log("Hello is successful listening on port 3000....")
});
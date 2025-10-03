import express from 'express';

const app = express();

app.get("/", (req, res) => res.send("Hello Faraz Ahmed!") );


// $env:PORT=3000; node app.js   ----->>> this is line to call to use this is is use to 
const PORT = process.env.PORT;


app.listen(PORT, () =>{
    console.log(`Server is running at port: ${PORT}`);
})
const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
require("dotenv").config()


//MiddleWare for every request
app.use(express.json())
app.use(morgan("dev")) // Logs Request To Console
// Deploying app
app.use(express.static(path.join(__dirname, "client", "dist")));

app.use(cors({
  origin: true
}))


//Error Handling 
app.use((err,req,res,next) =>{
  console.log(err)
  return res.send({errMsg:err.message})
})

//Routes
app.use("/api/favoritesData", require("./routes/favoriteData.jsx"))
//server/routes/favoriteData.jsx

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});


mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to database');

        app.listen(3001, (err) => {
            if (err) {
                throw new Error(err);
            }
            console.log('Server is Successfully Running, and App is listening on port ' + 3001);
        });
    })
    .catch(err => {
        console.error(err);
    });
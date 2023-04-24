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


app.use(cors({
  origin: true
}))

// Connect To DataBase 
mongoose.connect(process.env.MY_MONGO_URL,{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));
// mongoose.connect('mongodb://localhost:27017/favoritesData',{useNewUrlParser: true})
// .then(()=> console.log("Connected to MongoDB"))
// .catch(err => console.error(err));

//Routes
app.use("/favoritesData", require("./routes/favoriteData.jsx"))
//server/routes/favoriteData.jsx

//Error Handling 
app.use((err,req,res,next) =>{
  console.log(err)
  return res.send({errMsg:err.message})
})

// Deploying app
app.use(express.static(path.join(__dirname, "client", "build")))

  app.get("*", (req, res) => {
    res.sendFile(path.join( "client", "build", "index.html"));
});


app.listen(3001, () => {
    console.log("Server Is Running")
})
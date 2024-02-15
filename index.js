import mongoose from "mongoose";
import app from "./src/app.js";
import config from "./src/config/index.js";

//first thing after starting a backend is to database connection
//IIFE (SELF INVOKED FUNCTION)

//create a method

//run a method
( async () =>{
    try {
      await mongoose.connect(config.MONGODB_URL)  //--when we have local database
      console.log("DB CONNECTED !");

      app.on('error', (err) =>{
        console.log("ERROR:", err);
        throw err
      })
//before listening app.on should be before listening so that error should be first called
      const onListening = () =>{
        console.log(`Listening on port ${config.PORT}`)
      }
//onListening is callback function
      app.listen(config.PORT, onListening)

    } catch (err) {
        console.log("ERROR: ", err)
        throw err
    }
})()

const mongoose = require("mongoose");

const dbURI = "mongodb+srv://gorila_user:9IBG8G4RazhIocvY@investmentapi-iy7il.mongodb.net/gorila?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

require("../models/Investment");
const express = require("express"); // require the express package
const app = express(); // initialize your express app instance
const cors = require("cors");
app.use(cors()); // after you initialize your express app instance

// a server endpoint
const groceries = require("./groceries.json");
app.get(
  "/", // our endpoint name
  function (req, res) {
    let type = req.query.type;
    //   // callback function of what we should do with our request
    //   // res.send(groceries); // our endpoint function response
    if (type) {
      if (type == "vegetables") {
        let newArr = groceries.filter((element) => element.type == type);
        res.send(newArr);
        console.log(newArr);
      } else {
        if (type == "fruits") {
          let newArr = groceries.filter((element) => element.type == type);
          res.send(newArr);
        }
      }
    } else {
      res.send(groceries);
    }
  }
);
app.get("/groceries", (req, res) => {
  let type = req.query.type;
  // callback function of what we should do with our request
  // res.send(groceries); // our endpoint function response
  if (type) {
    if (type == "vegetables") {
      let newArr = groceries.filter((element) => element.type == type);
      res.send(newArr);
      console.log(newArr);
    } else {
      if (type == "fruits") {
        let newArr = groceries.filter((element) => element.type == type);
        res.send(newArr);
      }
    }
  } else {
    res.send(groceries);
  }
});
app.get("/hello", (req, res) => res.send("heldloassd adhmad "));

app.listen(3002, () => console.log("hello")); // kick start the express server to work

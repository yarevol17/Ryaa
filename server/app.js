var express = require("express"),
  cors = require("cors"),
  errorhandler = require("errorhandler"),
  mongoose = require("mongoose");
var isProduction = process.env.NODE_ENV === "production";
var indexRoutes = require("./routes/index")
// Create global app object
const userController = require("./controllers/user");
const app = express();

// Normal express config defaults
app.use(cors());
app.use(require("morgan")("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("method-override")());
app.use("", indexRoutes)
if (!isProduction) {
  app.use(errorhandler());
}

mongoose.set("useNewUrlParser", true);
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI).then(
  (_) => {
    console.log("Database has been connected !");
  },
  (err) => console.log(err)
);

// if (isProduction) {
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect("mongodb://localhost/conduit");
//   mongoose.set("debug", true);
// }

module.exports = app;

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const colors = require("colors");
const errorHandler = require("./middleware/error");
//const logger = require("./middleware/logger");

//Route Files
const bootcamps = require("./routes/bootcamps");
const courses = require("./routes/courses");

//Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(express.json());

//Connect DB
connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  //app.use(logger);
}

//Mount Routes
app.use("/api/v1/bootcamps", bootcamps);
app.use("/api/v1/courses", courses);

app.use(errorHandler);

//
const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    colors.brightYellow(
      `Server running in ${process.env.NODE_ENV} mode on port: ${port}`
    )
  )
);

//Handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});

const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });

  console.log(
    colors.brightYellow(`MongoDB Connected: ${conn.connection.host}`)
  );
};

module.exports = connectDB;

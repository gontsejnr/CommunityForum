const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("MongoDB Connected Successfully!")
  );

  await mongoose.connect(`${process.env.MONGODB_URI}/communityForum`);
};

module.exports = connectDB;

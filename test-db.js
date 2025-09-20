import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://ab1929860_db_user:saC8w9SbPQEHHkG8@cluster0.wcnjcn8.mongodb.net/chatapp?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully!");
    process.exit();
  })
  .catch(err => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL).then(() => console.log('Database Connected')).catch((error) => console.log(error));
import mongoose from "mongoose";
import color from "Colors";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://demouser:demouser1231456@cluster0.3juuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
      //   To Avoid Warning
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB CONFIGURED".green);
  } catch (err) {
    console.log("Mongo DB Cofig Failed");
  }
};

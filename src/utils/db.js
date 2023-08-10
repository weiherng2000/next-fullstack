import mongoose from "mongoose"

//connect to our mongodb database
const connect = async() => {

    try {
        await mongoose.connect(process.env.MONGO);
      } catch (error) {
        throw new Error("Connection failed");
      }
}

export default connect;
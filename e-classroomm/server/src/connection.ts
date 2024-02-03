import mongoose from "mongoose";

async function DB(url: string){

    await mongoose.connect(url)
    .then(() => console.log('DB connection established'))
    .catch((err) => console.log(err));
    
}

export default DB;


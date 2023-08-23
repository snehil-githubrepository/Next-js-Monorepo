import mongoose from "mongoose";

let alreadyDone = false;

async function ensureDBconnected() {
  if (alreadyDone) return;
  alreadyDone = true;
  await mongoose.connect("mongodb://localhost:27017/course-sell", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "courses",
  });
}

export default ensureDBconnected;

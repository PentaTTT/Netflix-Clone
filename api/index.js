const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/list");

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log("DB connection successfully!"))
    .catch((err) => console.log(err));

//ROUTES
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/list", listRoute);

app.listen(8080, () => {
    console.log('Server is running!');
})
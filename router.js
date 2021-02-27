const router = require("express").Router();
const movieRoute = require("./routes/movie-route");
const orderRoute = require("./routes/order-route");
const userRoute = require("./routes/user-route");



router.use("/movies", movieRoute);
router.use("/orders", orderRoute);
router.use("/users", userRoute);
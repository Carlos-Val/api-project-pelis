const router = require("express").Router();
const movieRoute = require("./routers/movie-route");
const orderRoute = require("./routers/order-route");
const userRoute = require("./routers/user-route");



router.use("/movies", movieRoute);
//router.use("/orders", orderRoute);
//router.use("/users", userRoute);

module.exports = router;
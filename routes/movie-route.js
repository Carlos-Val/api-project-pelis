const router = require("express").Router();
const movieController = require("../controllers/movie-controller");



router.get("/", async(req, res) => {
    try {
        res.json(await movieController.showMovies())
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        });
    }
});
router.post("/", async(req, res) => {
    try {
        const createdMovie = await movieController.store(req.body);

        res.status(200).json(createdMovie)
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        });
    }
})
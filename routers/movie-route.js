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

        res.status(200).json(createdMovie);
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        });
    }
});

router.put("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await movieController.update(id, req.body));
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        });
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await movieController.destroy(id));
        res.status(200);

    } catch (error) {
        return res.status(00).json({
            message: "Server Error"
        });
    }
});


module.exports = router;
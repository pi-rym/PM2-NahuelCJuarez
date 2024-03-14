const {Router} = require("express");
const moviesRouter = require("./moviesRouter")


const router = Router();

router.use("/", moviesRouter);



module.exports = router;
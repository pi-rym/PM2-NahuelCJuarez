const {Router} = require("express");
const moviesController = require("../controllers/moviesController")



const moviesRouter = Router();

moviesRouter.get("/", moviesController.getAllMovies);

moviesRouter.post("/", moviesController.addMovie);


module.exports = moviesRouter;
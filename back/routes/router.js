const router = require("express").Router();

const Livro = require("../models/Livros");
// Routas

const livroRouter = require("./livro")

router.use("/", livroRouter)


module.exports = router;
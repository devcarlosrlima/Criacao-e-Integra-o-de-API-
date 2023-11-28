const router = require('express').Router()


const livroController = require("../controllers/livroController")

router
.route("/livro")
.post((req, res) => livroController.create(req, res));

router
.route("/livro")
.get((req, res) => livroController.getAll(req, res));

router
.route("/livro/:id")
.get((req, res) => livroController.get(req, res));

router
.route("/livro/:id")
.delete((req, res) => livroController.delete(req, res));

router
.route("livro/:id")
.put((req, res) => livroController.update(req,res));
module.exports = router;
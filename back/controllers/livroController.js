const  LivroModel  = require("../models/Livros")

const livroController = {

    create: async(req, res) => {
        try {
            
            const livro = {
                id: req.body.id,
                titulo: req.body.titulo,
                num_paginas: req.body.num_paginas,
                isbn: req.body.isbn,
                editora: req.body.editora,
            }

            const response = await LivroModel.create(livro);

            res.status(200).json({response, msg:"Livro criado com sucesso"});

        } catch (error){
            console.log(error);
        }

    },

    getAll: async(req, res) => {
        try {
            const livro = await LivroModel.find()

            res.json(livro);

        } catch (error) {
            console.log(error);
        }
    },
    
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const livro = await LivroModel.findById(id);

        if(!livro) {
        res.status(404).json({msg: "Livro não encontrado"});
        return;
        }

            res.json(livro);

        } catch (error) {
            console.log(error);
        }
    },

  
    delete: async(req, res) => {
        try{
            const id = req.params.id

            const livro = await LivroModel.findById(id);

            if(!livro) {
                res.status(404).json({msg: "Livro não encontrado"});
                return;
            }
                
            const deleteLivro = await LivroModel.findByIdAndDelete(id);
            res.status(200).json({deleteLivro, msg: "Livro excluido com sucesso!"})
         } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {
        const id = req.params.id;
         
        const livro = {
            id: req.body.id,
            titulo: req.body.titulo,
            num_paginas: req.body.num_paginas,
            isbn: req.body.isbn,
            editora: req.body.editora,
        };

        const updateLivro = await LivroModel.findByIdAndUpdate(id, livro);

        if(!updateLivro) {
            res.status(404).json({msg: "Livro não encontrado"});
            return;
        }

        res.status(200).json({livro, msg: "Livro atualizado com sucesso!"})

    }

}

module.exports = livroController;
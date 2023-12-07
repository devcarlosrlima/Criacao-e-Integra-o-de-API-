# IntegrandoAPI

Projeto feito para melhorar habilidades de  integração de API ao front end.
O projeto exigia que o cliente pudesse pesquisar o livro por categoria, editora ou titulo e também  pudesse cadastrar, editar e deletar livros se assim desejasse. 

### Requisições Utilizadas
- Get
- Post
- Put
- Delete

### Tecnologias usadas:

- React Router 
- Node.js
- Express.js 
- MongoDb 
- JavaScript
- API/RestAPI

  ### Parte do Codigo

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


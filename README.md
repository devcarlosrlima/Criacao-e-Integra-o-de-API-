# IntegrandoAPI

Criei uma API do zero, para integra-lá ao front-end de um projeto de biblioteca online. Nesta biblioteca o usuario iria poder, adicionar, remover, editar e visualizar livros adicionados.
Eu construi esta API utilizando as tecnologias e requisições citadas abaixo, a mesma é conectada ao banco de dados MongoDB.

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


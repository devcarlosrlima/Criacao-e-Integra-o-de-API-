const mongoose = require("mongoose");

async function main() {
     try{
        await mongoose.connect (
            "mongodb+srv://devfrontcarloslima:aWJqlwFIXe9UtPTh@cluster0.sgdmut8.mongodb.net/?retryWrites=true&w=majority"
        )
     } catch (error) {
        console.log(`Erro: ${error}`)
     }


}

module.exports = main;
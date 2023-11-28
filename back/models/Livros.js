const mongoose = require("mongoose");

const { Schema } = mongoose;


const livroSchema = new Schema ({
    id: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    num_paginas: {
        type: Number,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    editora: {
        type: String,
        required: true
    },
}, 
 {timestamps: true}
);

const Livro = mongoose.model("Livro", livroSchema);

module.exports = Livro;


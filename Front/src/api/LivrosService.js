import axios from "axios";

const BASE_URL = "http://localhost:3000/api"

export class LivrosService{
    static getLivros(){
        return axios.get(`${BASE_URL}/livro`);
    }

    static getLivro(id){
        return axios.get(`${BASE_URL}/livro/${id}`);
    }

    static createLivro(body){
        return axios.post(`${BASE_URL}/livro`,body);
    }

    static updateLivro(id, body){
        return axios.put(`${BASE_URL}/livro/${id}`, body);
    }

    static deleteLivro(id){
        return axios.delete(`${BASE_URL}/livro/${id}`);
    }
    
}
/*Definindo a utilização do model produto e a dependência http-status
(Model produto é o modelo/Atributos que criamos, a tabela e suas caracteristicas)*/
const Produto = require('../models/produto');
const status = require('http-status');

// Criando o método Insert, obtendo os dados da request/requisição
exports.Insert = (req, res, next) => { 
    const nome = req.body.nome; // Do preenchimento feito no Front estou armazenando nas variaveis que vão pro BD acho
    const valor = req.body.valor;
    const qtdEstoque = req.body.qtdEstoque;
    const peso = req.body.peso;

    //Popula cada um dos campos do model com os campos recebidos na request
    Produto.create({
        nome: nome,
        valor: valor,
        qtdEstoque: qtdEstoque,
        peso: peso
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(produto =>{
            if(produto){// se for registrado com sucesso retorna o produto se não retorna em branco, verificação de erro
                res.status(status.OK) .send(produto);
            } else {
                res.status (status.NOT_FOUND) .send();
            }
        })
        //Catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};
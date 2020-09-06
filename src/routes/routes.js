// Criando as rotas da aplicação
const express = require('express');
const ProdutoController = require ('../controllers/produtoController.js');
const router = express.Router();

router.post('/produtos', ProdutoController.Insert);

module.exports = router;
const modelsIndex = require('../models/indexModels.js');

module.exports = {
    indexControllers,
    notFoundControllers

}

function indexControllers(req, res) {
    res.json('Rota Raiz do Projeto ccorrentes Encontrada!!!');
    console.log('Rota Raiz do Projeto ccorrentes Encontrada!!!');
}


function notFoundControllers(req, res) {
    res.json('Rota Inexistente!!!  404');
    console.log('Rota Inexistente!!!  404');
}
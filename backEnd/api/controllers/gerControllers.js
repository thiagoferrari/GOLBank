const models = require('../models/gerModels.js');

module.exports = {
    gerentesGetAll,
    gerentesGetById,
    gerentesNovo,
    gerentesEditar,
    gerentesDelById
}

function gerentesGetAll(req, res) {
    console.log('Listar gerentes {M O D E L}');
    models.getAllgerentes(function (err, resposta) {
        console.log('Retorno de gerentes {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function gerentesGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdgerentes(id, function (err, resposta) {
        console.log('Retorno de gerentes Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function gerentesDelById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Del: ' + id);
    models.delByIdgerentes(id, function (err, resposta) {
        console.log('Retorno de gerentes Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function gerentesNovo(req, res) {
    var dados = req.body;
    console.log("Gravando novo registro de gerentes...");
    console.log(req.body);
    dados.ger_codigo = null;
    console.log("Inserindo novo registro de gerentes...");
    models.novoGerente(dados, function (err, result) {
        if (err) {
            throw err;
        }
        console.log("Registro de gerentes inserido com sucesso!");
        res.json({ ok: true });
    })
}

function gerentesEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando o registro de gerentes...", dados);

    models.editargerentes(dados, function (err, result) {
        if (err) {
            throw err;
        }
        console.log("Registro de gerentes alterado com sucesso!");
        res.json({ ok: true });
    });
}
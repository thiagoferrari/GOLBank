const models = require('../models/ccoModels.js');

module.exports = {
    ccorrentesGetAll,
    ccorrentesGetById,
    ccorrentesNovo,
    ccorrentesEditar,
    ccorrentesDelById
}

function ccorrentesGetAll(req, res) {
    console.log('Listar ccorrentes {M O D E L}');
    models.getAllccorrentes(function (err, resposta) {
        console.log('Retorno de ccorrentes {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function ccorrentesGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdccorrentes(id, function (err, resposta) {
        console.log('Retorno de ccorrentes Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function ccorrentesDelById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Del: ' + id);
    models.delByIdccorrentes(id, function (err, resposta) {
        console.log('Retorno de ccorrentes Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function ccorrentesNovo(req, res) {
    var dados = req.body;
    console.log("Gravando novo registro de ccorrentes...");
    console.log(req.body);
    dados.cco_codigo = null;
    console.log("Inserindo novo registro de ccorrentes...");
    models.novoCcorente(dados, function (err, result) {
        if (err) {
            throw err;
        }
        console.log("Registro de ccorrentes inserido com sucesso!");
        res.json({ ok: true });
    })
}


function ccorrentesEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando o registro de ccorrentes...", dados);

    models.editarccorrentes(dados, function (err, result) {
        if (err) {
            console.log(err);

            throw err;
        }
        console.log("Registro de ccorrentes alterado com sucesso!");
        res.json({ ok: true });
    });
}
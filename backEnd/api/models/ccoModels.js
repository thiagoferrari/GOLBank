const conexao = require('../../config/conexao.js');

module.exports = {
    getAllccorrentes,
    getByIdccorrentes,
    editarccorrentes,
    novoCcorente,
    delByIdccorrentes
}

function getAllccorrentes(callback) {
    conexao.query('select * from ccorrentes c, gerentes g WHERE c.ger_codigo = g.ger_codigo', callback)
}

function getByIdccorrentes(id, callback) {
    conexao.query('select * from ccorrentes c, gerentes g  WHERE cco_codigo = ' + id +
        ' AND c.ger_codigo = g.ger_codigo', callback)
}

function delByIdccorrentes(id, callback) {
    conexao.query('delete from ccorrentes WHERE cco_codigo = ' + id, callback)
}

function novoCcorente(dados, callback) {
    var msql = 'INSERT INTO ccorrentes SET ? ';

    conexao.query(msql, dados, callback);
}

function editarccorrentes(dados, callback) {
    console.log('Estou alterando o ccorrentes { M O D E L } .......' + dados);

    var msql = "UPDATE ccorrentes SET cco_nrconta = '" + dados.cco_nrconta +
        "' , cco_tipo = '" + dados.cco_tipo +
        "' , cco_saldo      = '" + dados.cco_saldo +
        "' , cco_abertura     = '" + dados.cco_abertura +
        "' , ger_codigo     = '" + dados.ger_codigo +
        "'  WHERE cco_codigo  = '" + dados.cco_codigo + "'";

    console.log(msql);

    conexao.query(msql, callback);
}
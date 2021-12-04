const conexao = require('../../config/conexao.js');

module.exports = {
    getAllgerentes,
    getByIdgerentes,
    editargerentes,
    novoGerente,
    delByIdgerentes
}

function getAllgerentes(callback) {
    conexao.query('select * from gerentes', callback)
}

function getByIdgerentes(id, callback) {
    conexao.query('select * from gerentes WHERE ger_codigo = ' + id, callback)
}

function delByIdgerentes(id, callback) {
    conexao.query('delete from gerentes WHERE ger_codigo = ' + id, callback)
}

function novoGerente(dados, callback) {
    var msql = 'INSERT INTO gerentes SET ? ';

    conexao.query(msql, dados, callback);
}

function editargerentes(dados, callback) {
    console.log('Alterando o gerentes { M O D E L } .......' + dados);

    var msql = "UPDATE gerentes SET ger_nome = '" + dados.ger_nome +
        "' , ger_apelido = '" + dados.ger_apelido +
        "' , ger_telefone = '" + dados.ger_telefone +
        "' , ger_banco = '" + dados.ger_banco +
        "'  WHERE ger_codigo  = '" + dados.ger_codigo + "'";

    console.log(msql);

    conexao.query(msql, callback);
}
const {Router} = require('express');
const alunoController = require('../controllers/AlunoController');
const routes = Router();

/*
*Listagem de Alunos
*/
routes.get('/alunos', alunoController.listar);

/*
*Obtem um único aluno
*Parametros: id (routeParam)
*/
routes.get('/alunos/:id', alunoController.obterPorId);

/*
*Insere um aluno
*/
routes.post('/alunos', alunoController.inserir);

/*
*Atualiza um aluno
*Parametros: id (routeParam)
*/
routes.put('/alunos/:id', alunoController.atualizar);

/*
*Exclui um aluno
*Parametros: id (routeParam)
*/
routes.delete('/alunos/:id', alunoController.excluir);

module.exports = routes;
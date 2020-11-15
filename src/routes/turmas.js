const {Router} = require('express');
const turmaController = require('../controllers/TurmaController');
const routes = Router();

/*
*Listagem de Turmas
*/
routes.get('/turmas', turmaController.listar);

/*
*Obtem uma única turma
*Parametros: id (routeParam)
*/
routes.get('/turmas/:id', turmaController.obterPorId);

/*
*Insere uma turma
*/
routes.post('/turmas', turmaController.inserir);

/*
*Atualiza uma turma
*Parametros: id (routeParam)
*/
routes.put('/turmas/:id', turmaController.atualizar);

/*
*Exclui uma turma
*Parametros: id (routeParam)
*/
routes.delete('/turmas/:id', turmaController.excluir);

module.exports = routes;
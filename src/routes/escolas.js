const {Router} = require('express');
const escolaController = require('../controllers/EscolaController');
const routes = Router();

/*
*Listagem de Escolas
*/
routes.get('/escolas', escolaController.listar);
/*
*Obtem uma única escola
*Parametros: id (routeParam)
*/
routes.get('/escolas/:id', escolaController.obterPorId);
/*
*Insere uma escola
*/
routes.post('/escolas', escolaController.inserir);
/*
*Atualiza uma escola
*Parametros: id (routeParam)
*/
routes.put('/escolas/:id', escolaController.atualizar);
/*
*Exclui uma escola
*Parametros: id (routeParam)
*/
routes.delete('/escolas/:id', escolaController.excluir);

module.exports = routes;
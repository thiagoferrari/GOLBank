const controller = require('../controllers/gerControllers.js');

server.get('/gerentes', controller.gerentesGetAll)
server.get('/gerentes/:codigo', controller.gerentesGetById)

server.put('/gerentes/:codigo', controller.gerentesEditar)
server.post('/gerentes', controller.gerentesNovo)


server.delete('/gerentes/:codigo', controller.gerentesDelById)
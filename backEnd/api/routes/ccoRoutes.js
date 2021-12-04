const controller = require('../controllers/ccoControllers.js');

server.get('/ccorrentes', controller.ccorrentesGetAll)
server.get('/ccorrentes/:codigo', controller.ccorrentesGetById)

server.put('/ccorrentes/:codigo', controller.ccorrentesEditar)
server.post('/ccorrentes', controller.ccorrentesNovo)

server.delete('/ccorrentes/:codigo', controller.ccorrentesDelById)
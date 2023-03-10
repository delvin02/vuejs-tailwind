var jsonServer = require("json-server");
var server = jsonServer.create();
var router = jsonServer.router(require("./JSON/products.json"));
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, function () {
    console.log("Json server is running.");
});

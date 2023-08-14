const schemas = require('./schema');
const fastify = require('fastify')({
    logger: true
});

fastify.get("/messages", async(request, reply) => {
    return{
        messages: "this is the get nsg"
    }
});

fastify.get("/messages/:id", { schema: schemas.getMessage }, async (request, reply) => {
    const id = request.params.id
  return {
    id: id,
    message: "this is the id params",
    test: "test",
    movie: "spider man"
  };
});

fastify.post("/messages", {schema: schemas.createMessage} , async (request, reply) => {
  const message = request.body.message;
  const movie = request.body.movie;
  return {
    message: message,
    movie: movie
  };
});

const start = async() => {
    try {
        await fastify.listen({port: 3000});
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start()
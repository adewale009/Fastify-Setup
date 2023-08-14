const getMessage = {
  params: {
    type: "object",
    properties: {
      id: { type: "integer" },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "integer" },
        message: { type: "string" },
        test: { type: "string" },
        movie: {type: "string"}
      }
    }
  }
};

const createMessage = {
  body: {
    type: 'object',
    properties: {
      message: { type: "string" },
      movie: { type: "string"}
    },
    required: [ 'message', 'movie' ]
  }
}

module.exports = {getMessage, createMessage};
const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const ResponseType = new GraphQLObjectType({
  name: 'Response',
  fields: () => ({
    status: { type: GraphQLInt },
    message: { type: GraphQLString },
    error: { type: GraphQLString }
  })
});

module.exports = ResponseType;

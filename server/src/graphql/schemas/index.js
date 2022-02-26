const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  graphql
} = require('graphql');
const UserType = require('./typeDefs/UserType');
const { models } = require('../../models');
const ResponseType = require('./typeDefs/ResponseType');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      async resolve(_, args) {
        return await models.user.findAll();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        isSingle: { type: GraphQLBoolean }
      },
      async resolve(_, args) {
        return await models.user.create({
          name: args.name,
          age: args.age,
          isSingle: args.isSingle
        });
      }
    },
    updateUser: {
      type: ResponseType,
      args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        isSingle: { type: GraphQLBoolean }
      },
      async resolve(_, args) {
        const result = await models.user
          .update(
            {
              name: args.name,
              age: args.age,
              isSingle: args.isSingle
            },
            { where: { id: args.id } }
          )
          .then(() => ({ status: 200, message: 'User updated' }))
          .catch((error) => ({ status: 400, error }));
        return result;
      }
    },
    deleteUser: {
      type: ResponseType,
      args: {
        id: { type: GraphQLInt }
      },
      async resolve(_, args) {
        const result = await models.user
          .destroy({ where: { id: args.id } })
          .then(() => ({ status: 200, message: 'User deleted' }))
          .catch((error) => ({ status: 400, error }));
        return result;
      }
    }
  }
});

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

module.exports = schema;

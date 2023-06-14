const { User } = require('../models');
const {AuthenticationError} = require('apollo-server-express')//or should it be apollo-server-errors
const {signToken} = require('../utils/auth')
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  },
  Mutation: {
    signup: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return {user, token};
    },

  },
};

module.exports = resolvers;

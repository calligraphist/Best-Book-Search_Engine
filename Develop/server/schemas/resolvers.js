const { User } = require('../models');

const resolvers = {
  Query: {
    me: async () => {
      return Book.find({});
    },

  },
  Mutation: {
    signup: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    clogin: async (parent, { _id, bookNum }) => {
      const vote = await User.findOne(
        { _id },
        { $inc: { [`book${bookNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;

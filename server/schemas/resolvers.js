const { Teacher } = require('../models');

const resolvers = {
  Query: {
    teachers: async () => {
      return await Teacher.find({});
    }
  }
};

module.exports = resolvers;
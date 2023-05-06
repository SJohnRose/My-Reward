const { Teacher } = require('../models');

const resolvers = {
  Query: {
    teachers: async () => {
      return await Teacher.find({});
    },
    teacher: async (parent,args) => {
      return await Teacher.findById(args.id);
    }
  }
};

module.exports = resolvers;
const { Teacher, Student } = require('../models');

const resolvers = {
  Query: {
    teachers: async () => {
      return await Teacher.find({});
    },
    teacher: async (parent,args) => {
      return await Teacher.findById(args.id);
    },
    students: async () => {
      return await Student.find({});
    },
    student: async (parent,args) => {
      return await Student.findById(args.id);
    },
  },
  Mutation: {
    addTeacher: async (parent, { name, password }) => {
      // Create and return the new Teacher object
      return await Teacher.create({ name, password });
    },
  },
};

module.exports = resolvers;
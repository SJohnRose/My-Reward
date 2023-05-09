const { Teacher, Student } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    teachers: async () => {
      return await Teacher.find({});
    },
    teacher: async (parent,{ teacherId}) => {
      return Teacher.findOne({ _id: teacherId});
    },
    students: async () => {
      return await Student.find({});
    },
    student: async (parent,args) => {
      return await Student.findById(args.id);
    },
  },

  Mutation: {
    addTeacher: async (parent, { name, email, password }) => {
      const teacher = await Teacher.create({ name, email, password });
      const token = signToken(teacher);
      return {token, teacher};
    },
    login: async (parent, { email, password }) => {
      const teacher = await Teacher.findOne({ email });

      if (!teacher) {
        throw new AuthenticationError('No teacher with this email found!');
      }

      const correctPw = await teacher.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(teacher);
      return { token, teacher };
    },

  },
};

module.exports = resolvers;
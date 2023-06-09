const { Teacher, Student, Reward, Prize } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    teachers: async () => {
      return await Teacher.find({});
    },
    teacher: async (parent,{ email}) => {
      return Teacher.findOne({ email: email});
    },
    students: async () => {
      return await Student.find({});
    },
    student: async (parent,args) => {
      return await Student.findOne(args.studentCode);
    },
    rewards: async () => {
      return await Reward.find({}).populate('student').populate('teacher').populate('prize');
    },
    prizes: async () => {
      return await Prize.find({});
    },
    profile: async (parent, { profileId }) => {
      return Teacher.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, context) => {
      if (context.teacher) {
        return Teacher.findOne({ _id: context.teacher._id });
      }
      throw new AuthenticationError('You need to be logged in!');
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
    addStudent: async (parent, {studentCode, studentName, studentClass, email}) => {
      const student = await Student.create({studentCode, studentName, studentClass, email});
      return student;
    },
    removeStudent: async (parent, {studentCode}) => {
      return Student.findOneAndDelete({studentCode: studentCode});
    },
    updateStudent: async (parent, {studentCode, studentClass}) => {
      return Student.findOneAndUpdate({studentCode}, {studentClass}, {new:true});
    },
    addReward: async(parent, {student, prize}, context) => {
      const teacher = context.teacher._id;
      const reward = Reward.create( {student, teacher, prize});
      return reward;
    }
  },
};

module.exports = resolvers;
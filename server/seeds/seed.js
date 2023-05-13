const db = require('../config/connection');
const {Teacher, Student, Prize, Reward} = require('../models');

const teacherData = require('./teacherData.json');
const studentData = require('./studentData.json');
const prizeData = require('./prizeData.json');
const rewardData = require('./rewardData.json');

db.once('open', async () => {
try {
  await Teacher.deleteMany({});
  await Teacher.create(teacherData);

  await Student.deleteMany({});
  await Student.create(studentData);

  await Prize.deleteMany({});
  await Prize.create(prizeData);

  await Reward.deleteMany({});
  await Reward.create(rewardData);

  console.log('all done!');
  process.exit(0);
}
catch (err) {
    throw err;
  }
});

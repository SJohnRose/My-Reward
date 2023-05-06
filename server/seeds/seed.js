const db = require('../config/connection');
const Teacher = require('../models');

const teacherData = require('./teacherData.json');

db.once('open', async () => {
try {
  await Teacher.deleteMany({});
  await Teacher.create(teacherData);

  console.log('all done!');
  process.exit(0);
}
catch (err) {
    throw err;
  }
});

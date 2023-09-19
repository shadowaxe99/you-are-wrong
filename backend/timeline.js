```javascript
const moment = require('moment');

const milestones = {
  projectStart: moment(),
  designPhase: moment().add(1, 'weeks'),
  developmentPhase: moment().add(3, 'weeks'),
  testingPhase: moment().add(5, 'weeks'),
  launch: moment().add(7, 'weeks')
};

function defineTimeline() {
  console.log('Project Timeline:');
  console.log('Project Start: ', milestones.projectStart.format('MMMM Do YYYY'));
  console.log('Design Phase: ', milestones.designPhase.format('MMMM Do YYYY'));
  console.log('Development Phase: ', milestones.developmentPhase.format('MMMM Do YYYY'));
  console.log('Testing Phase: ', milestones.testingPhase.format('MMMM Do YYYY'));
  console.log('Launch: ', milestones.launch.format('MMMM Do YYYY'));
}

module.exports = {
  defineTimeline
};
```
export default function (state = {
  linkedin: 'https://www.linkedin.com',
  slack: 'https://hrla-students.slack.com/',
  github: 'https://www.github.com',
  trello: 'https://www.trello.com',
}, action) {
  switch (action.type) {
    case 'UPDATE_PROJECT_LINKS':
      return action.payload;
  }
  return state;
}

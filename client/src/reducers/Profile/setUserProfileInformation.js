export default function (state = {name: 'Shaniqua Anastasia',
imageurl: 'https://png.icons8.com/metro/540/edit-user-male.png',
title: 'Developer',
location: 'Los Angeles, CA',
description: 'I love Agile and stuff!',
availability: 'true',
projects: `[ {
  name: 'Cat Hoarders United',
  position: 'Developer',
  description: 'Let\'s get all the cats together!',
},
{
  name: 'DevDates',
  position: 'Developer',
  description: 'Making the world a better place',
}
]`,
tech: `[ React, Angular, MongoDB, NodeJS]`
}, action) {
  switch (action.type) {
    case 'SET_USER_PROFILE_INFORMATION':
      return action.payload;
  }
  return state;
}

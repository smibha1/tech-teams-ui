export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_USER_LOCATION':
    state= {location: action.payload}
    console.log('state in location in addUserLocation', state)
      return action.payload;
  }
  return state;
}
export default function (state = {}, action) {
  switch (action.type) {
    case 'SET_USER_PROFILE_INFORMATION':
    var newTechState = action.payload.tech;
    // console.log('newtechstate', newTechState)
    // newTechState.push(...JSON.parse(action.payload.tech))
    // console.log('thenewtechstate', newTechstate)
    //   return {tech: newTechState};
    console.log('userprofile', newTechState)
    return action.payload;
  }
  return state;
}

export default function (state = 'NAVIGATED DIRECTLY HERE', action) {
  switch (action.type) {
    case 'RENDER_PROJECT_PROFILE_PAGE':
      return action.payload;
  }
  return state;
}

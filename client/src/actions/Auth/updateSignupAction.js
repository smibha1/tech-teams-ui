const updateSignupAction = (name, email) =>
  ({
    type: 'UPDATE_SIGNIN_INFO',
    payload: { name, email },
  });

export default updateSignupAction;

const updateSignupAction = (name, email, password) =>
  ({
    type: 'UPDATE_SIGNIN_INFO',
    payload: { name, email, password },
  });

export default updateSignupAction;

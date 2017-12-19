const updateLoginInfoAction = (name, email) =>
  ({
    type: 'UPDATE_LOGIN_INFO',
    payload: {name: name, email: email}
  });

export default updateLoginInfoAction;

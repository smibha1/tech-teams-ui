export default function (state = {
  devName: 'Shaniqua Anastasia',
  devPicture: 'https://i.pinimg.com/736x/b1/88/31/b18831f96720e907c4769168687d7fd1--cat-lovers-adorable-animals.jpg',
  devPosition: 'Developer',
  devLocation: 'Los Angeles, CA',
  devDesc: 'I love Agile and stuff!',
}, action) {
  switch (action.type) {
    case 'UPDATE_PROF_DEV_INFO':
      return action.payload;
  }
  return state;
}

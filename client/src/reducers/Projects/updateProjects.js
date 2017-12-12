export default function (state = [{ id: 0, projname: 'DevDates', image: 'https://logos.textgiraffe.com/logos/logo-name/Dev-designstyle-love-heart-m.png' }, { id: 1, projname: 'Happiness', image: 'http://www.happinesswithirene.com/images/misc/logohappy.png' }], action) {
  switch (action.type) {
    case 'UPDATE_PROJ':
      return action.payload;
  }
  return state;
}

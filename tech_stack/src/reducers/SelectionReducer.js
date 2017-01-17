export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
//
// export default (state, action) => {
//   console.log(action);
//   return null;
// };

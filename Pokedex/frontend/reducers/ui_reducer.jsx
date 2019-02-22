const uiReducer = (state = {}, action) => {
  let nextState = {};
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
}

export default uiReducer;
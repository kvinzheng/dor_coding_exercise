const currentTime = (state = '', action ) => {
  switch (action.type) {
    case 'CURRENT_TIME':
      return action.payload;
    default:
      return state;
  }
}

export default currentTime;

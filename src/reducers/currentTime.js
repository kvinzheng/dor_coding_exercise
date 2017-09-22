const currentTime = (state = { time: null }, action) => {
  switch (action.type) {
    case 'CURRENT_TIME':
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

export default currentTime;

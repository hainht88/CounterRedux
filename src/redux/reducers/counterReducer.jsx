const defaultState = {
  value: 0
};

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return { value: state.value + 1 };
    case "DECREASE":
      return { value: state.value - 1 };

    default:
      return state;
  }
};

export default counterReducer;

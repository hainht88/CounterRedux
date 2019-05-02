const counterReducer = (state = [], action) => {
  const key =
    Object.keys(state).length > 0 ? state[state.length - 1].id + 1 : 0;

  switch (action.type) {
    case "INCREMENT":
      return state.map(el => {
        return el.id === action.id ? { ...el, value: el.value + 1 } : el;
      });
    case "DECREMENT":
      return state.map(el =>
        el.id === action.id ? { ...el, value: el.value - 1 } : el
      );
    case "ADD":
      return [...state, { value: 0, id: key }];
    case "REMOVE":
      return state.filter(el => el.id !== action.id);
    default:
      return state;
  }
};

export default counterReducer;

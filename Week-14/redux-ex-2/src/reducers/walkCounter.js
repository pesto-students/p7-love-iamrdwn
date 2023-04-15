let initialState = 0;

export function walkCounter(state = initialState, action) {
  switch (action.type) {
    case "addStep":
      return state + 1;
    case "resetSteps":
      return initialState;
    default:
      return state;
  }
}

let initialState = { isLightOn: true };

export function toggle(state = initialState, action) {
  switch (action.type) {
    case "ON":
      return { isLightOn: true };
    case "OFF":
      return { isLightOn: false };
    default:
      return state;
  }
}

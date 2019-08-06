export const initialState = { request: 0 };

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      let newRequest = state.request + 1;
      console.log("Increment Reducer Invoked!", newRequest);
      return { request: newRequest };
    default:
      throw new Error();
  }
}
export const initialState = {
  dog: "",
  error: "",
  loadig: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL':
      return { ...state, dog: "", error: "", loadig: true };
    case 'SUCCESS':
      return { ...state, dog: action.payload, error: "", loadig: false };
    case 'ERROR':
      return {
        ...state,
        dog: "",
        error: action.payload,
        loadig: false,
      };
    default:
      break;
  }
};

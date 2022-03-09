// ./src/features/authors/authorSlice.js

// Action Creators
export const addAuthor = (author) => {
    return {
      type: "authors/add",
      payload: author,
    };
  };
  
  export const removeAuthor = (id) => {
    return {
      type: "authors/remove",
      payload: id,
    };
  };
  
  // Reducers
  const initialState = [];
  
  export default function authorsReducer(state = initialState, action) {
    switch (action.type) {
      case "authors/add":
        return [...state, action.payload];
  
      case "authors/remove":
        return state.filter((author) => author.id !== action.payload);
  
      default:
        return state;
    }
  } 
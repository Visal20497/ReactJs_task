let initialState = { name: "", pass: "", title: '', todo: [], edit: "",search:[]};

function TextReducer(state = initialState, action) {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };

    case "PASS":
      return { ...state, pass: action.payload };
    case "TITLE":
      return { ...state, title: action.payload }
    case "SEARCH":
           return { ...state,search:action.payload}   
    case "SUBMIT":
      if (state.edit) {
        if (state.edit) {
          let editData = state.todo.map((item) => {
            if (item.id === state.edit.id) {
              let newname = state.name;
              let newpass = state.pass;
              let newtitle = state.title;
              return { ...item, username: newname, pass: newpass, title: newtitle };
            } else {
              return item;
            }
          });
          return { ...state, todo: editData, edit: "", name: "", pass: "", title: '' };
        }
      } else {
        return {
          ...state,
          todo: [...state.todo, action.payload],
          name: "",
          pass: "",
          title: ''
        };
      }
    case "DEL":
      let filter = state.todo.filter((item) => {
        return item.id !== action.payload.id;
      });
      return { ...state, todo: filter };

    case "EDIT":
      let findData = state.todo.find((item) => {
        return item.id === action.payload.id;
      });
      return {
        ...state,
        edit: findData,
        name: findData.username,
        pass: findData.pass,
        title: findData.title
      };

    default:
      return state;
  }
}

export default TextReducer;

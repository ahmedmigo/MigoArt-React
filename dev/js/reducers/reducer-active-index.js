export default function (
  state={
    activePage: 0,
    activeSection: 0
  }
  , action) {
  switch(action.type) {
    case "ACTIVATE_SECTION":
      var newState = Object.assign({},state)
      newState.activeSection = action.payload;
      newState.activePage = 0;
      return newState;
      break;
    case "ACTIVATE_PAGE":
      var newState = Object.assign({},state)
      newState.activePage = action.payload;
      return newState;
      break;
    case "NEXT_PAGE":
      if(action.payload.pageIndex < action.payload.totalPagesNumber - 1)
      {
        var newState = Object.assign({},state)
        newState.activePage = action.payload.pageIndex + 1;
        return newState
      }
      break;
    case "PREVIOUS_PAGE":
      if(action.payload.totalPagesNumber > 1)
      {
        var newState = Object.assign({},state)
        newState.activePage = action.payload.pageIndex - 1;
        return newState
      }
      break;
    }
  return state;
}

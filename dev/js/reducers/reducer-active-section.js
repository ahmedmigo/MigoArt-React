export default function (state={} , action) {
  switch(action.type) {
    case "ACTIVATE_SECTION":
      return action.payload;
      break;
    case "ACTIVATE_PAGE":
      return action.payload
      break;
    case "NEXT_PAGE":
      var pageNumber = action.payload.activePage;
      if(pageNumber < action.payload.pages.length - 1)
      {
        var newState = Object.assign({},action.payload)
        newState.activePage++;
        return newState
      }
      break;
    case "PREVIOUS_PAGE":
      var pageNumber = action.payload.activePage;
      if(pageNumber>0){
        var newState = Object.assign({},action.payload)
        newState.activePage--;
        return newState
      }
      break;
    }
  return state;
}

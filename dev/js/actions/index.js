export const activatePage = (section,i) => {
  return {
    type:"ACTIVATE_PAGE",
    payload: section,
    index: i
  }
};

export const nextPage = (section) => {
  return {
    type:"NEXT_PAGE",
    payload: section,
  }
};

export const previousPage = (section) => {
  return {
    type:"PREVIOUS_PAGE",
    payload: section,
  }
};

export const activateSection = (section,i) => {
  return {
    type:"ACTIVATE_SECTION",
    payload: section,
    index: i
  }
};

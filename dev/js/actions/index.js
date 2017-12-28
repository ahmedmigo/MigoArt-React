export const activatePage = (section) => {
  return {
    type:"ACTIVATE_PAGE",
    payload: section,
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

export const activateSection = (section) => {
  return {
    type:"ACTIVATE_SECTION",
    payload: section
  }
};

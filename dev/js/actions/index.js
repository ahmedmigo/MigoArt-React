export const activatePage = (pageIndex) => {
  return {
    type:"ACTIVATE_PAGE",
    payload: pageIndex,
  }
};

export const nextPage = (pageIndex,totalPagesNumber) => {
  return {
    type:"NEXT_PAGE",
    payload: {pageIndex: pageIndex,
              totalPagesNumber:totalPagesNumber}
  }
};

export const previousPage = (pageIndex,totalPagesNumber) => {
  return {
    type:"PREVIOUS_PAGE",
    payload: {pageIndex: pageIndex,
              totalPagesNumber:totalPagesNumber}
  }
};

export const activateSection = (sectionIndex) => {
  return {
    type:"ACTIVATE_SECTION",
    payload: sectionIndex,
  }
};

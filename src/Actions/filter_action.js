export const SET_FILTER = "SET_FILTER";

export const DepartmentFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_SELECTED: "SHOW_SELECTED"
};

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  };
}; 

export const changeFilter = filter => dispatch => dispatch(setFilter(filter));

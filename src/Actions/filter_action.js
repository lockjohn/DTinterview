export const SET_FILTER = "SET_FILTER";
export const RESET_FILTER = "RESET_FILTER";

export const DepartmentFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_SELECTED: "SHOW_SELECTED"
};

export const setFilter = selected => {
  return {
    type: SET_FILTER,
    filter: DepartmentFilters.SHOW_SELECTED, //turns filtered state 'on'
    selected: selected //sets the selected department in the app's state
  };
}; 

export const resetFilter = ()=> {
  return {
    type: RESET_FILTER,
    filter: DepartmentFilters.SHOW_ALL,
    selected: ''
  }
}

export const changeFilter = selection => dispatch => dispatch(setFilter(selection));
export const clearFilter = () => dispatch => dispatch(resetFilter());
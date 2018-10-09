import {SET_FILTER, DepartmentFilters, RESET_FILTER} from '../Actions/filter_action';

const FilterReducer = (state = DepartmentFilters.SHOW_ALL, action) => {
    Object.freeze(state);

    switch (action.type) {
        case SET_FILTER:
            return { filter: action.filter, selected: action.selected }
        case RESET_FILTER:
            return { filter: action.filter, selected: action.selected }    
        default:
            return state;
    }
}

export default FilterReducer;
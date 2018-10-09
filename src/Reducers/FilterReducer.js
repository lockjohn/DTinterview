import {SET_FILTER, DepartmentFilters} from '../Actions/filter_action';
const {SHOW_ALL} = DepartmentFilters
const FilterReducer = (state = SHOW_ALL, action) => {
    Object.freeze(state);

    switch (action.type) {
        case SET_FILTER:
            return action.filter    
        default:
            return state;
    }
}

export default FilterReducer;
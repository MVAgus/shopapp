import {BREADS} from '../../utils/data/breads';

const initialState = {
    breads: BREADS,
    filteredBread:[],
    selected: null
}

const BreadReducer = (state = initialState,action) => {
    return state;
}

export default BreadReducer;
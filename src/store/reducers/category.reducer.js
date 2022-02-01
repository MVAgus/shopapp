import {CATEGORIES} from '../../utils/data/categories';

{/*este reductor importa la data de las categorias y tendra un estado inicial
que contendra la lista de categorias y la categoria seleccionada*/}
const initialState = {
categories: CATEGORIES,
selected: null
}

const CategoryReducer = (state = initialState, action) => {
    return state;
}

export default CategoryReducer;
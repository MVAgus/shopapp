import { combineReducers, createStore } from "redux";

import BreadReducer from "./reducers/bread.reducer";
import CategoryReducer from "./reducers/category.reducer";

{/*este archivo se utiliza como root del directorio de store. 
    En este se configura como se combinan nuestros reducers que usaremos
importandolos y asociandolos en una estructura de objeto combine reducer*/}

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer
})

export default createStore(RootReducer);
import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from "./reducers/auth.reducer";
import BreadReducer from "./reducers/bread.reducer";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import OrderReducer from "./reducers/order.reducer";
import thunk from 'redux-thunk';

{/*este archivo se utiliza como root del directorio de store. 
    En este se configura como se combinan nuestros reducers que usaremos
importandolos y asociandolos en una estructura de objeto combine reducer*/}

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer,
    cart: CartReducer,
    orders: OrderReducer,
    auth: AuthReducer
})

export default createStore(RootReducer,applyMiddleware(thunk));
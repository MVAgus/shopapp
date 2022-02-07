import { URL_API } from '../../utils/data/database'

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART';

export const addItem = item => ({
    type: ADD_ITEM,
    item
})

export const removeItem = itemId => ({
    type: REMOVE_ITEM,
    itemId
})

export const confirmCart = (payload, total) => {
    return async dispatch => {
        try {
            {/*el metodo fetch nos permite realizar consultas a la base de datos o a un servicio
            el metodo post nos permite escribir en la base de datos*/
            /*la cabecera se utiliza para entender que se dato se esta pasando como referencia*/}
            const response = await fetch(`${URL_API}/orders.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: payload,
                    total
                }),
            });
            const result = await response.json();
            console.warn(result);
            dispatch({
                type: CONFIRM_CART,
                confirm: true,
            })
        } catch (error) {
        {/*con el error.message nos retorna el mensaje de error que nos da la BD*/}
            console.warn(error.message);
        }
    }
}
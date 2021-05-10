import {
    ADD_TO_CART,
    INCREASE_THE_QUANTITY,
    DECREASE_THE_QUANTITY,
    SET_THE_QUANTITY,
    REMOVE_PRODUCT, MAKE_PURCHASE,
} from "../../constants";
/* constants */
import {initCartState} from "../context/cartContext";
const initOrder = {
    total: 0,
    count: 0
};

function CartReducer(state, {type, payload}) {
    switch (type) {
        case ADD_TO_CART: {
            const currentAmount = +payload.price.substring(1);
            let amount = +state.totalAmount + currentAmount;
            amount = +(amount).toFixed(2);
            const currentState = [...state.data];
            const idsState = [...state.ids];
            currentState.push({...payload, currentAmount, quantity: 1});
            idsState.push(payload.id);

            return {...state,
                data: [...currentState],
                totalAmount: amount,
                items: state.items +1,
                ids: [...idsState],
                ordered: initOrder,
            };
        }
        case INCREASE_THE_QUANTITY:
        case DECREASE_THE_QUANTITY:
        case SET_THE_QUANTITY: {
            let currentTotal = 0;
            let newAmount = 0;

            const currentState = state.data.map(item => {
                if(item.id === payload.id){
                    currentTotal = item.currentAmount;
                    newAmount = (+payload.count * +item.price.substring(1));
                    newAmount = +(newAmount).toFixed(2);
                    return {
                        ...item,
                        currentAmount: newAmount,
                        count: payload.count
                    };
                }
                return item;
            });

            let total = state.totalAmount - currentTotal + newAmount;
            total = +(total).toFixed(2);

            return {...state,
                data: [...currentState],
                totalAmount: total,
            };
        }
        case REMOVE_PRODUCT: {
            let removedAmount = 0;

            const data = state.data.filter(item => {
                if(item.id === payload){
                    removedAmount = item.currentAmount;
                    return false;
                }
                return true;
            });

            let items = state.items -1;
            let newAmount = state.totalAmount - removedAmount;
            newAmount = +(newAmount).toFixed(2);
            const ids = state.ids.filter(id => id !== payload);

            return {...state, data, ids, items, totalAmount: newAmount};
        }
        case MAKE_PURCHASE: {

            const ordered = {
                total: state.totalAmount,
                count: state.items,
            }

            return {
                ...initCartState,
                ordered,
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${type}`)
        }
    }
}

export default CartReducer;
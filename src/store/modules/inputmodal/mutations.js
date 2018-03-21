export default {
    // pushProductToCart(state, { id }) {
    //     state.added.push({
    //         id,
    //         quantity: 1
    //     })
    // },

    // incrementItemQuantity(state, { id }) {
    //     const cartItem = state.added.find(item => item.id === id)
    //     cartItem.quantity++
    // },

    // setCartItems(state, { items }) {
    //     state.added = items
    // },

    // setCheckoutStatus(state, status) {
    //     state.checkoutStatus = status
    // }
    
    setInputModalSaveAction(state, { action, data, prefilled_value }) {
        state.save_action = action;
        state.save_data = data;
        state.prefilled_value = prefilled_value;
    },

    setInputModalHeading(state, heading) {
        state.heading = heading;
    },

    updatePrefilledValue(state, value) {
        state.prefilled_value = value;
    }
}

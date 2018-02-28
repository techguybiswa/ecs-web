import DataAccessor from '@/utils/DataAccessor'

export default {
    // checkout({ commit, state }, products) {
    //     const savedCartItems = [...state.added]
    //     commit('setCheckoutStatus', null)
    //     // empty cart
    //     commit('setCartItems', { items: [] })
    //     shop.buyProducts(
    //         products,
    //         () => commit('setCheckoutStatus', 'successful'),
    //         () => {
    //             commit('setCheckoutStatus', 'failed')
    //             // rollback to the cart saved before sending the request
    //             commit('setCartItems', { items: savedCartItems })
    //         }
    //     )
    // },

    // addProductToCart({ state, commit }, product) {
    //     commit('setCheckoutStatus', null)
    //     if (product.inventory > 0) {
    //         const cartItem = state.added.find(item => item.id === product.id)
    //         if (!cartItem) {
    //             commit('pushProductToCart', { id: product.id })
    //         } else {
    //             commit('incrementItemQuantity', cartItem)
    //         }
    //         // remove 1 item from stock
    //         commit('decrementProductInventory', { id: product.id })
    //     }
    // }

    fetchPratilipiDetailsAndUserPratilipiData({ commit, state }, slugId) {
        commit('setPratilipiDataLoadingTrue');
        commit('setPratilipiUserDataLoadingTrue');
        DataAccessor.getPratilipiBySlug(slugId, true, function(pratilipiData, userPratilipiData) {
            if (pratilipiData) {
                commit('setPratilipiDataLoadingSuccess', pratilipiData);
            } else {
                commit('setPratilipiDataLoadingError');    
            }

            if (userPratilipiData) {
                commit('setPratilipiUserDataLoadingSuccess', userPratilipiData);
            } else {
                commit('setPratilipiUserDataLoadingError');    
            }
        });
    },

    // This is an optimization currently not present in product stack
    fetchUserPratilipiData({ commit, state }, pratilipiId) {

    },

    fetchUserReviews({ commit, state }, pratilipiId ) {

    },

    fetchPratilipiRecommendation({ commit, state }, pratilipiId) {

    },

    setCachedPratilipiData({ commit, state }, pratilipiData) {
        console.log(pratilipiData);
    }
}

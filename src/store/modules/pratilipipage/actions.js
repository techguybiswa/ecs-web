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

    addToLibrary({ commit, state }, pratilipiId) {
        console.log('hello');
        DataAccessor.addOrRemoveFromLibrary(pratilipiId, true, (response) => {
            commit('addPratilipiToLibrarySuccess', response);
        }, (error) => {
            commit('addPratilipiToLibraryError');
        })
    },

    removeFromLibrary({ commit, state }, pratilipiId) {
        DataAccessor.addOrRemoveFromLibrary(pratilipiId, false, (response) => {
            commit('removePratilipiFromLibrarySuccess', response);
        }, (error) => {
            commit('removePratilipiFromLibraryError');
        })
    },

    // This is an optimization currently not present in product stack
    fetchUserPratilipiData({ commit, state }, pratilipiId) {

    },

    setCachedPratilipiData({ commit, state }, pratilipiData) {
        console.log(pratilipiData);
    },

    uploadPratilipiImage({ commit, state }, formData ) {
        commit('setPratilipiImageUploadingTrue');
        DataAccessor.uploadPratilipiImage(formData, state.pratilipi.data.pratilipiId, (successData) => {
            console.log('Now I can die in peace');
            commit('setPratilipiImageUploadingSuccess', successData);
        }, (errorData) => {
            console.log('My life is wasted');
            commit('setPratilipiImageUploadingError');
        });
    },

    setPratilipiRating({ commit, state }, ratingValue) {
        commit('setPratilipiRatingUpdateLoading');
        DataAccessor.createOrUpdateReview(state.pratilipi.data.pratilipiId, ratingValue, null, function(successData) {
            commit('setPratilipiRatingUpdateSuccess', ratingValue);
        }, (errorData) => {
            commit('setPratilipiRatingUpdateError');
        });
    },

    saveOrUpdateReview({ commit, state }, review) {
        commit('setPratilipiReviewUpdateLoading');
        DataAccessor.createOrUpdateReview(state.pratilipi.data.pratilipiId, state.userPratilipi.rating, review, function(successData) {
            commit('setPratilipiReviewUpdateSuccess', review);
        }, (errorData) => {
            commit('setPratilipiReviewUpdateError');
        });
    }
}

const getStoredWishList = () => {
    const wishList = localStorage.getItem('wish-list');
    if(wishList){
        return JSON.parse(wishList);
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id) => {
    const getWishList = getStoredWishList();
    if(getWishList.includes(id)){
        console.log(id, 'already exist id');
    }
    else{
        getWishList.push(id);
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem('wish-list', wishListStr);
    }
}

export {getStoredWishList, addToStoredWishList};
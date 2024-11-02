import { toast } from "react-toastify";

;
const getStoredReadList = () => {
    const storedItem = localStorage.getItem('read-list');
    if(storedItem){
        return JSON.parse(storedItem);
    }
    else
    return [];
}

const addToStoredReadList = (id) =>{
    const storedItems = getStoredReadList();
    if(storedItems.includes(id)){
        console.log(id, 'already exists in the read list');
    }
    else{
        storedItems.push(id);
        const storedListStr = JSON.stringify(storedItems);
        localStorage.setItem('read-list', storedListStr);
        toast("This book added that Read List");
    }
}

export {getStoredReadList, addToStoredReadList}
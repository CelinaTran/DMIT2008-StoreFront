import {db} from "../libs/firebase/firebaseConfig"
import{ref, get} from "firebase/database"

async function pageInit()
{
    const productRef = ref(db, 'products/');
    const dataSnapShot = await get(productRef);
    console.log(dataSnapShot.val());
}

pageInit();

//Getting data from the db
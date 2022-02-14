import {db} from "../libs/firebase/firebaseConfig"
import{ref, get} from "firebase/database"

async function getProductDetails()
{
    const productRef = ref(db, 'products/');
    const productSnapShot = await get(productRef);
    console.log(productSnapShot.val());

}

getProductDetails();

//Getting data from the db
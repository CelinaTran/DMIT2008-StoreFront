import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from "../libs/firebase/firebaseConfig";

import {renderProductDisplay} from "../templates/productDisplayTemplate";

console.log(db);

let productDetailStorage = [];
async function getProductDetails()
{
    const productRef = ref(db, 'products/');
    const productsSnapShot = await get(productRef);
    const productData = productsSnapShot.val();
    const productDisplayCard = Object.values(productData).map(product =>
        {
            console.log(product);
            console.log(connected);
            return null;
        })

}

window.addEventListener('load', getProductDetails());

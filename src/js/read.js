import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from "../libs/firebase/firebaseConfig";

import {renderProductDisplay} from "../templates/productDisplayTemplate";

console.log(db);
console.log(renderProductDisplay());

let productDetailStorage = [];
async function getProductDetails()
{
    const productRef = dataRef(db, 'products/');
    const productsSnapShot = await get(productRef);
    const productData = productsSnapShot.val();
    const productDisplayCard = Object.values(productData).map(product =>
        {
            console.log(product);

            return null;
        })

}

window.addEventListener('load', getProductDetails());

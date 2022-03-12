import {db} from "../libs/firebase/firebaseConfig";
import{ref, get} from "firebase/database";

import{renderProductDisplay} from "../js/templates/productDisplay"


let productDetailStorage = [];
async function getProductDetails()
{
    const productRef = ref(db, 'products/');
    const productsSnapShot = await get(productRef);
    const productDetails ={...productsSnapShot.val()};
    const product = Object.keys(productDetails).map(product =>
        {
            return productDetails[product];
        })

    console.log(product);

}

window.addEventListener('load', getProductDetails());

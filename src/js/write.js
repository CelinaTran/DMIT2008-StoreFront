import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, push, set, get} from 'firebase/database'
import { db, storage  } from "../libs/firebase/firebaseConfig";

function uploadImage(event) 
{
    let image = event.target.files[0];

    document.querySelector(".product-image img").src = URL.createObjectURL(image);

    checkImageUpload(image);
}

async function checkImageUpload(image)
{
    const imageRef = storageRef(storage, image.name);
    const confirmation = await uploadBytes(imageRef, image);
    console.log(confirmation);
}


function onAddNewItem(event)
{
    event.preventDefault();

    const productName = event.target.elements['productName'].value.trim();
    const productPrice = event.target.elements['productPrice'].value;
    const productCategory = event.target.elements['productCategory'].value.trim();
    const Sale = event.target.elements['onSale'];

    if(Sale.checked)
    {
        Sale.value = true;
    }
    else
    {
        Sale.value = false;
    }

    const dbCategory = `products/ ${productCategory}`;

    const docRef = databaseRef(db, dbCategory)

    const newRef = push(docRef, 
        {
            productName: productName,
            price:productPrice,
            category: productCategory,
            sale:Sale
            
        })

}

document.querySelector("#productImage").addEventListener("change", uploadImage);
document.forms['addNewProductForm']
        .addEventListener("submit", onAddNewItem);
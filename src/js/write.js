import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as databaseRef, push, set, get } from 'firebase/database'
import { db, storage } from "../libs/firebase/firebaseConfig";
import { nanoid } from "nanoid";

function uploadImage(event) {
    let image = event.target.files[0];
    console.log(image)

    document.querySelector(".product-image img").src = URL.createObjectURL(image);
}

async function uploadProductDetails() 
{
    let category = document.querySelector('select').value;
    const file = document.querySelector('#productImage').files[0];
    const productName = document.querySelector('#productName').value.trim();
    const productPrice = document.querySelector('#productPrice').value;
    const productCategory = document.querySelector('#productCategory').value.trim();
    const onSale = document.querySelector('#onSale').value;

    if (onSale.checked) 
    {
        onSale.value = true;
    }
    else {
        onSale.value = false;
    }

    const imageRef = storageRef(storage, `product/${category}/${image.name}`);
    const dataRef = databaseRef(db, category);

    const uploadResult = await uploadBytes(imageRef, file);
    const imageUrl = await getDownloadURL(imageRef)
    const storagePath = uploadResult.metadata.fullPath;
    const itemRef = push(dataRef)

    set(itemRef, {
        key: itemRef.key,
        sku: category+nanoid(),
        imageUrl,
        storagePath,
        productName,
        productPrice,
        productCategory,
        onSale
    })

    

}

function onAddNewItem(event) {
    event.preventDefault();

    uploadImage();
    uploadProductDetails();

}

document.querySelector("#productImage").addEventListener("change", uploadImage);
document.forms['addNewProductForm']
    .addEventListener("submit", onAddNewItem);

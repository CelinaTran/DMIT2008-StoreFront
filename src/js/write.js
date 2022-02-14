import{ref, push} from 'firebase/database'
import{db} from "../libs/firebase/firebaseConfig"



function onAddNewItem(event)
{
    event.preventDefault();

    const productName = event.target.elements['productName'].value.trim();
    const productPrice = event.target.elements['productPrice'].value;
    const productCategory = event.target.elements['productCategory'].value.trim();
    const onSale = event.target.elements['onSale'];

    if(onSale.value.checked)
    {
        console.log(checked);
    }

    const dbCategory = `products/ ${productCategory}`;

    const docRef = ref(db, dbCategory)

    const newRef = push(docRef, 
        {
            productName: productName,
            price:productPrice,
            category: productCategory,
            sale:onSale
            
        })

}


document.forms['addNewProductForm']
        .addEventListener("submit", onAddNewItem);
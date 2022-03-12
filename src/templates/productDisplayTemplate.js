function renderProductDisplay(product = null)
{
    const productTemplate = `
    <div class="display-item">        
        <img src="img/product-img-placeholder.jpg" alt="product-img-placeholder">
        <p>Product Name</p>
        <p>Price</p>
    </div>
    `

    const element = document.createRange().createContextualFragment(productTemplate).children[0];

    return element;
}

export{renderProductDisplay}
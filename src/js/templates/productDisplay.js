function renderProductDisplay()
{
    const productDisplayTemplate =
    `
        <div class="display item">
                    
            <img src="img/product-img-placeholder.jpg" alt="product-img-placeholder">
            <p>Product Name</p>
            <p>Price</p>
        </div>
    `;

    const productDisplayElement = document.createRange().createContextualFragment(productDisplayTemplate).children[0];

    return productDisplayElement;
}

export {renderProductDisplay};
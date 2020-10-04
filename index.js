function foodOrder (item) {
    let price = 0;
    switch (item){
        case "burger":
            price = 10;
            console.log(`A ${item} costs $${price}`)
            break;
        case "burger":
            price = 10;
            console.log(`A ${item} costs $${price}`)
            break;
        case "steak":
            price = 10;
            console.log(`A ${item} costs $${price}`)
            break;
        case "salmon":
            price = 10;
            console.log(`A ${item} costs $${price}`)
            break;
        case "shrimp":
            price = 10;
            console.log(`A ${item} costs $${price}`)
            break;
        case "chicken":
            price = 10;
            console.log(`A ${item} costs $${price}`)
            break;
        default:
            console.log(`The ${item} is not available `);
            break;
    }
}

foodOrder('burger');
foodOrder('steak');
foodOrder('salmon');
foodOrder('shrimp');
foodOrder('chicken');
foodOrder('margarita');
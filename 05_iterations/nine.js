const myNums = [1, 2, 3]

c//onst myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);  
//    return acc + currval
//}, 0);

const myTotal = myNums.reduce( (acc, currval) => acc+ currval, 0);

console.log(myTotal);

const shoppingCart = [
    {
        item: "js course",
        price: 199,
    },
    {
        item: "py course",
        price: 299,
    },
    {
        item: "rb course",
        price: 399,
    },
    {
        item: "java course",
        price: 499,
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay); // 1396


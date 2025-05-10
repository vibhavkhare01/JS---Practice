const accountId = 2103
let accountEmail = "xyz@gmail.com"
var accountPassword = "0321"
accountCity = "Indore"
let accountState;   // (Undefined)

// accountId =2 not allowed (because it is const )

/* 
Prefer not use to var
because of issue in block scope and functional scope.
*/

accountEmail = "abc@gmail.com"
accountPassword ="1234"
accountCity = "ujjain"

//console.log(accountId);  (time consuming & writing again& again so use table method with help of square bracets[]. )

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

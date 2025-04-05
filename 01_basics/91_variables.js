const accountId = 210809
let accountEmail = "siddhi2108@gmail.com"
var accountPassword = "210809"
accountCity = "Ahmedabad"
let accountState;

// accountId = 2809 // not allowed

accountEmail = "PSiddhi09@08.com"
accountPassword = "290821"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
Because of issue in scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

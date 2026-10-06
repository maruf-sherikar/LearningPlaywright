let checkAuth = Promise.resolve("Auth OK");
let checkDB = Promise.resolve("DB is OK");
let checkCache = Promise.resolve("Cache is OK");


Promise.all([checkAuth, checkDB, checkCache]).then(function(results){
    console.log("All check:", results);
})
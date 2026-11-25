

function placeOrder(item, callback){
    console.log("Order Placed");
    callback();
}

placeOrder("Pizza", function(){
    console.log("Ur Order is Ready!");
});


placeOrder("Pizza", () =>{
    console.log("Arrow fun, It is balos function without name!");
})
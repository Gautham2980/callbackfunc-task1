((type, name, callback)=> {
    // document.write('Veg rice ordered<br>');
    console.log('Veg rice ordered');
    // document.write('Veg rice for preparation<br>');
    console.log('Veg rice for preparation');
    setTimeout(()=> {
        let ans = `Your ${type} ${name} is ready. The total bill amount is $80`;
        callback(ans);
        // document.write(On the Way Pizzahub server<br>);
        console.log("On the Way Pizzahub server");
        
    }, 3000);
    setTimeout(()=>{
        // document.write(Succesfully Deliverd Thanks for your order);
        console.log("Succesfully Deliverd Thanks for your order");
    },6000)
})

("Veg", "Rice",(message)=>{
	// document.write(message);
    console.log(message);
});
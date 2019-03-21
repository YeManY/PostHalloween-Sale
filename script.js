var costumes =["https://images-na.ssl-images-amazon.com/images/I/61u1RTPfyGL._SY550_.jpg","https://images-na.ssl-images-amazon.com/images/I/613uvgxCxQL._UX385_.jpg","https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/P321731"];
$("#costume_stuff").click(function(){
var c = Math.floor(3 * Math.random());
$("#costumes").attr("src",costumes[c]);    
});
var candy =["https://images-na.ssl-images-amazon.com/images/I/71aMHKhes2L._SL1500_.jpg","https://target.scene7.com/is/image/Target/GUEST_3d2a8073-36e6-4cec-8c8c-872639105820?wid=488&hei=488&fmt=pjpeg","https://images-na.ssl-images-amazon.com/images/I/81OKTMFpmAL._SY355_.jpg"];
$("#candy_stuff").click(function(){
var a = Math.floor(3 * Math.random());      
$("#candy").attr("src",candy[a]);    
});
$(".CoCa").change(function(){
var CoCa = $(this).children("option:selected").val();
if (CoCa === "B"){
alert("That's gonna cost alot!"); 
 }
if (CoCa === "Ca"){
alert("You're gonna share that right?"); 
 }
if (CoCa === "Co"){
alert("Nice! Looking sharp!"); 
 }

});

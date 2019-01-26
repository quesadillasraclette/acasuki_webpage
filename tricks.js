// Write your Pizza Builder JavaScript in this file.

//$(".selector").toggleClass(className)
//$(".selector").addClass(className)
//$(".selector").removeClass([className])


//buttons
var pepButton = $('.btn-pepperonni')
var mushButton = $('.btn-mushrooms')
var greenpepButton = $('.btn-green-peppers')
var sauceButton = $('.btn-sauce ')
var crustButton = $('.btn-crust')


//complements 
var pepperonnis = $('.pep')
var mushrooms  = $('.mushroom')
var greenpeppers = $('.green-pepper')
var sauce = $('.sauce')
var crust = $('.crust')


//logica 
pepButton.click(function(){
    pepperonnis.toggle()
    pepButton.toggleClass('active')

    if(pepPrecio.is(':visible')){
        pepPrecio.hide()
    } else {
        pepPrecio.show()
    }
        if (pepButton.hasClass('active')){
            price = price +1;
            pepPrecio.toggleClass('visible');
        } else {
            price = price -1 ;
        }
            total.text(''+price) 
        
})


mushButton.click(function(){
    mushrooms.toggle()
    mushButton.toggleClass('active')
    if(musPrecio.is(':visible')){
        musPrecio.hide()
    } else {
        musPrecio.show()
    }
        if (mushrooms.hasClass('active')){
            price = price + 2;
        } else {
            price = price -2 ;
        }
            total.text(''+price) 
    
    
})

greenpepButton.click(function(){
    greenpeppers.toggle()
    greenpepButton.toggleClass('active')
    if(greenpepPrecio.is(':visible')){
        greenpepPrecio.hide()
    } else {
        greenpepPrecio.show()
    }
    if (greenpeppers.hasClass('active')){
        price = price +1;
    } else {
        price = price -1 ;
    }
        total.text(''+price) 

})

sauceButton.click(function(){
    sauce.toggleClass('sauce-white')
    sauceButton.toggleClass('active')
    greenpepButton.toggleClass('active')
    if(saucePrecio.is(':visible')){
        saucePrecio.hide()
    } else {
        saucePrecio.show()
    }
        if (sauceButton.hasClass('active')){
            price = price +3;
        } else {
            price = price -3 ;
        }
            total.text(''+price) 
})

crustButton.click(function(){
    crust.toggleClass('crust-gluten-free')
    crustButton.toggleClass('active')
    if(curstPrecio.is(':visible')){
        curstPrecio.hide()
    } else {
        curstPrecio.show()
    }
        if (crustButton.hasClass('active')){
            price = price +5;
        } else {
            price = price -5 ;
        }
            total.text(''+price) 

})






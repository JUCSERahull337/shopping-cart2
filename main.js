// console.log('hello')

let AddCart= document.querySelectorAll('.add-cart');

for (let i = 0; i < AddCart.length; i++) {
    
    AddCart[i].addEventListener('click',(event) =>{
        //console.log('clicked');
        cartNumber();
        event.preventDefault();
    })
    
}

function onLoadPage(){
    let productNumber= localStorage.getItem('cartNumber')

    if(productNumber){
        document.querySelector('.cart span').textContent= 0;
        localStorage.clear()

    }

}

function cartNumber(){
    let productNumber= localStorage.getItem('cartNumber')
    productNumber= parseInt(productNumber)
    // console.log(productNumber)

    if(productNumber){
        localStorage.setItem('cartNumber',productNumber+1)
        document.querySelector('.cart span').textContent=productNumber+1;

    }
    else{
        localStorage.setItem('cartNumber',1)
        document.querySelector('.cart span').textContent=1;
    }
  
   
}
onLoadPage();



//product array
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let chooseProduct=products[0];
  const currentProductImage=document.querySelector('.productImg');
  console.log(currentProductImage);
  let currentProductTitle=document.querySelector('.productTitle');
  console.log(currentProductTitle)
  let currentproductPrice=document.querySelector('.productPrice');
  console.log(currentproductPrice);
  
 const currentProductColors=document.querySelectorAll('.color');
 console.log(currentProductColors);

 const currentProductSize=document.querySelectorAll('.size');
 console.log(currentProductSize)


  const wrapper=document.getElementById('sliderWreapperId');
console.log(wrapper);
const menuItems=document.querySelectorAll('.menuItem');
console.log(menuItems);

menuItems.forEach((item,index)=>{
   console.log(item,index);
   item.addEventListener('click',()=>{
    //change the current slide
    wrapper.style.transform=`
    translateX(${-100*index}vw)
    `
    //change the choosen product
    chooseProduct=products[index];

    //change text of currentProduct
    currentProductTitle.textContent=chooseProduct.title;
    currentproductPrice.textContent="$"+" "+chooseProduct.price;
    currentProductImage.src=chooseProduct.colors[0].img
    
    currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor=chooseProduct.colors[index].code
    })
   })

})

currentProductColors.forEach((color,index)=>{
    color.addEventListener('click',()=>{
        currentProductImage.src=chooseProduct.colors[index].img
    })
})

currentProductSize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSize.forEach((size)=>{
            size.style.backgroundColor='white';
            size.style.color='black'
        })

       size.style.backgroundColor='black';
       size.style.color='white'
    })
})


//payment

const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";
})

close.addEventListener("click",()=>{
    payment.style.display="none";
})


const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
menuicon.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overflow-hidden")
    menuicon.classList.toggle("show");
})
const tabcontant = document.querySelectorAll(".tabcontant");
const firstcontant = document.querySelector(".tabcontant");
const fistactivetab = document.querySelector(".allbtn button");
tabcontant.forEach(e => e.style.display = "none");
firstcontant.style.display = "block";
fistactivetab.classList.add("active");
function clickhere(tabs) {
    tabcontant.forEach(e => e.style.display = "none");
    const selectcontant = document.getElementById(tabs)
    selectcontant.style.display = "block";
    const tabsactive = document.querySelectorAll(".allbtn button")
    tabsactive.forEach(e => e.classList.remove("active"))
    const selecttab = document.querySelector(`button[onclick = "clickhere('${tabs}')"]`)
    selecttab.classList.add("active")
};
const cartItem = document.getElementById("cartItem");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
increase.addEventListener("click", () => {
    cartItem.innerHTML = +cartItem.innerHTML + 1;
});
decrease.addEventListener("click", () => {
    if (cartItem.innerHTML > 1) {
        cartItem.innerHTML = cartItem.innerHTML - 1;
    }
});



const cards = [
    {
        shoesImage: "./dist/images/redshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "./dist/images/cart-item.webp",
        ratingImage: "./dist/images/rating-stars.webp",
    },
    {
        shoesImage: "./dist/images/grayshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "../dist/images/cart-item.webp",
        ratingImage: "./dist/images/rating-stars.webp",
    },
    {
        shoesImage: "./dist/images/redshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "./dist/images/cart-item.webp",
        ratingImage: "./dist/images/rating-stars.webp",
    },
    {
        shoesImage: "./dist/images/grayshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "../dist/images/cart-item.webp",
        ratingImage: "./dist/images/rating-stars.webp",
    },
    {
        shoesImage: "./dist/images/redshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "./dist/images/cart-item.webp",
        ratingImage: "./dist/images/rating-stars.webp",
    },
    {
        shoesImage: "./dist/images/grayshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "../dist/images/cart-item.webp",
        ratingImage: "./dist/images/rating-stars.webp",
    },
    {
        shoesImage: "./dist/images/redshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "./dist/images/cart-item.webp",
        ratingImage: "./dist/images/rating-stars.webp",
    },
    {
        shoesImage: "./dist/images/grayshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "../dist/images/cart-item.webp",
        ratingImage: "./dist/images/rating-stars.webp",
    },
]
const cardcontainer = document.getElementById("cardcontainer");
cards.forEach((card) => {
    const cardelement = document.createElement("div");
    cardelement.className = "stylecard"
    cardelement.innerHTML =

        `
    <img src="${card.shoesImage}" alt="" class="w-full">
    <div class="px-[14px] pt-[18px] pb-[30px]  flex justify-between items-start"> 
        <div class="">
            <h5 class="font-poppins leading-[34px] font-medium text-[18px] text-[#555555]">${card.Shoesname}</h5>
            <div class = "flex gap-[4px] pt-[3px] ">
                <p class="font-poppins leading-[34px] font-medium text-[18px] text-[#999999]">${card.price1}</p>
                <p class="font-poppins leading-[34px] font-medium text-[18px] text-[#FF0000]">${card.price2}</p>
            </div>
            <img src="${card.ratingImage}" alt="" class="pt-[13px]">
        </div>                                                        
            <img src="${card.cardicon}" alt="" class="pt-[13px]">      
    </div> 

   `

    cardcontainer.appendChild(cardelement)
});
const cardsfirst = [
    {
        cardImage: "./dist/images/foot-locker.webp",
        price: "Price:",
        rate: "€179,99",
        pricebtn: "Best Price",
        size: "Size:",
        btn1: "41",
        btn2: "42",
        btn3: "43",
        btn4: "44",
        btn5: "45",
        btn6: "46",
        viewproduct: "View this product as:",
        footlocker: "Foot Locker NL",
    },
    {
        cardImage: "./dist/images/sidestep.webp",
        price: "Price:",
        rate: "€179,99",
        pricebtn: "Best Price",
        size: "Size:",
        btn1: "41",
        btn2: "42",
        btn3: "43",
        btn4: "44",
        btn5: "45",
        btn6: "46",
        viewproduct: "View this product as:",
        footlocker: "Foot Locker NL",
    },
    {
        cardImage: "./dist/images/foot-locker.webp",
        price: "Price:",
        rate: "€179,99",
        pricebtn: "Best Price",
        size: "Size:",
        btn1: "41",
        btn2: "42",
        btn3: "43",
        btn4: "44",
        btn5: "45",
        btn6: "46",
        viewproduct: "View this product as:",
        footlocker: "Foot Locker NL",
    },
    {
        cardImage: "./dist/images/sidestep.webp",
        price: "Price:",
        rate: "€179,99",
        pricebtn: "Best Price",
        size: "Size:",
        btn1: "41",
        btn2: "42",
        btn3: "43",
        btn4: "44",
        btn5: "45",
        btn6: "46",
        viewproduct: "View this product as:",
        footlocker: "Foot Locker NL",
    },
]
const cardcontainer1 = document.getElementById("cardcontainer1");
cardsfirst.forEach((cardsfirst) => {
    const cardelement1 = document.createElement("div");
    cardelement1.className = "cardfirst"
    cardelement1.innerHTML =
        `
    <div class="border-[1px] border-[#EBEBEB] px-[44px] rounded-t-[10px] py-[27px]"><img src="${cardsfirst.cardImage}" alt="" class="w-full"></div>
   <div class="pl-[16px] pr-[16px]">
   <div class="flex justify-between pt-[28px]">
   <div class="flex gap-[17px] items-center">
       <p class="text-[16px] font-Poppins font-[400] leading-[20px]">${cardsfirst.price}</p>
       <p class="text-[20px] font-Poppins font-[600] leading-[25px]">${cardsfirst.rate}</p>
   </div>
   <button class="bg-[#28A745] py-1 px-[10px] text-[10px] font-[400] text-white border-[0.31px] border-[#E8E8E8] rounded-[6.53px] hover:bg-white hover:text-[#28A745] hover:border-[#28A745]">${cardsfirst.pricebtn}</button>
</div>
<p class="text-[16px] font-Poppins font-[400] leading-[20px] pt-4 pb-[10px]">${cardsfirst.size}</p>
<div class="flex flex-wrap justify-between gap-[11px]">
   <button class="px-[32px] py-2 border-[1px] rounded-[40px] border-[#E0E0E0] text-[16px] leading-[20px] text-[#181818] hover:text-white hover:bg-[#28A745] duration-300">${cardsfirst.btn1}</button>
   <button class="px-[32px] py-2 border-[1px] rounded-[40px] border-[#E0E0E0] text-[16px] leading-[20px] text-[#181818] hover:text-white hover:bg-[#28A745] duration-300">${cardsfirst.btn2}</button>
   <button class="px-[32px] py-2 border-[1px] rounded-[40px] border-[#E0E0E0] text-[16px] leading-[20px] text-[#181818] hover:text-white hover:bg-[#28A745] duration-300">${cardsfirst.btn3}</button>
   <button class="px-[32px] py-2 border-[1px] rounded-[40px] border-[#E0E0E0] text-[16px] leading-[20px] text-[#181818] hover:text-white hover:bg-[#28A745] duration-300">${cardsfirst.btn4}</button>
   <button class="px-[32px] py-2 border-[1px] rounded-[40px] border-[#E0E0E0] text-[16px] leading-[20px] text-[#181818] hover:text-white hover:bg-[#28A745] duration-300">${cardsfirst.btn5}</button>
   <button class="px-[32px] py-2 border-[1px] rounded-[40px] border-[#E0E0E0] text-[16px] leading-[20px] text-[#181818] hover:text-white hover:bg-[#28A745] duration-300">${cardsfirst.btn6}</button>
</div>
<p class="text-[16px] font-Poppins font-[400] leading-[20px] pt-5">${cardsfirst.viewproduct}</p>
<p class="text-[16px] font-Poppins font-[600] leading-[20px] text-[#007BFF] pt-2 pb-[31px]">${cardsfirst.footlocker}</p>
   </div>
   `

    cardcontainer1.appendChild(cardelement1)
});

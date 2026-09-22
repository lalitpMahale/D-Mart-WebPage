const button = document.getElementById('locationbtn');

button.addEventListener('click', () => {
    window.open(
        'http://127.0.0.1:5500/cssProgramm/kids%20website/kids%20website/index.html',
        'popupWindow',
        'width=600 ,height=500, left=100, top=100, resizable=yes'
    );
});


const topbar = document.getElementById('catBar');

// topbar.innerText=['DMart Grocery','Ready To Cook']


// slider section 

let slides = document.getElementById('slides');

if (slides) {
    let index = 0;

    const totalslides = document.querySelectorAll('.slide').length


    setInterval(() => {
        index++;
        if (index >= totalslides) {
            index = 0;
        }
        slides.style.transform = `translateX(-${(index * 100)}%)`;
        // slides.style.display="none";
    }, 3000);

}




//paceholder  use marquee

const placeholderScroll = document.getElementById('dmartlocationId');

//---------------------------
// Search box 
const searchInput = document.getElementById("searchInput");

const searchWords = ["Ghee", "Sugar", "Milk"];

let index = 0;

setInterval(function () {

    searchInput.placeholder = `Search for ${searchWords[index]}`;

    index++;

    if (index >= searchWords.length) {
        index = 0;
    }

}, 2000);

// Categorys croll

let track = document.getElementById('categoryTrack')
const leftArrow = document.getElementById("leftArrow")
const rightArrow = document.getElementById('rightArrow')
let categories = document.querySelectorAll('.category')
let currentIndex = 0;

//how many item visible
function getVisibile() {
    let slider = document.querySelector('.slider')
    const categoryWidth = categories[0].offsetWidth;
    const gap = 25;
    const availabaleWidth = slider.clientWidth - 90;

    return Math.floor(
        availabaleWidth / (categoryWidth + gap)
    )


}
//moveslider
function moveslider() {
    const categoryWidth = categories[0].offsetWidth;
    const gap = 25;

    // first movement=category width(130px)+gap
    let moveAmount = categoryWidth + gap;

    track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
    updateArrows()

}

if (rightArrow) {
    rightArrow.addEventListener("click", function () {
        const visibleItems = getVisibile()

        const maxIndex = categories.length - visibleItems

        //move only one items
        if (currentIndex < maxIndex) {
            currentIndex++;
            moveslider()
        }

    });
}


//left arrow

if (leftArrow) {
    leftArrow.addEventListener("click", function () {
        //move only one item
        if (currentIndex > 0) {
            currentIndex--
            moveslider()
        }
    })
}



function updateArrows() {
    const visibleItems = getVisibile()
    const maxIndex = categories.length - visibleItems

    if (currentIndex === 0) {
        leftArrow.classList.add("disabled")
    }
    else {
        leftArrow.classList.remove("disabled")
        leftArrow.style.display = 'block'
    }

    if (currentIndex >= maxIndex) {
        rightArrow.classList.add("disabled")
    }
    else {
        rightArrow.classList.remove("disabled")


    }
}


// SubCategories data

let subCat = [
    {
        id: 1,
        image: 'assets/Lokwan.jpg',
        name: 'Wheat Lokwan:10kgs',
        mrp: 'MRP',
        mrpn: 570,
        dmart: 'DMart',
        dmartn: 424,
        category:'DMart Grocery'

    },

    {
        id: 2,
        image: 'assets/Wheat-Sihore.jpg',
        name: 'Wheat Sihore: 10kg',
        mrp: 'MRP',
        mrpn: 570,
        dmart: 'DMart',
        dmartn: 412,
         category:'DMart Grocery'
    },
    {
        id: 3,
        image: 'assets/DMart-Premia.jpg',
        name: 'Tur Dal Latur: 1 kg',
        mrp: 'MRP',
        mrpn: 201,
        dmart: 'DMart',
        dmartn: 156,
         category:'DMart Grocery'

    },
    {
        id: 4,
        image: 'assets/Sugar.jpg',
        name: 'Sugar(Sakhar):5 kg',
        mrp: 'MRP',
        mrpn: 494,
        dmart: 'DMart',
        dmartn: 372,
         category:'DMart Grocery'

    },
    {
        id: 5,
        image: 'assets/Groundnut.jpg',
        name: 'Groundnut(Shengdana):500g',
        mrp: 'MRP',
        mrpn: 130,
        dmart: 'DMart',
        dmartn: 97,
         category:'DMart Grocery'
    },
    {
        id: 6,
        image: 'assets/Sihore.jpg',
        name: 'Wheat MP Sihore: 10kg',
        mrp: 'MRP',
        mrpn: 900,
        dmart: 'DMart',
        dmartn: 739,
         category:'DMart Grocery'
    },
    {
        id: 7,
        image: 'assets/Moong-dal.jpg',
        name: 'Moong Dal 1kg',
        mrp: 'MRP',
        mrpn: 180,
        dmart: 'DMart',
        dmartn: 149,
         category:'DMart Grocery'
    },
    {
        id: 8,
        image: 'assets/Swaad-ToorDal.jpg',
        name: 'Toor Dal: 1kg',
        mrp: 'MRP',
        mrpn: 192,
        dmart: 'DMart',
        dmartn: 147,
         category:'DMart Grocery'
    },
    {
        id: 9,
        image: 'assets/RiceBranOil.jpg',
        name: 'Rice Bran Oil: 800g',
        mrp: 'MRP',
        mrpn: 160,
        dmart: 'DMart',
        dmartn: 142,
         category:'DMart Grocery'
    },
    {
        id: 10,
        image: 'assets/Badam.jpg',
        name: 'Badam: 1kg',
        mrp: 'MRP',
        mrpn: 1540,
        dmart: 'DMart',
        dmartn: 1036,
         category:'DMart Grocery'
    },
    {
        id: 11,
        image: 'assets/Kaju.jpg',
        name: 'Kaju: 500g',
        mrp: 'MRP',
        mrpn: 685,
        dmart: 'DMart',
        dmartn: 474,
         category:'DMart Grocery'
        
    },

    {
        id: 12,
        image:'assets/Lijjat Udad papad.jpg',
        name:'Udad Papad:1kg',
        mrp:'MRP',
        mrpn:384,
        dmart:'DMart',
        dmartn:344,
        category: 'Ready To Cook'

    },
    {
        id: 13,
        image:'assets/Home Chef Udad papad.jpg',
        name:'Chef Udad Papad:200g',
        mrp:'MRP',
        mrpn:75,
        dmart:'DMart',
        dmartn:46,
        category: 'Ready To Cook'

    },
    {
        id:14,
        image:'assets/Chitale Khaman.jpg',
        name:'Chitale Khaman:200g',
        mrp:'MRP',
        mrpn:60,
        dmart:'DMart',
        dmartn:54,
        category:'Ready To Cook'
    },
    {
        id:15,
        image:'assets/Lijjat Punjabi Masala Papad.jpg',
        name:'Masala Papad:200 g',
        mrp:'MRP',
        mrpn:92,
        dmart:'DMart',
        dmartn:82,
        category:'Ready To Cook'
    },
    {
        id:16,
        image:'assets/Jaypees Idli Dosa Uttappa batter.jpg',
        name:'Dosa Uttappa Batter:1kg',
        mrp:'MRP',
        mrpn:85,
        dmart:'DMart',
        dmartn:49,
        category:'Ready To Cook'
    },
    {
        id:17,
        image:'assets/Ram Bandhu Moong Papad.jpg',
        name:'Moong Papad:200g',
        mrp:'MRP',
        mrpn:80,
        dmart:'DMart',
        dmartn:47,
        category:'Ready To Cook'
    },
    {  
        id:18,
        category:'Beverages',
    },
    {
       id:19,
       category:'Biscuits & Cookies'
    },
    {
        id:20,
        category:'Bath & Body'
    },
    {
        id:21,
        category:'Detergent & Fabric Core'
    },
    {
        id:22,
        category:'Cleaners'
    }

    






]


let cartItem = 0;




function displayProducts(subCat) {
    let productContainer = document.getElementById("subCategory");


    productContainer.innerHTML = "";

    subCat.forEach(function (product) {

        let cartProduct = cart.find(function (item) {
            return item.id === product.id;
        });

        let quantity  = cartProduct ? cartProduct.quantity : 0;


        productContainer.innerHTML += `
     <div class="carts">
          <div class="carts-cha">
            <img src="${product.image}" class="product-image">

            <h3>${product.name}</h3>

            <p>
                ${product.mrp}  
                <span>${product.mrpn}</span>
            </p>

            <a>
                ${product.dmart}
                <span>&#8377;${product.dmartn}</span>
            </a>   
       
           
            ${quantity === 0  ? 
                `
                <button class="add-cartbtn"  onclick="addToCart(${product.id})"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>

                `
                : 
                
                `
                <div class="quantitybox">
                    <button
                        onclick="decreaseQuantity(${product.id})">

                    -

                    </button>

                    <span id="quantityNumb">
                           ${quantity}

                    </span>

                    <button onclick="increaseQuantity(${product.id})">+</button>
                </div>

                    <button class="remove-btn" onclick="removeProduct(${product.id})">Remove</button>
                
                `
                

                }
                
                
               
         
    
        
            </div>
                            <div class="green-dot">
                     
                                <div class="dot"></div>
                            </div>

        </div>

        
    `;
    console.log(quantity,typeof(quantity))
    });
    
}

// CART 
//----------------------------
let cart = [];

//-----------------------------
// CATEGORY BUTTONS
//-----------------------------

let categoriesall= [];


subCat.forEach(function(product){
    if (!categoriesall.includes(product.category)){
        categoriesall.push(product.category);
    }
});

categoriesall.forEach(function(category){
    document.getElementById("filters").innerHTML +=`
    
    <li l onclick="filterProducts('${category}')">
       ${category}
    </li>
    
    `;
});


//----------------------------
// Filter Product
//---------------------------
function filterProducts(category){
    // if (category ==='DMart Grocery'){
    //     displayProducts(filteredProducts);
    // }
    // else{
       let filteredProducts= subCat.filter(function(product){
        return product.category === category;
       });

       displayProducts(filteredProducts);
    }
// }

// ADD TO CART  
//--------------------
function addToCart(id) {
    let selectProduct = subCat.find(function (product) {
        return product.id === id;
    });

    cart.push({
        id: selectProduct.id,

        quantity: 1
    });

    updateCart();

    displayProducts(subCat);

}

// INCREASE QUANTITY 
//-----------------------

function increaseQuantity(id) {
    let product = cart.find(function (item) {

        return item.id === id;
    });

    product.quantity++;
    document.getElementById('quantityNumb').innerHTML=`${product}`;

    updateCart();

    displayProducts(subCat);

}

//---------------------------
// DECREASE QUANTITY 
//---------------------------


function decreaseQuantity(id) {

    let product =
        cart.find(function (item) {

            return item.id === id;
        });

    product.quantity--;
    document.getElementById('quantityNumb').innerHTML=`${product}`;


    if (product.quantity === 0) {
        removeProduct(id);

    }
    else {
        updateCart();

        displayProducts(subCat);
    }
}

//---------------------------
//REMOVE PRODUCT
//---------------------------

function removeProduct(id) {
    cart = cart.filter(function (item) {

        return item.id !== id;
    });

    updateCart();

    displayProducts(subCat);
}

// UPDATE CART COUNT + TOTAL
//----------------------------

function updateCart() {
    let totalQunatity = 0;

    let totalAmount = 0;

    cart.forEach(function (item) {

        // total quantity

        totalQunatity = totalQunatity + item.quantity;

        // find product

        let product = subCat.find(function (product) {
            return product.id === item.id;
        });

        // TOTAL AMOUNT

        totalAmount = totalAmount + (product.dmartn * item.quantity);


    });

    // total quantity

    document.getElementById("count").innerHTML = totalQunatity;


    // total amount 

    document.getElementById("cartTotal").innerHTML = `: &#8377;${totalAmount}`;
}



// Initial Dispaly
//---------------------

displayProducts(subCat);


// Initial cart upadate

updateCart();



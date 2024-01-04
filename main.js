const galleryImage = [

  {
    src: "./assets/gallery/image4.jpg",
    alt: "Thumbnail Image 4",
  },
  {
    src: "./assets/gallery/image5.jpg",
    alt: "Thumbnail Image 5",
  },
  {
    src: "./assets/gallery/image6.jpg",
    alt: "Thumbnail Image 6",
  },
  
  {
    src: "./assets/gallery/image1.jpg",
    alt: "Thumbnail Image 1",
  },
  {
    src: "./assets/gallery/image2.jpg",
    alt: "Thumbnail Image 2",
  },
  {
    src: "./assets/gallery/img1.png",
    alt: "Thumbnail Img-1",
  },
  {
    src: "./assets/gallery/image3.jpg",
    alt: "Thumbnail Image 3",
  }
];


const products =[
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 49.9,
    image: "./assets/products/img6.png"
  },
  {
    title: "Space Odissey",
    author: "Marie Anne",
    price: 35,
    image: "./assets/products/img1.png"
  },
  {
    title: "Doomed City",
    author: "Jason Cobert",
    price: 0,
    image: "./assets/products/img2.png"
  },
  {
    title: "Black Dog",
    author: "John Doe",
    price: 85.35,
    image: "./assets/products/img3.png"
  },
  {
    title: "My Little Robot",
    author: "Pedro Paulo",
    price: 0,
    image: "./assets/products/img5.png"
  },
  {
    title: "Garden Girl",
    author: "Ankit Patel",
    price: 45,
    image: "./assets/products/img4.png"
  }
]


//Event listener > Menu Section
function menuHandle(){
  document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
    });
    document.querySelector("#close-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
        });

}
//For convert temperature only

function celsiousToFahr(temperature){
  let fahr = (temperature* 9/5)+32;
  return fahr;
  }

//For Greeting text
function greetingHandle(){

  let currentHour = new Date().getHours();
  if(currentHour<12){
    grettingText = "Good morning Tareq";
  }
  else if(currentHour<15){
    grettingText = "Good Noon Tareq";
  }
  else if(currentHour<18){
    grettingText= "Good After Noon Tareq";
  }
  else if(currentHour<21){
    grettingText= "Good Evening Tareq";
  }
  else{
    grettingText = "Good Night Tareq";
  }
  
      
      const wetherCondition = "Sunny";
      const userLocation = "Bangladesh";
      let temperature = 22;
      let celsiusText ="The wether is   "+wetherCondition+ "  and the temperature is  "+temperature.toFixed(1)+ "°C in  "+userLocation;
      let fahrText ="The wether is   "+wetherCondition+ "  and the temperature is  "+celsiousToFahr(temperature).toFixed(1)+ "°F in  "+userLocation;
      
      document.querySelector("#greeting").innerHTML= grettingText;
  
  
  
  
      document.querySelector(".weather-group").addEventListener("click", function(e){
  
          if(e.target.id == "celsius" ){
              document.querySelector("#weather").innerHTML= celsiusText;
          }
        else if(e.target.id == "fahr"){
          document.querySelector("#weather").innerHTML= fahrText;
        }
      });
}

    //Local Time // .toString().padStart("2","0")
    function clockHandle(){
      setInterval(function(){
        let localTime = new Date();
  
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart("2","0");
        document.querySelector("span[data-time=minutes]").textContent= localTime.getMinutes().toString().padStart("2","0");
        document.querySelector("span[data-time=seconds]").textContent= localTime.getSeconds().toString().padStart("2","0");
  
      },1000);
    }

    //Gallary image change
    function imageHandle (){
      
      
      let mainImage = document.querySelector("#gallery > img");
      let thumbnail = document.querySelector("#gallery .thumbnails");
      
      mainImage.src = galleryImage[0].src;
      mainImage.alt = galleryImage[0].alt;
      
      galleryImage.forEach(function (image, index) {
        let thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.dataset.arrayIndex = index;
  
  
      if (index===0)
      {
        thumb.dataset.selected = true;
      }
      else{
        thumb.dataset.selected = false;
      }
  
      thumb.addEventListener("click", function(e){
  let selectedIndex = (e.target.dataset.arrayIndex);
  let selectedImage = galleryImage[selectedIndex];
  
      mainImage.src = selectedImage.src;
      mainImage.alt = selectedImage.alt; 
  
  thumbnail.querySelectorAll("img").forEach(function(img){
  
    img.dataset.selected = false;
  
  });
  
  e.target.dataset.selected =true;
  
      });
      thumbnail.appendChild(thumb);// Corrected the typo here
      });
  

    }  
    function populateProduct (productList){

      let productSection = document.querySelector(".products-area");
      //For stop repetation product
      productSection.textContent = "";
         //Run a loop through the products and create an HTML element (product-item) for each of the element
         productList.forEach(function(product, index){
    
          //Creat the HTML element for the individual product
        let productsElm = document.createElement("div");
        productsElm.classList.add("product-item");
  
  //Creat the product image
  let productsImage = document.createElement("img");
  productsImage.src = product.image;
  
  //Creat product detail section
  let productDetail = document.createElement("div");
  productDetail.classList.add("product-details");
  
  //Creat product Title , author , price-title and price
  let productTitle = document.createElement("h3");
  productTitle.classList.add("product-title");
  productTitle.textContent = product.title;
  
  let productAuthor = document.createElement("p");
  productAuthor.classList.add("product-author");
  productAuthor.textContent = product.author;
  
  let priceTitle = document.createElement("p");
  priceTitle.classList.add("price-title");
  priceTitle.textContent = "Price";
  
  let price = document.createElement("p");
  price.classList.add("product-price");
  price.textContent = "$"+   product.price;
  
  //Append product details
  productDetail.append(productTitle);
  productDetail.append(productAuthor);
  productDetail.append(priceTitle);
  productDetail.append(price);
  
  //Add all child HTML element of the product
  productsElm.append(productsImage);
  productsElm.append(productDetail);
  //Add complete individual product to theproduct section
  productSection.append(productsElm);
        });
     
    }
      

   
    
    function productsHandle(){
      
      

      
let freeProducts = products.filter(function(item){
  return item.price <= 0;
});
let paidProducts = products.filter(function(item){
  return item.price > 0;
});

   
      populateProduct (products);
      document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
      document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
      document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;
      
      let  productFilter = document.querySelector(".products-filter");
      productFilter.addEventListener("click",function(e){
if(e.target.id === "all"){
  populateProduct(products);
}
else if(e.target.id === "paid"){
  populateProduct(paidProducts);
}
else{
  populateProduct(freeProducts);
}

      });
    }
  function footerHandle(){
    let currentYear = new Date().getFullYear();
    document.querySelector("footer").innerHTML =( +currentYear   +"All rights reserve");
  }
  
navigator.geolocation.getCurrentPosition(function(position){
  console.log(position);
});

    menuHandle()
greetingHandle()
clockHandle()
imageHandle ()
productsHandle()
populateProduct()
footerHandle()


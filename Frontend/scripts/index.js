let arr=["https://img4.nbstatic.in/tr:w-2800/64213cdf8db992000bb661fb.jpg",
"https://img4.nbstatic.in/tr:w-2800/640976e822b317000b6f9c39.jpg",
"https://img4.nbstatic.in/tr:w-2800/64260da78db992000bb67457.jpg",
"https://img4.nbstatic.in/tr:w-2800/6421663022b317000b54e470.jpg"
];

let val=0;
setInterval(()=>{
let img=document.createElement("img");
img.setAttribute("src",arr[val]);
document.getElementById("slider").innerHTML=null;
document.getElementById("slider").append(img);
val++;
if(val==arr.length) val=0;
},3000);

let arr1=[
"https://img4.nbstatic.in/tr:w-2800/63ea2cbe22b317000bc83fa6.jpg",
"https://img4.nbstatic.in/tr:w-2800/6418583022b317000b3cb0ff.jpg"
];

let value=0;
setInterval(()=>{
let img=document.createElement("img");
img.setAttribute("src",arr1[value]);
document.getElementById("slider2").innerHTML=null;
document.getElementById("slider2").append(img);
value++;
if(value==arr1.length) value=0;
},3000);


let slide = document.getElementById("imgCard");
let items = document.getElementsByClassName("img1");
let next = document.getElementById("next");
let pre = document.getElementById("pre");
next.addEventListener("click", () => {
    slide.append(items[0]);
});
pre.addEventListener("click", () => {
    slide.prepend(items[items.length - 1]);
});


let arr2=[
    "https://img4.nbstatic.in/tr:w-2800/627b4e033b031b000b774d5f.jpg",
    "https://img4.nbstatic.in/tr:w-2800/627b4e0db3c621000b5f5e77.jpg",
    "https://img4.nbstatic.in/tr:w-2800/627b4e163b031b000b774d60.jpg",
    "https://img4.nbstatic.in/tr:w-2800/627b4e2ab3c621000b5f5e78.jpg"
    ];
    
    let v=0;
    setInterval(()=>{
    let img=document.createElement("img");
    img.setAttribute("src",arr2[v]);
    document.getElementById("slider4").innerHTML=null;
    document.getElementById("slider4").append(img);
    v++;
    if(v==arr2.length) v=0;
    },3000);

    let slide1 = document.getElementById("imageCard");
   let item = document.getElementsByClassName("img2");
   let next1 = document.getElementById("next1");
    let pre1 = document.getElementById("pre1");
    next1.addEventListener("click", () => {
    slide1.append(item[0]);
    });
    pre1.addEventListener("click", () => {
    slide1.prepend(item[item1.length - 1]);
    });

    let slide2 = document.getElementById("imageCard1");
    let item1 = document.getElementsByClassName("img3");
    let next2 = document.getElementById("next2");
     let pre2 = document.getElementById("pre2");
     next2.addEventListener("click", () => {
     slide2.append(item1[0]);
     });
     pre2.addEventListener("click", () => {
     slide2.prepend(item1[item1.length - 1]);
     });

     let arr3=[
        "https://img4.nbstatic.in/tr:w-2800/63bfe1f58db992000b7a18b8.jpg",
        "https://img4.nbstatic.in/tr:w-2800/63bfe1e022b317000b618aa5.jpg",
        "https://img4.nbstatic.in/tr:w-2800/63bfe1ec8db992000b7a18b7.jpg",
        "https://img4.nbstatic.in/tr:w-2800/63bfe1f022b317000b618aa7.jpg"
        ];
        
        let v1=0;
        setInterval(()=>{
        let img=document.createElement("img");
        img.setAttribute("src",arr3[v1]);
        document.getElementById("slider7").innerHTML=null;
        document.getElementById("slider7").append(img);
        v1++;
        if(v1==arr3.length) v1=0;
        },3000);

        let slide3 = document.getElementById("imageCard2");
        let item2 = document.getElementsByClassName("img4");
        let next3 = document.getElementById("next3");
         let pre3 = document.getElementById("pre3");
         next3.addEventListener("click", () => {
         slide3.append(item2[0]);
         });
         pre3.addEventListener("click", () => {
         slide3.prepend(item2[item2.length - 1]);
         });  
         
    let register=document.getElementById("register")
    register.addEventListener("click",()=>{
        window.location.href="../html/signUp.html"
    })     


    let text= document.getElementById("text");
    let search=document.getElementById("s")
     search.addEventListener("click",(e)=>{
    e.preventDefault()
    let SearchInp= text.value;
     if(SearchInp=="Restaurant"){
        window.location.href="./Restaurant.html"
     }
     else if(SearchInp=="Salon"){
        window.location.href="./Salon.html"
     }
     else if(SearchInp=="Buffet"){
        window.location.href="./Buffet.html"
     }
     
    });
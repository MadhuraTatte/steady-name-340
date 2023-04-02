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

    let salon=document.getElementById("new")
    salon.addEventListener("click",()=>{
        window.location.href="../html/Salon.html"
    })     
   
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

let arr1=[
    "https://img4.nbstatic.in/tr:w-2800/627b523db3c621000b5f5e96.jpg",
    "https://img4.nbstatic.in/tr:w-2800/627b5233b3c621000b5f5e95.jpg",
    "https://img4.nbstatic.in/tr:w-2800/627b53afb3c621000b5f5ea1.jpg",
    "https://img4.nbstatic.in/tr:w-2800/627b53ab3b031b000b774d8d.jpg",
    "https://img4.nbstatic.in/tr:w-2800/627b52293b031b000b774d81.jpg",
    "https://img4.nbstatic.in/tr:w-2800/627b53b53b031b000b774d8e.jpg",

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

    let arr2=[
        "https://img4.nbstatic.in/tr:w-2800/63bfd9aa22b317000b618a68.jpg",
        "https://img4.nbstatic.in/tr:w-2800/63bfd9a68db992000b7a1872.jpg",
        "https://img4.nbstatic.in/tr:w-2800/63bfd99b8db992000b7a1871.jpg",
        "https://img4.nbstatic.in/tr:w-2800/63bfd9a222b317000b618a67.jpg",
        "https://img4.nbstatic.in/tr:w-2800/63bfd9b822b317000b618a69.jpg",
        "https://img4.nbstatic.in/tr:w-2800/63bfd9bd22b317000b618a6a.jpg",
        
        ];
        
        let value1=0;
        setInterval(()=>{
        let img=document.createElement("img");
        img.setAttribute("src",arr2[value1]);
        document.getElementById("slider3").innerHTML=null;
        document.getElementById("slider3").append(img);
        value1++;
        if(value1==arr2.length) value1=0;
        },3000);
    
import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!


const navLinks = document.querySelectorAll(".nav-link");
//------- Mouseover -------
navLinks.forEach(item => {
    item.addEventListener("mouseover", (e) => {
        item.style.backgroundColor = "orange"
        item.style.border = "1px solid purple"
        item.style.borderRadius = "5px"
        item.style.fontStyle = "italic"
    })
})

//-------- Mouseout ------
navLinks.forEach(item => {
    item.addEventListener("mouseout", (e) => {
        item.style.backgroundColor = "transparent"
        item.style.border = "none"
        item.style.borderRadius = "0"
        item.style.fontStyle = "normal"
    })
})


//---------- Click -------
const Resimler = document.querySelectorAll("img")

Resimler.forEach((resim) => {
    resim.addEventListener("click", (event) => {
        resim.style.filter = "grayscale(100%)";
    })
})

//---------- Double Click -------
Resimler.forEach((resim) => {
    resim.addEventListener("dblclick", (event) => {
        resim.style.filter = "none";
    })
})



//----- KEWDOWN -------

const header = document.querySelector("header");
const body = document.querySelector("body");
body.addEventListener("keydown", (event) => {
    if (event.key == 1) {

        let backgroundColors = ["#MMFF11", "#335412", "#225544", "#MMFF44", "#231314", "#51553", "#664521", "#785422", "#11FFEE", "#22F432", "#DDFFEE",]
        function backgroundColorRandomNumber(number) {
            return Math.floor(Math.random() * number);
        }
        body.style.backgroundColor = backgroundColors[backgroundColorRandomNumber(backgroundColors.length)]

        header.style.backgroundColor = backgroundColors[backgroundColorRandomNumber(backgroundColors.length)]


    };

});

// --WHEEL--
const paragraphs = document.querySelector(".intro p");
paragraphs.addEventListener("wheel", event => {
    event.target.style.color = "red"
})


//--- LOAD ---

// window.addEventListener("load",event=>{
//     alert("EĞLENCE OTOBÜSÜNE HOŞGELDİN :)))");
//     alert("Arka plan akışı için lütfen 1'e bas!")
// })

//---RESIZE---

const images = document.getElementsByTagName("img");
window.addEventListener("resize", event => {
    let windowWidth = window.innerWidth;


    for (let i = 0; i < images.length; i++) {
        images[i].style.fontSize = windowWidth / 50 + "px"
    }
})


//---focus---

const input = document.getElementById('myInput');

input.addEventListener("focus", event => {
    event.target.style.backgroundColor="red"
})

//---scroll---

window.addEventListener("scroll",myFunc);
function myFunc(){
    console.log("scrolled")
}


//select

input.addEventListener('select', function(event) {
  const selectedText = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  console.log(`Seçtiğin kelime= ${selectedText}`);
});


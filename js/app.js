/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener("DOMContentLoaded", function(){

var navClass=document.querySelector(".menu");
function TakeClassNav() {
  navClass.classList.add("nav");
}
TakeClassNav();

var lisTop=document.querySelectorAll(".menu > ul > li");
    console.log(lisTop);
    [...lisTop].forEach(function (li) {
      li.addEventListener("mouseover",function (event) {
        var hideUl= this.firstElementChild;
        if (hideUl) {
            var showUl= this.firstElementChild.nextElementSibling;
            showUl.style.display="block";
        }
    });
  });


  [...lisTop].forEach(function (li) {
    li.addEventListener("mouseout",function (event) {
      var hideUl= this.firstElementChild;
      if (hideUl) {
        var showUl= this.firstElementChild.nextElementSibling;
        showUl.style.display="none";
}
    });
  });

///slider

//dodanie klasy .slider do ul
var ulAll = document.querySelectorAll(".img_chair  ul");
[...ulAll].forEach(function (ul) {
  ul.classList.add("slider_img");
});

var btnNext=document.querySelector(".arr-right");//wybieram guzik next
var btnPrev=document.querySelector(".arr-left");//wybieram guzik prev
var liAll=[...document.querySelectorAll(".img_chair ul li")];//wybieram i zamieniam na tablice wszystkie li
var count=0;//tworze zmienna rowna 0

liAll[count].classList.add("visible");//dodaje klase do pierwszego ele.listy

btnNext.addEventListener("click",function (event) {


  liAll[count].classList.remove("visible");
  if (count>=liAll.length -1) {
    count = -1;
  }
  count++;
  liAll[count].classList.add("visible");




});

btnPrev.addEventListener("click",function (event) {
  liAll[count].classList.remove("visible");
  if (count <= 0) {
    count=liAll.length;
  }
  count--;
  liAll[count].classList.add("visible");
});

function DomContentLoaded() {

}
DomContentLoaded();
// znikajace opisy zdjec
var fotoOne=document.querySelector(".foto1");
var fotoTwo=document.querySelector(".foto2");

fotoOne.addEventListener("mouseover", function (event) {
this.firstElementChild.style.display="none";
});
fotoOne.addEventListener("mouseout", function (event) {
  this.firstElementChild.style.display="flex";
});

fotoTwo.addEventListener("mouseover", function (event) {
  this.firstElementChild.style.display="none";
});
fotoTwo.addEventListener("mouseout", function (event) {
  this.firstElementChild.style.display="flex";
});

//tittle3

var title13=document.querySelector(".foto3");
title13.addEventListener("mouseover", function (event) {
  title13.firstElementChild.style.display="block";
  title13.firstElementChild.classList.add("lightSpeedIn");
});
var priceAnim=document.querySelector(".price_top");
priceAnim.addEventListener("mouseover",function (event) {
  priceAnim.firstElementChild.classList.add("lightSpeedIn");
  priceAnim.firstElementChild.style.display="block";
})

//wysuwana lista
var liFromlistType = document.querySelectorAll(".list_panel_type li");
var liFromlistColor = document.querySelectorAll(".list_panel_color li");
var liFromlistMaterial = document.querySelectorAll(".list_panel_material li");
var checkTransport = document.querySelector("#transport");
var typeResult = document.querySelector(".type");
var colorResult = document.querySelector(".color");
var patternResult = document.querySelector(".pattern");
var transportResult = document.querySelector(".transport");
var listPanel=document.querySelectorAll(".list_panel");
var listArrow=document.querySelectorAll(".list_arrow");
var suma=document.querySelector(".sum");
var liValue=document.querySelector(".value");

[...listArrow].forEach(function (arr) {
  arr.addEventListener("click", function (event) {
        var lpanel = this.nextElementSibling;
        var lipanel= lpanel.children;

        lpanel.classList.toggle("look");




[...liFromlistType].forEach(function (liFL) {
  liFL.addEventListener("click", function (event) {
      var liType=document.querySelector(".list_panel_type");

      var liTypeData=this.dataset.value;
      var liType=this.innerText;
      typeResult.innerText=liType;
      var valueType=this.dataset.value;
      liValue.innerText=valueType;
    });
  });

[...liFromlistColor].forEach(function (liFL) {
  liFL.addEventListener("click", function (event) {
      var liColor=document.querySelector(".list_panel_color");
      var liColor=this.innerText;
      var liColorData=this.dataset.value;
      colorResult.innerText=liColor;
      var valueType=this.dataset.value;
      liValue.innerText=valueType;
    });
  });

  [...liFromlistMaterial].forEach(function (liFL) {
    liFL.addEventListener("click", function (event) {
      var liMaterial=document.querySelector(".list_panel_material");
      var liMaterial=this.innerText;

      patternResult.innerText=liMaterial;
    });
  });

  checkTransport.addEventListener("click", function (event) {
    if(checkTransport.checked){
      var transportAgree="Doliczony transport";
      transportResult.innerText=transportAgree;
      var liTransportData=this.dataset.value;
    }else{
      var transportAgree='';
      transportResult.innerText=transportAgree;
      var liTransportData=0;
    }

  });


  var liType=document.querySelector(".list_panel_type");
  var liTypeData=liType.dataset.value;
  var price=parseInt(liTypeData) ;
  // console.log(liTypeData +  "  sdsd");
  // var liColorData=this.dataset.value;
  // var liMaterialData=this.dataset.value;
  // var suma=document.querySelector(".sum");



});
});

suma.innerText
});

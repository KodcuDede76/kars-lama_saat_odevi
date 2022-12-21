let ad = prompt("Adınızı Yazınız:  ")
//console.log(ad)

let myClock = document.querySelector("#myClock")
let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML} <strong>${ad}</strong>`

function ekle(deger){
  let stringyap = deger.toString();
  let uzunluk   = stringyap.length;
  if(uzunluk===1){
    return "0" + stringyap;
  }else{
    return stringyap;
  }
    
  }


function clock(){
  let zaman = new Date();
  let saatdegeri = zaman.getHours();
  let dakikadegeri = zaman.getMinutes();
  let saniyedegeri = zaman.getSeconds();
  //let gundegeri = days[zaman.getDay()];

 

  
  let myClock = document.querySelector("#myClock").innerHTML = ekle(saatdegeri) + " : " + ekle(dakikadegeri) + " : " + ekle(saniyedegeri);

 //myClock.innerHTML = `${myClock.innerHTML} <strong>${clock}</strong>`
  /*   */
  const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

const gundegeri = new Date();
let gun = weekday[gundegeri.getDay()];
document.querySelector("#gun").innerHTML = gun;
  /* */
  
}





setInterval(clock, 1000);
import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generarDom() {
    let pronombre = ['the', 'our'];
    let adjetivo = ['great', 'big'];
    let nombre = ['jogger', 'raccon'];



    for (let p = 0; p < pronombre.length; p++) {
        for (let a = 0; a < adjetivo.length; a++) {
            for (let n = 0; n < nombre.length; n++) {
                console.log(pronombre[p] + adjetivo[a] + nombre[n]+".com");



            }
        }
    }
}
generarDom();
  // console.log("Hello Rigo from the console!");
};

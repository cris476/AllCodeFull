
import hamburgerMenu from "./menu_hamburguesa.js";
import {alarm1, digitalClokc} from "./reloj.js";
import { moveball, shortcuts } from "./teclado.js";


const d = document; 
 

d.addEventListener("DOMContentLoaded" ,  (e) => {
    hamburgerMenu(".panel-btn"  , ".panel" , ".menu a");
    digitalClokc(".reloj" , "#activar-reloj" ,"#desactivar-reloj"); 
    alarm1("asset/alarmaMujer.mp3" , "#activar-alarma" , ".desactivar_reloj"); 
     console.log("pepe"); 
})




d.addEventListener("keydown" , (e) => {
    shortcuts(e)
    moveball(e,".ball" , ".stage"); 
})

// document.querySelector("#activar-reloj").addEventListener("click" , (e)=>  {

//         reloinsetar(".reloj"); 

     
// }) 


// document.querySelector("#desactivar-reloj").addEventListener("click" , (e)=>  {
//      desactivar(".flex div"); 
// }) 

    








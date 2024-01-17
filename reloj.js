  const d = document ; 

export  function digitalClokc(clokv , btnPlay  , btnStop ){
   let tiempo ; 
     d.addEventListener("click", (e) => {

       if(e.target.matches(btnPlay)){
      
        tiempo = setInterval(() => {
           
         let clockHours = new Date().toLocaleTimeString(); 
         
        d.querySelector(clokv).innerHTML = `<h3>${clockHours}</h3>`
          
        e.target.disabled = true ; 

            
        }, 1000);   

       }

       if(e.target.matches(btnStop)){
         clearInterval(tiempo); 
         d.querySelector(clokv).innerHTML = ""; 
         d.querySelector(btnPlay).disabled = false; 
       }

     })

}




export function alarm1(sound , btnPlay ,  btnStop ){

  let alamaTiempo ; 
  const $alarm = d.createElement("audio"); 
  $alarm.src = sound;  


 d.addEventListener("click" , (e) => {
  
    if(e.target.matches(btnPlay)){
   
     alamaTiempo = setInterval(() => {
         $alarm.play();
     }, 2000);    
      
     e.target.disabled = true;  
   }
 
console.log(e.target); 

  if(e.target.matches(btnStop)){

 
         clearInterval(alamaTiempo); 
        $alarm.pause();
        $alarm.currentTime = 0; 
        d.querySelector(btnPlay).disabled = false; 
   }  

 }) 
   

}




// export function desactivar(clase){

//     const  $divReloj  = document.querySelectorAll(clase); 
   
//     $divReloj.forEach((ele) => { ele.remove() } )


// }


// export function reloinsetar(clase) {
//     const fecha = new Date();
//     const insercion = document.createDocumentFragment();
//     let segundos = fecha.getSeconds()
//     let minutos = fecha.getMinutes();
//     let horas = fecha.getHours();

//     if (segundos < 10) {
//         segundos = "0" + segundos;
//     }

//     if (minutos < 10) {
//         minutos = "0" + segundos;
//     }

//     if (horas < 10) {
//         horas = "0" + segundos;
//     }

//     let $horas = document.createElement("div");
//     let $minutis = document.createElement("div");
//     let $segundos = document.createElement("div");

//     $horas.textContent = horas;
//     $minutis.textContent = minutos;
//     $segundos.textContent = segundos;

//     const $zona  = document.querySelector(clase);

//     insercion.appendChild($horas);
//     insercion.appendChild($minutis);
//     insercion.appendChild($segundos);

//     $zona.appendChild(insercion); // Corrige el método de append
// }







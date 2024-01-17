const d = document;
let x = 0;
let y = 0;

/* 
eventos
keydown pulsay una tecla ; 
keyup soltar una  tecla ; 
keypress  matener el boton pulsado

*/

export function moveball(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect()
    console.log(e.keyCode);
    console.log(e.key);
    console.table(limitsBall);
    console.table(limitsStage);


    // const move = (direction) => {
    // }

    switch (e.keyCode) {
        //izquierda
        case 37:
            //    move("left");
           
            if (limitsBall.left > limitsStage.left) { x-- 
                e.preventDefault();
            };

            break;
        //izqui
        case 38:
            if (limitsBall.top > limitsStage.top) { y--; 
                e.preventDefault();
            
            };

            // move("up");
            break;
        case 39:
            // move("right");
            if (limitsBall.right < limitsStage.right) { x++; 
                e.preventDefault();
            
            };
            break;
        case 40:
            if (limitsBall.bottom < limitsStage.bottom) { y++;
                e.preventDefault();
            
            };

            // move("down");
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px , ${y * 10}px) `

}

export function shortcuts(e) {
    //    console.log(e.type);
    //    console.log(e.key)
    //    console.log(e.keyCode); 
    //    console.log("Ctrl : " + e.ctrlKey); 
    //    console.log("alt : " + e.altKey);
    //    console.log("shift : " + e.shiftKey);
    //    console.log(e)
    console.log(e.keyCode);

    if (e.key === "a" && e.altKey) {
        alert("hola");
    }

    if (e.key === "c" && e.altKey) {
        confirm("es una confirmacion");
    }

    if (e.key === "p" && e.altKey) {
        prompt("hola");
    }


}
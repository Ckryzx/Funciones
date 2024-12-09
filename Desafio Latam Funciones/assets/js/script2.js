function cambiarColorNegro(event) {
    event.target.style.backgroundColor = 'black';
}

document.getElementById("div1").addEventListener("click", cambiarColorNegro);
document.getElementById("div2").addEventListener("click", cambiarColorNegro);
document.getElementById("div3").addEventListener("click", cambiarColorNegro);
document.getElementById("div4").addEventListener("click", cambiarColorNegro);

let colorGlobal;
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const keyDiv = document.getElementById("key");

    if (key === 'a') {
        colorGlobal = 'pink';
        keyDiv.style.backgroundColor = colorGlobal;
    } else if (key === 's') {
        colorGlobal = 'orange';
        keyDiv.style.backgroundColor = colorGlobal;
    } else if (key === 'd') {
        colorGlobal = 'skyblue';
        keyDiv.style.backgroundColor = colorGlobal;
    } 

    else if (['q', 'w', 'e'].includes(key)) {
        const newDiv = document.createElement('div');
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.margin = '10px';
        newDiv.style.border = '1px solid black';

        if (key === 'q') {
            newDiv.style.backgroundColor = 'purple';
        } else if (key === 'w') {
            newDiv.style.backgroundColor = 'gray';
        } else if (key === 'e') {
            newDiv.style.backgroundColor = 'brown';
        }

        document.body.appendChild(newDiv);
    }
});
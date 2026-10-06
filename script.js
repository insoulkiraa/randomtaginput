function getrandcolor(){
    //const letter = '0123456789ABCDEF';
    //let color = "#";
    let color=["red","yellow","purple"]
    ///for (let i = 0; i < 2; i++) {
        // Возвращает 0, 1 или 2 с равной вероятностью
    let num = Math.floor(Math.random() * 3);

        return color[num];
        
   // }
    
}

const button = document.getElementById("btn1");
const container = document.getElementById("container");

button.addEventListener('click', ()=>{
    const newinpt = document.createElement('input');
    newinpt.style.border = 'none';
    newinpt.style.outline = 'none';
    newinpt.style.boxShadow = 'none';
    newinpt.style.outline = 'none';


    newinpt.type = 'color';
    newinpt.value = getrandcolor();
    newinpt.className = 'colors';

    const randcolor = getrandcolor();
    newinpt.style.backgroundColor = randcolor;
    
    container.appendChild(newinpt)
});

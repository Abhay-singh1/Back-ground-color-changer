const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn= document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", () => {

    let hexcolor='#';
    for (let i =1; i<=6; i++){
        let a = Math.floor(Math.random() * hex.length);
        hexcolor +=hex[a];
        }
    console.log('Hello World', hexcolor);
    document.body.style.backgroundColor =hexcolor;
    color.textContent = hexcolor; 


});


function getrandomNumber   (){
    arr=[];
   

};
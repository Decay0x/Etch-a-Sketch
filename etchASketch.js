const mainContainer = document.querySelector(".mainContainer");
const btnSketch = document.getElementById("btnSketch")

const makeDiv = (times) => {
    for(let i=0; i<times; i++){
        const divCont = document.createElement("div")
        divCont.classList.add("divCont")
        for(let y=0; y<times; y++){
            const divBox= document.createElement("div")
            divBox.classList.add("divBox")
            divCont.appendChild(divBox)
        }
     mainContainer.appendChild(divCont)
    }
}

btnSketch.addEventListener("click", ()=>{
  if (mainContainer.childElementCount !== 0) {
    mainContainer.innerHTML="";
  }
  let gridSize = prompt("Set your grid") 
  
  if(gridSize <= 1 || gridSize > 100){
    gridSize = prompt("Please choose a number within the range of 2-100",16)
  }
  makeDiv(gridSize)

  Array.from(mainContainer.querySelectorAll("div")).map((div) => {
    const getRandomHexColor = () => {
      const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
      const hexIndices = Array.from({ length: 6 }, () => Math.floor(Math.random() * 16));
      const hexCode = hexIndices.map((i) => hexChars[i]).join('');
      return `#${hexCode}`;
  };
    div.style.backgroundColor = "white";
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = getRandomHexColor();
    });
  });
})



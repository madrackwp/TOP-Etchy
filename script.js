const gridContainer = document.getElementById('grid-container')
const slider = document.getElementById("grid-size-slider")
const gridSizeVal = document.getElementById("size-value")
const genGridBtn = document.getElementById("gen-grid-button")

function createGrid(size){
  console.log(`Creating Grid of size ${size}`)
  for (let i = 0; i< size; i++){
    let row = document.createElement("div")
    row.className = "pixel-row"
    let pixelSize = 800/size
    row.style.height = pixelSize
    for (let j = 0; j< size; j++){
      let pixel = document.createElement("div") 
      pixel.style.width = pixelSize
      pixel.style.height = pixelSize
      pixel.className = "pixel"
      row.appendChild(pixel)
      pixel.addEventListener('mouseover', ()=>{
        // console.log("Mousein")
        pixel.classList.add("trace")
      })
  
      pixel.addEventListener('mouseout', ()=>{
        // console.log("Mouse Out")
        pixel.classList.remove('trace')
      })
    }
    gridContainer.appendChild(row)
  }
}

createGrid(16)

gridSizeVal.innerHTML = slider.value
slider.oninput = () =>{
  gridSizeVal.innerHTML = slider.value
}

genGridBtn.addEventListener('click', ()=>{
  while (gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.firstChild)
  }
  console.log("Cleared grid")
  createGrid(slider.value)
  console.log("New grid Generated")

})




let inputWidth = document.getElementById("width"),
    inputHeight = document.getElementById("height"),
    sizeBtn = document.getElementById("size-btn"),
    sizeChangeDiv = document.querySelector(".size-change-div"),
    fixedSizeBtn = document.getElementById("fixedSizeBtn")
    
sizeBtn.onclick = () => {
    sizeChangeDiv.style.width = inputWidth.value * 5.2 + 'px'
    sizeChangeDiv.style.height = inputHeight.value * 5.2 + 'px'
} 
let inputWidth = document.getElementById("width"),
    inputHeight = document.getElementById("height"),
    sizeBtn = document.getElementById("size-btn"),
    sizeChangeDiv = document.querySelector(".size-change-div"),
    // firstFixedRadio = document.getElementById("first-fixed"),
    // secondFixedRadio = document.getElementById("second-fixed"),
    // thirdFixedRadio = document.getElementById("third-fixed"),
    // fourthFixedRadio = document.getElementById("fourth-fixed"),
    fixedSizeBtn = document.getElementById("fixedSizeBtn")

const sizeRadios = document.querySelectorAll('input[name="fixed-radio"]');

sizeBtn.onclick = () => {
    sizeChangeDiv.style.width = inputWidth.value * 5.2 + 'px'
    sizeChangeDiv.style.height = inputHeight.value * 5.2 + 'px'
} 
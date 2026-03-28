let inputWidth = document.getElementById("width"),
    inputHeight = document.getElementById("height"),
    sizeBtn = document.getElementById("fixedSizeBtn"),
    userSizeBtn = document.getElementById("size-btn"),
    sizeChangeDiv = document.querySelector(".size-change-div"),
    sizeUser = document.querySelector(".size-user"),
    fixed1 = document.getElementById("fixed1"),
    fixed2 = document.getElementById("fixed2"),
    fixed3 = document.getElementById("fixed3"),
    fixed4 = document.getElementById("fixed4"),
    sizeFixedDiv = document.querySelector(".size-fixed"),
    sumText = document.querySelector(".sumText"),
    add1 = document.querySelector(".add1"),
    add2 = document.querySelector(".add2"),
    add3 = document.querySelector(".add3");

let currentBasePrice = 0;

inputWidth.oninput = () => {
    if (inputWidth.value > 520) {
        alert("Ви ввели завеликий розмір холста, максимальний розмір 520х520")
        inputWidth.value = 0
    }
}
inputHeight.oninput = () => {
    if (inputHeight.value > 520) {
        alert("Ви ввели завеликий розмір холста, максимальний розмір 520х520")
        inputHeight.value = 0
    }
}

function calculateFullTotal() {
    let total = currentBasePrice;

    if (add1.checked) total += 35;
    if (add2.checked) total += 10;
    if (add3.checked) total += 40;

    sumText.innerText = total;
}

sizeBtn.onclick = (e) => {
    e.preventDefault();
    sizeUser.classList.toggle("hidden");
    sizeBtn.innerText = sizeUser.classList.contains("hidden") ? 'Задати розмір' : 'Сховати';
};

userSizeBtn.onclick = (e) => {
    e.preventDefault();
    let w = inputWidth.value,
        h = inputHeight.value;

    if (w > 0 && h > 0) {
        sizeChangeDiv.style.width = w + "px";
        sizeChangeDiv.style.height = h + "px";

        currentBasePrice = h * 2;
        calculateFullTotal();
    }
}

fixed1.onclick = () => {
    currentBasePrice = 60;
    sizeChangeDiv.style.width = "150px";
    sizeChangeDiv.style.height = "150px";
    calculateFullTotal();
}
fixed2.onclick = () => {
    currentBasePrice = 180;
    sizeChangeDiv.style.width = "150px";
    sizeChangeDiv.style.height = "450px";
    calculateFullTotal();
}
fixed3.onclick = () => {
    currentBasePrice = 240;
    sizeChangeDiv.style.width = "450px";
    sizeChangeDiv.style.height = "600px";
    calculateFullTotal();
}
fixed4.onclick = () => {
    currentBasePrice = 300;
    sizeChangeDiv.style.width = "450px";
    sizeChangeDiv.style.height = "750px";
    calculateFullTotal();
}


add1.onchange = calculateFullTotal;
add2.onchange = calculateFullTotal;
add3.onchange = calculateFullTotal;


const hidBlock = document.querySelector(".hid-bd")

bd.onchange = () => {
    if (hidBlock && bd.checked) {
        hidBlock.style.display = "block"
        const styleBd = hidBlock.querySelectorAll(".bd-style")
        if (styleBd) {
            styleBd.forEach(item => {
                item.addEventListener("change", function (e) {
                    if (item.checked) {
                        let bds = item.value
                        sizeChangeDiv.style.border = `5px ${bds} #000`
                    }
                })
            })
        }
        color.oninput = () => {
            sizeChangeDiv.style.borderColor = color.value
        }
    } else {
        hidBlock.style.display = "none"
        sizeChangeDiv.style.border = "none"
    }

}
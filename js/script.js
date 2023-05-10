let indexes = document.getElementById("indexes");
let imgs = document.getElementsByClassName("imgs");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let srcs = ["s1.webp", "s2.webp", "s3.webp", "s4.webp", "s5.webp", "s6.webp", "s7.webp", "s8.webp", "s9.webp"];
let index = 0;
let interval = null;
let intervalSpeed = 500;

function setImages() {
    let is = [];
    for (let i = 0; i < imgs.length; i++) { // i => 0 1 2 3

        srcIndex = (i + index) % 8;
        if (srcIndex < 0) {
            srcIndex += 8;
        }
        is.push(i + index + ' => ' + srcIndex);
        imgs[i].setAttribute('src', 'img/' + srcs[srcIndex]);
    }
    indexes.textContent = is.join(' , ');
}

prev.addEventListener('click', function () {
    index -= 1;
    setImages();
})

next.addEventListener('click', function () {
    index += 1;
    setImages();
})

next.addEventListener('mousedown', function () {
    speedUp();
})

next.addEventListener('mouseup', function () {
    clearInterval(interval);
    speedDown();
})

function speedUp() {
    console.log(intervalSpeed);
    if (intervalSpeed > 0) {
        interval = setInterval(function () {
            index += 1;
            setImages();
            intervalSpeed /= 1.2;
            clearInterval(interval);
            speedUp();
        }, intervalSpeed);
    }
}

function speedDown() {
    console.log(intervalSpeed);
    if (intervalSpeed < 500) {
        interval = setInterval(function () {
            index += 1;
            setImages();
            intervalSpeed *= 1.2;
            clearInterval(interval);
            speedDown();
        }, intervalSpeed);
    }
}

setImages();
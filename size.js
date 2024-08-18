window.addEventListener('DOMContentLoaded', calculateSize);
window.addEventListener('resize', calculateSize);

function calculateSize() {
    const htmlElement = document.documentElement;
    const width = htmlElement.clientWidth;
    const height = htmlElement.clientHeight;

    const widthLineText = document.getElementById('width-line-text');
    widthLineText.textContent = width + "px";

    const heightLineText = document.getElementById('height-line-text');
    heightLineText.textContent = height + "px";

    const sizeText = document.getElementById('size');
    sizeText.innerHTML = "<span id='width-text'>" + width + "px </span> * <span id='height-text'>" + height + "px</span>";
}
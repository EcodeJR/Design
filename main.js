var loader = document.getElementById("loader");

window.addEventListener("load", function() {
    loader.style.display = "none";
});
let open = document.getElementById('open_nav');
let close = document.getElementById('close_nav');
let list = document.getElementById('list');
open.addEventListener('click', () => {
    list.style.top = '0';
    list.style.transition = 'all .4s';
})
close.addEventListener('click', () => {
    list.style.top = '-100vh';
    list.style.transition = 'all .4s';
})
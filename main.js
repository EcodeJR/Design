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

let main_num = document.getElementById('main_num');
let main_text = document.getElementById('main_text');
let text = document.getElementById('text');
let next_num = document.getElementById('next_num');
let glass_text = document.getElementById('glass_text');
let body1 = document.getElementById('body');
let next = document.getElementById('next');
let index = 0;
let designs = [{
        main_num1: '01',
        main_text1: 'Interior',
        text1: 'Interior',
        next_num1: '02',
        glass_text1: 'Exterior',
        body0: 'url(https://source.unsplash.com/1600x900/?interior)'
    },
    {
        main_num1: '02',
        main_text1: 'Exterior',
        text1: 'Exterior',
        next_num1: '03',
        glass_text1: 'Roof',
        body0: 'url(https://source.unsplash.com/1600x900/?exterior)'
    },
    {
        main_num1: '03',
        main_text1: 'Roof',
        text1: 'Roof',
        next_num1: '04',
        glass_text1: 'Chair',
        body0: 'url(https://source.unsplash.com/1600x900/?roof)'
    },
    {
        main_num1: '04',
        main_text1: 'Chair',
        text1: 'Chair',
        next_num1: '05',
        glass_text1: 'Bed',
        body0: 'url(https://source.unsplash.com/1600x900/?chair-design)'
    },
    {
        main_num1: '05',
        main_text1: 'Bed',
        text1: 'Bed',
        next_num1: '01',
        glass_text1: 'Interior',
        body0: 'url(https://source.unsplash.com/1600x900/?bedroom-interior)'
    }
];

function loadContent(index) {
    main_num.innerHTML = designs[index].main_num1;
    main_text.innerHTML = designs[index].main_text1;
    text.innerHTML = designs[index].text1;
    next_num.innerHTML = designs[index].next_num1;
    glass_text.innerHTML = designs[index].glass_text1;
    body1.style.background = designs[index].body0;
}
loadContent(index);

//next design
function next_design() {
    if (index < designs.length - 1) {
        index += 1;
        loadContent(index);
    } else {
        index = 0;
        loadContent(index);
    }
};

next.addEventListener('click', () => {
    next_design();
})


let about = document.getElementById('about');
let aboutBtn = document.getElementById('aboutBtn');
let project = document.getElementById('project');
let projectBtn = document.getElementById('projectBtn');
let services = document.getElementById('services');
let servicesBtn = document.getElementById('servicesBtn');
let contact = document.getElementById('contact');
let contactBtn = document.getElementById('contactBtn');
//hideSection
function hideSection() {
    about.style.top = '-100vh';
    about.style.transition = 'all .4s';
    project.style.top = '-100vh';
    project.style.transition = 'all .4s';
    services.style.top = '-100vh';
    services.style.transition = 'all .4s';
    contact.style.top = '-100vh';
    contact.style.transition = 'all .4s';
}
aboutBtn.addEventListener('click', () => {
    about.style.top = '0';
    about.style.transition = 'all .4s';
    list.style.top = '-100vh';
    list.style.transition = 'all .2s';
})
projectBtn.addEventListener('click', () => {
    project.style.top = '0';
    project.style.transition = 'all .4s';
    list.style.top = '-100vh';
    list.style.transition = 'all .2s';
})
servicesBtn.addEventListener('click', () => {
    services.style.top = '0';
    services.style.transition = 'all .4s';
    list.style.top = '-100vh';
    list.style.transition = 'all .2s';
})
contactBtn.addEventListener('click', () => {
    contact.style.top = '0';
    contact.style.transition = 'all .4s';
    list.style.top = '-100vh';
    list.style.transition = 'all .2s';
})
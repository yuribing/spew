const paleFace = document.querySelector('.pale');
const spewFace = document.querySelector('.spew');


paleFace.addEventListener('click', ()=>{
    if (spewFace.classList.contains('spew')){
        spewFace.classList.add('active');
        paleFace.classList.remove('active');
    }
}
)

spewFace.addEventListener('click', ()=>{
    if (paleFace.classList.contains('pale')){
        paleFace.classList.add('active');
        spewFace.classList.remove('active');
    }
}
)

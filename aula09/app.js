
// para criar o formulário
let formulario = document.createElement("form");
document.body.appendChild(formulario);
formulario.setAttribute('method','post');
formulario.setAttribute('action','#');


let campo = document.createElement("input");
campo.setAttribute('type',"texto");
campo.setAttribute('name',"nome");

campo.disabled = true;



let btnSubmit = document.createElement("button");
btnSubmit.setAttribute('type',"texto");
btnSubmit.setAttribute('name',"nome");
btnSubmit.innerText = "OK"



formulario.appendChild(campo);
formulario.appendChild(btnSubmit);


campo.addEventListener("mouseover",() => {
    campo.disabled = false;
})


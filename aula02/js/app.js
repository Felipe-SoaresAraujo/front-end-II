let situacao = confirm("Para acessar o Sistema - pressione OK");

if(situacao){//por padrão ==true
    //redirecionando para a pág de acesso permitido
    window.location.href="acessoPermitido.html";
} else{
    window.location.href="acessoNegado.html";
}
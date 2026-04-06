document.getElementById("form-boletim").addEventListener("submit", function(event){
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let regexNome = /^[A-Za-zÀ-ÿ\s]{3,}$/;

    if(!regexNome.test(nome)){
        alert("Digite pelo menos 3 letras, sem números e sem caracteres especiais.");
        return;
    }

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3) / 3;

    let status = "";

    if(media >= 7){
        status = "Aprovado";
    }else{
        status = "Reprovado";
    }

    document.getElementById("res-nome").innerText = nome;
    document.getElementById("res-media").innerText = media.toFixed(1);
    document.getElementById("res-status").innerText = status;

    document.getElementById("resultado").classList.remove("hidden");
});
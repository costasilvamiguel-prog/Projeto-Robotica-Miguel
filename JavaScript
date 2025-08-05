document.getElementById("btnJornada").addEventListener("click", function() {
    const infoJornada = document.getElementById("infoJornada");
    infoJornada.innerHTML = "Ainda estou no início, mas tenho muito entusiasmo por todo o aprendizado que virá. Meu foco será principalmente na área de cardiologia e pediatria, áreas que sempre me fascinaram.";
});

document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    
    if (nome && email && mensagem) {
        document.getElementById("feedback").innerHTML = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`;
    } else {
        document.getElementById("feedback").innerHTML = "Por favor, preencha todos os campos.";
    }
});

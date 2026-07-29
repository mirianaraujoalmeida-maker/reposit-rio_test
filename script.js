document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Funcionalidade dos Botões de Curtir
    const botoesCurtir = document.querySelectorAll(".btn-curtir");

    botoesCurtir.forEach(botao => {
        botao.addEventListener("click", () => {
            const contadorLikes = botao.querySelector(".likes");
            let quantidadeAtual = parseInt(contadorLikes.textContent);
            contadorLikes.textContent = quantidadeAtual + 1;
        });
    });

    // 2. Funcionalidade de Adicionar Comentários
    const formComentario = document.getElementById("form-comentario");
    const listaComentarios = document.getElementById("lista-comentarios");

    formComentario.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        const nome = document.getElementById("nome").value;
        const mensagem = document.getElementById("mensagem").value;

        // Cria o elemento visual do novo comentário
        const novoComentario = document.createElement("div");
        novoComentario.classList.add("comentario-item");
        novoComentario.innerHTML = `
            <strong>${nome}</strong>
            <p>${mensagem}</p>
        `;

        // Adiciona à lista e limpa o formulário
        listaComentarios.appendChild(novoComentario);
        formComentario.reset();
    });

});
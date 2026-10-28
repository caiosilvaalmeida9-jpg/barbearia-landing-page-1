
const seletorServico = document.getElementById("servico-agendamento");
const botaoAgendamento = document.getElementById("botao-agendamento");

botaoAgendamento.addEventListener("click", function () {
    const servico = seletorServico.value;

    const mensagem = `Olá, Nobre Barber! Gostaria de agendar: ${servico}. Quais horários estão disponíveis?`;

    const telefone = "5511999999999"; // Troque pelo número real da barbearia

    const linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(linkWhatsApp, "_blank");
});

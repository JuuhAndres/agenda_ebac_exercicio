const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];

let linhas = '';


form.addEventListener('submit', function(e){
    // Tirar o reload da página depois de enviar o formulário
    e.preventDefault();
    //adicionar linhas quando o usuário for pondo as informações
    adicionarLinha();
    //atualizar quando o formulário for mandado pelo botão cadastrar
    atualizarAgenda();
})

function adicionarLinha(){
    //Input do nome
    const inputNomeAgenda = document.getElementById('nome-agenda');
    //input do número da agenda
    const inputNumeroAgenda = document.getElementById('numero-agenda');

    //Alerta caso o usuário já tenha colocado o nome do contato na agenda
    if(nomes.includes(inputNomeAgenda.value) || numeros.includes(inputNumeroAgenda.value)){
        alert(`Nome ou número já incluído na agenda, por favor, tente novamente`);

    }else{
        //pegar os valores dos inputs
        nomes.push(inputNomeAgenda.value);
        numeros.push(inputNumeroAgenda.value);
        //apresentar assim que clicar no botão as informações colocadas
        
        const corpodaAgenda = document.querySelector('tbody');
        const novaLinha = corpodaAgenda.insertRow()
        let novoNome= novaLinha.insertCell(0);
        let novoTel=novaLinha.insertCell(1);
        novoNome.textContent=inputNomeAgenda.value;
        novoTel.textContent= inputNumeroAgenda.value;
        

    }
    
    inputNomeAgenda.value='';
    inputNumeroAgenda.value='';


};

function atualizarAgenda(){
}

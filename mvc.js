//Mantém a lógica do negócio, acesso aos dados e tratamentos de erros!
class UsuarioModel{
    constructor(nome){ 
        this.nome = nome
    }
}
//Camada para visualização, camada do usuário!
class UsuarioView{
    //Exibir detalhes do modelo para o usuário
    exibirDetalhes(usuario){ 
        alert(`Nome do Usuário: ${usuario.nome}`)
    }
}
//Responsável por receber e responder as necessidades do usuário
class UsuarioController{
    constructor(model, view){
       this.model = model; 
       this.view = view;
//Recebe as requisições, atualiza dados da requisição
    }
    atualizarDetalhes(nome){
        this.model.nome = nome;
        this.view.exibirDetalhes(this.model);
    }
}
//Uso da arquitetura
const usuarioModel = new UsuarioModel("João");
const usuarioView = new UsuarioView();
const usuarioController = new UsuarioController(usuarioModel, usuarioView);

//Exibindo detalhes da requisição
usuarioController.atualizarDetalhes("Ye Roblox");
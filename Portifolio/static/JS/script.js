let inputNome = document.querySelector('#nome') //Criando uma variavel e colocando o elemento que possui o ID
let inputEmail = document.querySelector('#email')
let textareaMensagem = document.querySelector('#mensagem')
let btnEnviar = document.querySelector('#enviar')
let nomeOk = false
let emailOk = false
let msgOk = false
btnEnviar.disabled =true

//Validando o campo nome, com no minimo 3 letras no nome. Alterando a borda do input para mostrar se esta certo ou errado.

inputNome?.addEventListener('keyup', ()=>{
   if (inputNome.value.length < 3){
        inputNome.style.borderColor = 'red'
   } else {inputNome.style.borderColor = 'green'
             nomeOk=true}
             if (nomeOk && emailOk && msgOk) {
                btnEnviar.disabled = false
             } else {
                btnEnviar.disabled = true
             } 
     
  
})

//Validando o campo email, com no minimo @ e '.'  Alterando a borda do input para mostrar se esta certo ou errado.
inputEmail?.addEventListener('keyup', ()=>{
    if (inputEmail.value.indexOf("@")==-1 || inputEmail.value.indexOf(".") ==-1 ){
         inputEmail.style.borderColor = 'red'
    } else {inputEmail.style.borderColor = 'green'
             emailOk=true}   
             if (nomeOk && emailOk && msgOk) {
                btnEnviar.disabled = false
             } else {
                btnEnviar.disabled = true
             }
        
    }) 
 
    textareaMensagem.addEventListener('keyup', () => {
        if(textareaMensagem.value.length >= 10){
            textareaMensagem.style.borderColor = 'green'
                msgOk=true
        }
        else if(textareaMensagem.Value == '' || textareaMensagem.Value == null){
            textareaMensagem.style.borderColor = 'red'
            } 
            if (nomeOk && emailOk && msgOk) {
                btnEnviar.disabled = false
             } else {
                btnEnviar.disabled = true
             }
    })

    if (nomeOk && emailOk && msgOk) {
        btnEnviar.disabled = false
     } else {
        btnEnviar.disabled = true
     }
  
      
    
    form.addEventListener('submit', () => {
      let carregamento = document.querySelector('#carregamento')
      carregamento.style.display = 'flex'
      let form = document.querySelector('form')
      form.style.display = 'none'
    })

    /*--------------------------------------------------------------------------------------------------------------*/
 
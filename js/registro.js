$('document').ready( () => {

 //inicializar el form validator
 $.validate({
    modules : 'security'
  });   
   

    $('#cancelar').click( () => {
        console.log("cancelar");
        $(location).attr('href', 'http://localhost:5500/bicicletas/index.html')
    })//cancelar click

    $('#enviar').click( () => {

        let userName = $('#iptName').val();
        let userEmail = $('#iptEmail').val();
        let userPass1 = $('#iptPass1').val();
        let userPass2 = $('#iptPass2').val();

        if (userName === ""){
            alert("Indica tu nombre");
        }

        if (userEmail === ""){
            alert("Indica tu email");
        }

        if(userPass1 != userPass2){
            alert("Contrasenas no son iguales");
        } else {

            let newUser = { userName, userEmail, userPass: userPass1 };
            
            $.post('http://localhost:3000/addUser', newUser, () => {

            })//post


        }
    })//enviar click
})//ready


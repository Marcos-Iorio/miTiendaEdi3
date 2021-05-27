function movimientoLogin(){
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
}
$(document).ready(function(){
    $('#libroIcon').popover('show');
});
//popOver
function popover(){
    var libro = document.getElementById("libroIcon");
    libro.addEventListener('click',() =>{
        $('#libroIcon').popover('hide');
    });
}

function requerimientoPass(){
    $('#passwordRe').focusin(function(){
        $('#passRequire').removeClass('hidden');
        $('#passRequire').fadeIn(2000);
        
        
    })
    $('#passwordRe').focusout(function(){
        $('#passRequire').addClass('hidden');
        $('#passRequire').fadeOut(2000);
    })

}




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function validaForm()
{
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var data = document.getElementById("data");
    var horario = document.getElementById("horario");
    var unidade = document.getElementById("unidade");

    //validação de obrigatoriedade dos campos
    if (nome.value == "" ) 
    {
        alert("Campo Nome é obrigatório!");
        return false;
    }
    if (email.value == "" ) 
    {
        alert("Campo Email é obrigatório!");
        return false;
    }
    if (telefone.value == "" ) 
    {
        alert("Campo Telefone é obrigatório!");
        return false;
    }
    if (data.value == "" ) 
    {
        alert("Campo Data é obrigatório!");
        return false;
    }
    if (horario.value == "" ) 
    {
        alert("Campo Horário é obrigatório!");
        return false;
    }

    //validação de dados email e telefone
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) 
    {
        alert("Preencha corretamente seu email!");
        return false;
    }
    if(telefone.value.lenght < 11)
    {
        alert("Preencha corretamente os dados do Telefone!");
        return false;
    }
}

 
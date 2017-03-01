<?php
    include("php/PHPMailerEasy.php");
    $n = (isset($_POST["name"]))?$_POST['name']:'Edd';
    $to = (isset($_POST["email"]))?$_POST['email']:'3midro@gmail.com';
    $p = (isset($_POST["phone"]))?$_POST['phone']:'4492599033';
    $m = (isset($_POST["comments"]))?$_POST['comments']:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo';
   
    
    //email respuesta para el usuario
    $text = file_get_contents('emailTemplate/user.html');
    $text = str_replace('[NAME]', $n, $text);
    $text = str_replace('[EMAIL]', $to, $text);
    echo $text;
    $subject= "Geopanda contact";
    $send = PHPMailerEasy::Email($to, $subject, $text);
    if($send == "ok") {
      echo "Message was sent successfully";
    } else {
      echo "Can't send message";
    }

?>
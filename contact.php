<?php
    include("php/PHPMailerEasy.php");
    $uName = (isset($_POST["name"]))?$_POST['name']:'Edd';
    $uMail = (isset($_POST["email"]))?$_POST['email']:'3midro@gmail.com';
    $uPhone = (isset($_POST["phone"]))?$_POST['phone']:'4492599033';
    $uMsg = (isset($_POST["comments"]))?$_POST['comments']:'El punto de usar Lorem Ipsum es que tiene una distribucion mas o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aqui, contenido aqui. Estos textos hacen parecerlo un espanol que se puede leer. Muchos paquetes de autoedición y editores de paginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una busqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo.';
   

    $send = PHPMailerEasy::BothEmail($uName, $uMail, $uPhone, $uMsg);
    if($send == "ok") {
      echo "Message was sent successfully";
    } else {
      echo "Can't send message";
         echo $send;
    }
    exit();


    
    //email respuesta para el usuario
    $text = file_get_contents('emailTemplate/user.html');
    $text = str_replace('[NAME]', $n, $text);
    $text = str_replace('[EMAIL]', $to, $text);
    $subject= "Geopanda contact";
    $setFromA = 'contacto@geopanda.com.mx';
    $setFromB = 'Geopanda Team';
    //$reply = array ('contacto@geopanda.com.mx', 'Geopanda Team');
    $send = PHPMailerEasy::Email($to, $subject, $text, $setFromA, $setFromB);
    

    //email para el soporte tecnico
    $text = file_get_contents('emailTemplate/support.html');
    $text = str_replace('[NAME]', $n, $text);
    $text = str_replace('[EMAIL]', $to, $text);
    $text = str_replace('[PHONE]', $p, $text);
    $text = str_replace('[MESSAGE]', $m, $text);
    $subject= "Email from ".$n;
    $setFromA = $m;
    $setFromB = $n;
    $to = 'contacto@geopanda.com.mx';
    $send = PHPMailerEasy::Email($to, $subject, $text, $setFromA, $setFromB);
    if($send == "ok") {
      echo "Message was sent successfully";
    } else {
      echo "Can't send message<br>";
       
    }

?>
<?php
    $n = $_POST['name'];
    $e = $_POST['email'];
    $p = $_POST['phone'];
    $m = $_POST['comments'];
    
   require 'php/PHPMailerAutoload.php';
   $mail = new PHPMailer;

    //$mail->SMTPDebug = 3;                               // Enable verbose debug output

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.geopanda.com.mx';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'geopanda@geopanda.com.mx';                 // SMTP username
    $mail->Password = 'Eadminis1a_';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    $mail->setFrom('geopanda@geopanda.com.mx', 'Mailer');
    //$mail->addAddress('3midro@gmail.com', 'Joe User');     // Add a recipient
    $mail->addAddress($e, $n);     // Add a recipient
    //$mail->addAddress('emidro@hotmail.com');               // Name is optional
    $mail->addReplyTo('geopanda@geopanda.com.mx', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');

   // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }

?>
<?php
class PHPMailerEasy {
    public static function Email($to, $subject, $msg, $setFromA, $setFromB) {
        if (!class_exists('PHPMailer')) {
            include 'PHPMailerAutoload.php'; //URL to your PHPMailer Autoload
        }
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->SMTPDebug = false;
        $mail->Debugoutput = 'html';
        $mail->Host = "mail.geopanda.com.mx"; //Host of mail
        $mail->Port = 587; //Port of connection
        $mail->SMTPSecure = 'tls'; //Type of connection
        $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );
        $mail->SMTPAuth = true; //False if not SMTP
        $mail->Username = "contacto@geopanda.com.mx";
        $mail->Password = "rZxMg}uaU#gN";
        $mail->setFrom($setFromA, $setFromB);
        /*$mail->addReplyTo('contacto@geopanda.com.mx', 'Geopanda Team');*/
        $mail->addReplyTo($reply);
        $mail->addAddress($to);
        $mail->Subject = $subject;
        //$mail->msgHTML(utf8_decode(nl2br($msg)), dirname(__FILE__));
        $mail->msgHTML($msg);
        if (!$mail->send()) {
            return "ko";
        } else {
            return "ok";
        }
    }
    
    public static function BothEmail($uName,$uMail,$uPhone,$uMsg){
         if (!class_exists('PHPMailer')) {
            include 'PHPMailerAutoload.php'; //URL to your PHPMailer Autoload
        }
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->SMTPDebug = false;
        $mail->Debugoutput = 'html';
        $mail->Host = "mail.geopanda.com.mx"; //Host of mail
        $mail->Port = 587; //Port of connection
        $mail->SMTPSecure = 'tls'; //Type of connection
        $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );
        $mail->SMTPAuth = true; //False if not SMTP
        $mail->Username = "contacto@geopanda.com.mx";
        $mail->Password = "rZxMg}uaU#gN";
        
         $mailu = new PHPMailer;
        $mailu->isSMTP();
        $mailu->SMTPDebug = false;
        $mailu->Debugoutput = 'html';
        $mailu->Host = "mail.geopanda.com.mx"; //Host of mail
        $mailu->Port = 587; //Port of connection
        $mailu->SMTPSecure = 'tls'; //Type of connection
        $mailu->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );
        $mailu->SMTPAuth = true; //False if not SMTP
        $mailu->Username = "contacto@geopanda.com.mx";
        $mailu->Password = "rZxMg}uaU#gN";
        
        
        
        
        //mail soporte
        $mail->setFrom($uMail, $uName);
        $mail->addReplyTo($uMail, 'Dear '.$uName);
        $mail->addAddress('contacto@geopanda.com.mx');
        $mail->Subject = 'Email from '.$uName;
        $htmlEmail = file_get_contents('emailTemplate/support.html');
        $htmlEmail = str_replace('[NAME]', $uName, $htmlEmail);
        $htmlEmail = str_replace('[EMAIL]', $uMail, $htmlEmail);
        $htmlEmail = str_replace('[PHONE]', $uPhone, $htmlEmail);
        $htmlEmail = str_replace('[MESSAGE]', $uMsg, $htmlEmail);
        $mail->msgHTML($htmlEmail);
        if (!$mail->send()) {
            return "No se envio el de soporte";
        } else {
            //return "ok";
            //mail usuario
            $mailu->setFrom('contacto@geopanda.com.mx', 'Geopanda contact');
            $mailu->addReplyTo('contacto@geopanda.com.mx', 'Awsome Geopanda SUpport team');
            $mailu->addAddress($uMail);
            $mailu->Subject = 'Hi dear '.$uName;
            $htmlEmailu = file_get_contents('emailTemplate/user.html');
            $htmlEmailu = str_replace('[NAME]', $uName, $htmlEmailu);
            $htmlEmailu = str_replace('[EMAIL]', $uMail, $htmlEmailu);
            
            $mailu->msgHTML($htmlEmailu);

            if (!$mailu->send()) {
                return "No se envio el de usuario";
            } else {
                return "ok";
            }
        }
        
        
    }
}
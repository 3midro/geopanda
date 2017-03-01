<?php
class PHPMailerEasy {
    public static function Email($to, $subject, $msg) {
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
        $mail->setFrom('contacto@geopanda.com.mx', 'Geopanda');
        $mail->addReplyTo('contacto@geopanda.com.mx', 'Geopanda Team');
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
}
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phonenumber = $_POST['phonenumber'];
$message = $_POST['message'];

require "vendor/autoload.php" ;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->SMTPAuth = true ;

$mail-> Host = "";
$mail->SMTPSecure =PHPMailer::ENCRYPTION_STARTTLS;

?>
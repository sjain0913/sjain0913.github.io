<?php $name = $_POST["name"];
$email = $_POST["senderemail"];
$phone = $_POST["phone"];
$message = $_POST["message"];
$formcontent = "From: $name \n Phone: $phone \n Message: $message";
$recepient = "samjain0913@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>

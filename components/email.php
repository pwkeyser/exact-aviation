<?php

// include 'ChromePhp.php';
// ChromePhp::log('Hello console!');

$name = $_POST['name'];
$from = $_POST['email'];
$message = $_POST['message'];

$message_content = "<h1>Name: $name</h1>";
$message_content .= "<p>From: $from</p>";
$message_content .= "<p>Message: $message</p>";

$to_email = 'wouter.keyser@gmail.com';

$subject = "Mail from Exact Aviation";

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: info@credibilium.com';

mail($to_email, $subject, $message_content, implode("\r\n", $headers));

?>

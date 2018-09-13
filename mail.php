<?php

$recepient = "your@mail.ru";
$siteName = "Ajax-форма";

$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["tel"]);
$email = htmlspecialchars($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $email";
$messageforclient = "Здраствуйте $name \n Ваша заявка принята !";

$pagetitle = "Заявка с сайта ".$siteName;
$pagetitleforclient = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
mail($email, $pagetitleforclient, $messageforclient, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
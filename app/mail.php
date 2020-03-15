<?php

$recepient = "info@mail.ru"; //заменить на свой email
$sitename = "Белгородские Богатыри";

$phone = trim($_POST["phone"]);


$message = "Телефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
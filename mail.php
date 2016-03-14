<?php

$recepient = "cellmobileua@gmail.com";
$sitename = "http://cellmobile.com.ua/";

$name = trim($_POST["my-name"]);
$mobile = trim($_POST["mobile"]);
$method = trim($_POST["method"]);
$message = "Имя: $name \nТелефон: $mobile \nПозвонить на: $method";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
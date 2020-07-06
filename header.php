<?php
require_once 'functions.php';

echo <<<_HEADER_
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf8">
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' href='/HairdressingSalon/styles/styles.css' type='text/css'>
        <script src="/HairdressingSalon/redirect.js"></script>
        <script src='/HairdressingSalon/changetable.js'></script>

        <!-- <link rel='stylesheet' href='/HairdressingSalon/jquery/jquery.mobile-1.4.5.min.css'>
        <script src='/HairdressingSalon/jquery/jquery-2.2.4.min.js'></script>
        <script src='/HairdressingSalon/jquery/jquery.mobile-1.4.5.min.js'></script> -->

        <title>Vogue</title>
    </head>

    <body>
        <header>
            <nav>
                <div class="wrap">
                    <div class="left">
                        <a href="http://localhost/HairdressingSalon/index.php">Наши услуги</a>
                    </div>
                    <div class="center">
                        <a href="http://localhost/HairdressingSalon/shedule.php">Расписание</a>
                    </div>
                    <div class="right">
                        <button class="enter" onclick="redirectToEnter();">Войти</button>
                        <button class="register" onclick="redirectToRegistration();">Регистрация</button>
                    </div>
                </div>
            </nav>
        </header>
_HEADER_;
?>
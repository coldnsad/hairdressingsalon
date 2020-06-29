<?php
require_once 'functions.php';

$error = '';
if (isset($_POST['name']) &&
    isset($_POST['surname']) &&
    isset($_POST['username']) &&
    isset($_POST['password']))
{
        
        $name = sanitizeString($_POST['name']);
        $surname = sanitizeString($_POST['surname']);
        $username = sanitizeString($_POST['username']);
        $password = sanitizeString($_POST['password']);

        if ($name == '' ||
            $surname == '' ||
            $username == '' ||
            $password == '') 
            {
                $error = 'Заполните все поля';
            }
        else
        {
                $result = queryMysql("SELECT * FROM hairdressingsalon WHERE username='$username'");
            if ($result->num_rows) $error = 'Пользователь с таким логином уже существует';
            else
            {
                queryMysql("INSERT INTO users VALUES('$name', '$surname', '$username', '$password')");
                $error = 'Регистрация выполнена успешно';
            }
        }
}
    echo <<<_REGISTERFORM
        <!DOCTYPE html>
        <html>
            <head>
            <link rel='stylesheet' href='/HairdressingSalon/styles/register.css' type='text/css'>
            <script src="/HairdressingSalon/redirect.js"></script>
            <meta charset="utf8">
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            </head>
            <body>
                <div class="form">
                    <input type='button' onclick='toHome();' value='На главную'>
                    <form method='POST' action='registration.php'>
                        Имя: <input type='text' name='name'><br>
                        Фамилия: <input type='text' name='surname'><br>
                        Логин: <input type='text' name='username'><br>
                        Пароль: <input type='text' name='password'><br><br>
                        <input type="submit" value="Регистрация"><br><br>
                        <h2>$error</h2>
                    </form>
                </div>
            </body>
        </html>
    _REGISTERFORM;

    
?>
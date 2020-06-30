<?php
require_once 'functions.php';

$error = '';
if (isset($_POST['username']) &&
    isset($_POST['password']))
{        
        $username = sanitizeString($_POST['username']);
        $password = sanitizeString($_POST['password']);

        if ($username == '' ||
            $password == '') 
            {
                $error = 'Заполните все поля';
            }
        else
        {
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                $result = queryMysql("SELECT username FROM users WHERE username='$username'");
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
                        Введите логин: <input type='text' name='username'><br>
                        Введите пароль: <input type='text' name='password'><br><br>
                        <input type="submit" value="Войти"><br><br>
                    </form>
                </div>
            </body>
        </html>
    _REGISTERFORM;

    
?>
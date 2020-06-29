<?php // Example 27-1: functions.php
  $dbhost  = 'localhost';    // Unlikely to require changing
  $dbname  = 'hairdressingsalon';   // Modify these...
  $dbuser  = 'admin';   // ...variables according
  $dbpass  = 'vadya9605';   // ...to your installation

  $connection = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
  if ($connection->connect_error) die("Error with connection");

  function createTable($name, $query)
  {
    queryMysql("CREATE TABLE IF NOT EXISTS $name($query)");
    echo "Table '$name' created or already exists.<br>";
  }

  function queryMysql($query)
  {
    global $connection;
    $result = $connection->query($query);
    if (!$result) $result = false;
    return $result;
  }  

  function sanitizeString($var)
  {
    global $connection;
    $var = strip_tags($var);
    $var = htmlentities($var);
    if (get_magic_quotes_gpc())
      $var = stripslashes($var);
    return $connection->real_escape_string($var);
  }
?>

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

  function getTable()
  {
    $days = [1,2,3,4,5,6,7];
    $data = '<select  id="data-cells" onChange = "selected(event);">
                <option>Выберите услугу</option>
                <option>Услуга 1</option>
                <option>Услуга 2</option>
                <option>Услуга 3</option>
              </select>';

    $table = '<table id="shedule" class="table-shedule"><tr><td></td>';
    $time = 9;
    
    for ($i=0; $i < 7; $i++)
      {
        $table.="<td>$days[$i]</td>";        
      }

      $table.='</tr>';

    for($i = 0; $i < 12; $i++)
    {
      $table.="<tr><td>" . $time . ":00</td>";
      $time++;
      for ($j=0; $j < 7; $j++)
      {
        $table.="<td>$data</td>";
        
      }
      $table.='</tr>';
    }
    $table.='</table></html>';
    echo $table;
  }
?>

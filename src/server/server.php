<?php
function report_err($msg)
{
    $data->status = $msg;
    $data->err = true;
}

header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json; charset=UTF-8");

ignore_user_abort(true);

// get input
$id = $_GET['id'];
$q = $_GET['q'];

// create output
$data = new stdClass;
$data->status = "GO.";
$data->err = false;
$data->id = $id;
$data->answer = array();

// init sql
$servername = "localhost";
$username = "id12114678_sicher";
$password = "Titacute_";
$database = "id12114678_alpha";

// SQL Create connection
$db = new mysqli($servername, $username, $password, $database);

// SQL Check connection
if ($db->connect_error) 
{
    report_err("SQL Connection failed: " . $db->connect_error);
}


// SQL get info
$index = 0;
//$query = "SELECT id FROM Courses WHERE name = '" .$q ."'";
$query = "SELECT * FROM Courses";
if ($result = $db->query($query)) // TODO: unsanitised
{
    // fetch associative array
    while ($row = $result->fetch_assoc()) 
    {
        $data->answer[$index] = array(
            "id" => $row["id"],
            "name" => $row["name"],
            "is_public" => $row["is_public"],
            "is_inhouse" => $row["is_inhouse"],
            "date" => $row["date"],
            "duration" => $row["duration"],
            "price" => $row["price"],
            "location" => $row["location"],
            "lecturer1_name" => $row["lecturer1_name"],
            "lecturer2_name" => $row["lecturer2_name"],
            "lecturer3_name" => $row["lecturer3_name"],
            "lecturer4_name" => $row["lecturer4_name"],
            "description" => $row["description"]
        );
        $index++;
    }
    // free result set
    $result->free();
}
else
{
    report_err("SQL Message failed: " .$result);
}

// Send the data.
echo json_encode($data);

?>


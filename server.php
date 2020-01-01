
<?php

//date_default_timezone_set('Asia/Bangkok');
//echo date('Y-m-d h:i:s', time()) ." Server is GO\n";

// Prevent caching.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 01 Jan 1996 00:00:00 GMT');

// The JSON standard MIME header.
header('Content-type: application/json');

// This ID parameter is sent by our javascript client.
$id = $_GET['id'];

ignore_user_abort(true);
set_time_limit(0);

if (file_exists('internal_data.txt')) {
    $int_data = file_get_contents('internal_data.txt');
    // Add 1 to $data
    $int_data = $int_data + 1;
    // Update file
    file_put_contents('internal_data.txt', $int_data);
}
else
{
    $int_data = "err";
}

// Here's some data that we want to send via JSON.
// We'll include the $id parameter so that we
// can show that it has been passed in correctly.
// You can send whatever data you like.
$data = new \stdClass();
$data->city = "New York";
$data->internal = $int_data;
$data->id = $id;

// Send the data.
$jsonData = json_encode($data);

echo $jsonData;

?>

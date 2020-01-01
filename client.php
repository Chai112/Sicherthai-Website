<?php
error_reporting(E_ALL);

echo "<h2>TCP/IP Connection</h2>\n";

/* Get the port for the WWW service. */
$service_port = 80;

/* Get the IP address for the target host. */
$address = 127.0.0.1;

/* Create a TCP/IP socket. */
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
if ($socket === false) {
    echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
} else {
    echo "OK.\n";
}

echo "Attempting to connect to '$address' on port '$service_port'...";
$result = socket_connect($socket, $address, $service_port);
if ($result === false) {
    echo "socket_connect() failed.\nReason: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
} else {
    echo "OK.\n";
}

$in = "HEAD / HTTP/1.1\r\n";
$in .= "Host: www.example.com\r\n";
$in .= "Connection: Close\r\n\r\n";
$out = '';

echo "Sending HTTP HEAD request...";
socket_write($socket, $in, strlen($in));
echo "OK.\n";

echo "Reading response:\n\n";
while ($out = socket_read($socket, 2048)) {
    echo $out;
}

echo "Closing socket...";
socket_close($socket);
echo "OK.\n\n";
?>
add a note add a note
User Contributed Notes 3 notes
up
down
94javier,javiern at gmail dot com ¶7 years ago
You can easily extend the first example to handle any number of connections instead of jsut one

#!/usr/bin/env php
<?php
error_reporting(E_ALL);

/* Permitir al script esperar para conexiones. */
set_time_limit(0);

/* Activar el volcado de salida implícito, así veremos lo que estamo obteniendo
* mientras llega. */
ob_implicit_flush();

$address = '127.0.0.1';
$port = 10000;

if (($sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP)) === false) {
    echo "socket_create() falló: razón: " . socket_strerror(socket_last_error()) . "\n";
}

if (socket_bind($sock, $address, $port) === false) {
    echo "socket_bind() falló: razón: " . socket_strerror(socket_last_error($sock)) . "\n";
}

if (socket_listen($sock, 5) === false) {
    echo "socket_listen() falló: razón: " . socket_strerror(socket_last_error($sock)) . "\n";
}

//clients array
$clients = array();

do {
    $read = array();
    $read[] = $sock;
   
    $read = array_merge($read,$clients);
   
    // Set up a blocking call to socket_select
    if(socket_select($read,$write = NULL, $except = NULL, $tv_sec = 5) < 1)
    {
        //    SocketServer::debug("Problem blocking socket_select?");
        continue;
    }
   
    // Handle new Connections
    if (in_array($sock, $read)) {       
       
        if (($msgsock = socket_accept($sock)) === false) {
            echo "socket_accept() falló: razón: " . socket_strerror(socket_last_error($sock)) . "\n";
            break;
        }
        $clients[] = $msgsock;
        $key = array_keys($clients, $msgsock);
        /* Enviar instrucciones. */
        $msg = "\nBienvenido al Servidor De Prueba de PHP. \n" .
        "Usted es el cliente numero: {$key[0]}\n" .
        "Para salir, escriba 'quit'. Para cerrar el servidor escriba 'shutdown'.\n";
        socket_write($msgsock, $msg, strlen($msg));
       
    }
   
    // Handle Input
    foreach ($clients as $key => $client) { // for each client       
        if (in_array($client, $read)) {
            if (false === ($buf = socket_read($client, 2048, PHP_NORMAL_READ))) {
                echo "socket_read() falló: razón: " . socket_strerror(socket_last_error($client)) . "\n";
                break 2;
            }
            if (!$buf = trim($buf)) {
                continue;
            }
            if ($buf == 'quit') {
                unset($clients[$key]);
                socket_close($client);
                break;
            }
            if ($buf == 'shutdown') {
                socket_close($client);
                break 2;
            }
            $talkback = "Cliente {$key}: Usted dijo '$buf'.\n";
            socket_write($client, $talkback, strlen($talkback));
            echo "$buf\n";
        }
       
    }       
} while (true);

socket_close($sock);
?>

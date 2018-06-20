<?php
require 'vendor/autoload.php';

//print_r($_POST);

$client = new \GuzzleHttp\Client();
//$res = $client->request('GET', 'https://api.github.com/repos/guzzle/guzzle');
//echo $res->getStatusCode();
// 200
//echo $res->getHeaderLine('content-type');
// 'application/json; charset=utf8'
//echo $res->getBody();
// '{"id": 1420053, "name": "guzzle", ...}'


//variables
$apikey = getenv("ELASTICEMAIL_API_KEY");
$email = $_POST['email'];
$name = $_POST['name'];
$message = $_POST['message'];
$subject = "Contact Us Request - Sufyan.co.in";
$to = "sufyan297@gmail.com";
$from = "noreply@sufyan.co.in";
$fromName = "Sufyan.co.in";
$bodyHtml = "
	<h1> Contact Us </h1>
<br/>
<br/>
<b>Name: </b> $name<br/>
<b>Email: </b> $email<br/>
<b>Message: </b> $message<br/>
";

$endpoint = "https://api.elasticemail.com/v2/";
$url = $endpoint."email/send?apikey=".$apikey."&bodyHtml=".$bodyHtml."&from=".$from."&fromName=".$fromName."&to=".$to."&subject=".$subject;
// Send an asynchronous request.
$request = new \GuzzleHttp\Psr7\Request('GET', $url);
$promise = $client->sendAsync($request)->then(function ($response) {
    echo 'I completed! ' . $response->getBody();
});
$promise->wait();
?>

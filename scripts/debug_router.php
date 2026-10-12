<?php
$ch = curl_init('http://localhost:8080/en/');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);
curl_setopt($ch, CURLOPT_HEADER, true);
$res = curl_exec($ch);
$info = curl_getinfo($ch);
echo "HTTP code: " . $info['http_code'] . "\n";
echo "Effective URL: " . $info['url'] . "\n";
echo substr($res, 0, 500) . "\n";

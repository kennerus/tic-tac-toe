<?php
/**
 * Created by PhpStorm.
 * User: kirill
 * Date: 23.09.17
 * Time: 0:25
 */
require_once __DIR__ . '/lib/Socket.php';

$server = new \lib\Socket();

$server->run();
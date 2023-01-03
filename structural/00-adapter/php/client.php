<?php

require_once 'OracleCommands.php';

$oracle = new OracleCommands();
$oracle->insert();

$mysql = new MySQLAdapter(new MySQLCommands());
$mysql->insert();
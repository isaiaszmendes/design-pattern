<?php

class MySQLAdapter implements DbAdapter {
  private $mysql;

  public function __construct(MySQLCommands $mysql) {
    $this->mysql = $mysql;
  }

  public function insert() {
    $this->mysql->insertMySQL();
  }

  public function update() {
    $this->mysql->updateMySQL();
  }
  
  public function delete() {
    $this->mysql->deleteMySQL();
  }
}
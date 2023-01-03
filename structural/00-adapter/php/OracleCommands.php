<?php

class OracleCommands implements DbAdapter {
  public function insert(){
    echo "insert from Oracle";
  }

  public function update(){
    echo "update from Oracle";
  }

  public function delete(){
    echo "delete from Oracle";
  }

}
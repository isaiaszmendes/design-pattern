<?php

class Singleton {
  private static $instance = null;

  public static function getInstance() {
    if(self::$instance == null){
      self::$instance = new Singleton();
    }
    return self::$instance;
  }

  private function __constructor(){

  }

  private function __clone() {
    // TODO: Implement __clone() method.
  }

  private function __wakeup() {
    // TODO: Implement __wakeup() method.
  }
}

$singleton = Singleton::getInstance();
$s = Singleton::getInstance();

$singleton == $s; // true
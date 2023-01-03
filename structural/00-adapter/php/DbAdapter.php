<?php

interface DbAdapter {
  public function insert();
  public function update();
  public function delete();
}
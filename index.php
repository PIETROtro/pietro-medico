<?php

$tipo = filter_input(IMPUT_GET, 'tipo', FILTER_SANITIZE_NUMBER_INT);

if(!empty($tipo)){
    $retorna = ['status' => false, 'msg' => "<p style=color: green;>Senha gerada!</p>"];

}else{
    $retorna = ['status' => true, 'msg' => "<p style=color: #f00;>ERRO: Senha não gerada!</p>"];
}
echo json_encode($retorna);
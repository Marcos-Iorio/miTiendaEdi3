<?php   
     $checkM = false;
     $checkP = false;

     if(isset($_GET["mail"])){
         if($_GET["mail"]=="1234@gmail.com"){
             $checkM=true;
         }else{
             $checkU=false;
         }
     }
     if(isset($_GET["pass"])){
         if($_GET["pass"]=="12345"){
             $checkM=true;
         }else{
             $checkP=false;
         }
     }
     if($checkM==true && $checkP==true){
         echo "Sesion iniciada";
     }else{
         echo "Datos incorrectos";
     }
  
?>
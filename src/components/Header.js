import React, {  useState } from 'react';

const Header = () => {
  return (
    
<html lang="es">
  <head>

    <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
      <link rel="stylesheet" href="estilo/estilo.css">
      <link rel="icon" type="image/x-icon" href="img/favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Open+Sans&display=swap" rel="stylesheet">
      
    <title>Tati Cocinerita</title>
    
  </head>
<body>
<header>
	<div class="menu-header">
	<h1 class="marca">Tati Cocinerita</h1>
	<nav>
		<ul>
		{/* <?php
		$menu = array();
		$menu['Home'] = "index.php" ; 
		$menu['Quienes Somos'] = "quienessomos.php"; 
        $menu['Contacto'] = "contacto.php";
		$menu['Iniciar Sesión'] = "login/index.php";
		
	
		echo "<ul>";
		foreach ($menu as $botones=>$link){
			
			echo "<li class='lista'><a href=$link>$botones</a></li>";
		}
		?> */}
		</ul>
	
	</nav>
	</div>
</header>


  );
}

export default Header;

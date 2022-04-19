### Universidad de San Carlos de Guatemala

### Facultad de Ingeniería

### Escuela de Ciencias y Sistemas

## Proyecto 1

<div>
    <p align="center">
       <img src="images/usac.png" width="500" alt="inicio"> 
  <p>
</div>

## Curso: Redes de Computadoras 2

<hr>
<br>
<div>
    <table>
        <tr>
            <th>Nombre</th>
            <th>Carnet</th>
        </tr>
        <tr>
            <th>Juan Antonio Solares Samayoa</th>
            <th>201800496</th>
        </tr>
        <tr>
            <th>Elmer Gustavo Sánchez García</th>
            <th>201801351</th>
        </tr>
        <tr>
            <th>Cristian Alexander Gómez Guzmán</th>
            <th>201801480</th>
        </tr>
    </table>
</div>
<br>
<hr>

# **Arquitectura**
<div>
    <p align="center">
       <img src="images/arquitectura.svg" width="1500" alt="inicio"> 
  <p>
</div>


### Se creo la aplicación WEB con la biblioteca de ReactJS. Se utilizaron dos intancias EC2 y un balanceador de carga para distribuir las cargas de trabajo, una instancia EC2 con un servidor hecho nodejs, los datos son almacenados en una base de datos de MYSQL, las imagenes subidas a la aplicación son almacendas en un bucket de S3
# **Route 53**
### Direccionamiento del tráfico de Internet a los recursos del dominio Cuando un usuario abre un navegador web y escribe el nombre del dominio (ucron.tk) o el nombre de un subdominio (www.ucron.tk) en la barra de direcciones, Route 53 ayuda a conectar el navegador con nuestra aplicación web.

<div>
    <p align="center">
       <img src="images/zone.png" width="1500" alt="inicio"> 
  <p>
</div>


# **Load balancer**
### Distribuye el tráfico de red para mejorar la escalabilidad de nuestra aplicación
<div>
    <p align="center">
       <img src="images/lb.png" width="1500" alt="inicio"> 
  <p>
</div>

# **Target group**
<div>
    <p align="center">
       <img src="images/tg1.png" width="1500" alt="inicio"> 
  <p>
</div>
<div>
    <p align="center">
       <img src="images/tg1.png" width="1500" alt="inicio"> 
  <p>
</div>


# **Interfaz de la pagina web**

La interfaz gráfica de la aplicación fue desarrollada en ReactJS, la cual es una librería escrita en JavaScript de código abierto enfocada a la visualización para facilitar la creación de componentes interactivos y reutilizables para interfaces de usuario.  

Se eligió ReactJS sobre otras tecnologías por los siguientes beneficios:

1. Desarrollo Rentable.
2. Entrega más rapiuda de proyectos de aplicaciones.
3. Aprovecha Javascript.
4. Es codigo abierto.
5. Excelente rendimiento de la aplicación.
6. Permite un diseño por modulos.


# **Vista Home**

En la vista Home se muestran un Carrusel de imagenes los cuales muestan lugares turisticos de Ucron. 
<div>
    <p align="center">
       <img src="images/home.png" width="1500" alt="inicio"> 
    <p>
</div>

# **Vista Developers**

En la vista developers de muestran los datos de los desarrolladores que realizaron la aplicación.
<div>
    <p align="center">
       <img src="images/developers.png" width="1500" alt="inicio"> 
    <p>
</div>


# **Vista Administrators**

En la vista Administrators se muestran una corta biografía de personas importantes de Ucron.  
<div>
    <p align="center">
       <img src="images/administrators.png" width="1500" alt="inicio"> 
    <p>
</div>


# **Servidor**
El servidor de la aplicación fue desarrollada en Node JS, Node es un entorno en tiempo de ejecución multi plataforma, para la capa de servidor basado en el lenguaje de programación JavaScript.

Base de datos 
La base de datos que se utilizo fue MySQL, este es un sistema de gestión de base de datos relacional esta considerado como la base de datos de código abierto mas popular del mundo.

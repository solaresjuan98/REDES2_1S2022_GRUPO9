### Universidad de San Carlos de Guatemala

### Facultad de Ingeniería

### Escuela de Ciencias y Sistemas

## Proyecto 2

<div>
    <p align="center">
       <img src="resource/usac.png" width="400" alt="inicio"> 
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

## Manual tecnico

### Contenido

- [Manual tecnico](#manual-tecnico)
  - [Arquitectura](#arquitectura)
  - [VPC](#vpc)
  - [LOAD BALANCER](#load-balancer)
  - [NAT](#nat-gateways)
  - [Vista HOME](#vista-home)
  - [Vista Developers](#vista-developers)
  - [Servidor](#Servidor)
  <!-- - [Seguridad](#seguiridad) -->


### **Arquitectura**
<div>
  <p align="center">
    <img src="resource/arquitectura2.jpeg" width="1500" alt="inicio"> 
  <p>
</div>


### **VPC**

Es un servicio que permite lanzar recursos de AWS en una red virtual aislada de forma lógica que usted defina. Puede controlar todos los aspectos del entorno de red virtual, como la selección de su propio rango de direcciones IP, la creación de subredes y la configuración de tablas de enrutamiento y gateways de red. Puede utilizar tanto IPv4 como IPv6 para la mayoría de los recursos de la VPC, lo que ayuda a garantizar el acceso seguro y fácil a los recursos y las aplicaciones.

Dirección VPC A

**192.168.1.0**

**255.255.0.0**

|    **IP**    |   **Nombre**  |  **Subred** |  **Mascara**  | **Tipo** |
|:------------:|:-------------:|:-----------:|:-------------:|:--------:|
| 192.168.2.10 |     API 1     | 192.168.2.0 | 255.255.255.0 |  PRIVATE |
| 192.168.2.20 |     API 2     | 192.168.2.0 | 255.255.255.0 |  PRIVATE |
| 192.168.3.10 |    SERVER 1   | 192.168.3.0 | 255.255.255.0 |  PRIVATE |
| 192.168.3.20 |    SERVER 2   | 192.168.3.0 | 255.255.255.0 |  PRIVATE |
|              | LOAD BALANCER | 192.168.1.0 | 255.255.255.0 |  PUBLIC  |


### **Load Balancer**

Distribuye automáticamente el tráfico entrante entre varios destinos, por ejemplo, instancias EC2, contenedores y direcciones IP en una o varias zonas de disponibilidad. Monitorea el estado de los destinos registrados y enruta el tráfico solamente a destinos en buen estado. Elastic Load Balancing escala el balanceador de carga a medida que el tráfico entrante va cambiando con el tiempo. Puede escalarse automáticamente para adaptarse a la mayoría de las cargas de trabajo.

### **Nat Gateways**

Una puerta de enlace NAT es un servicio de traducción de direcciones de red (NAT). Puede utilizar una puerta de enlace NAT para que las instancias de una subred privada puedan conectarse a servicios fuera de la VPC, pero los servicios externos no pueden iniciar una conexión con esas instancias.


<!-- ### **Seguiridad** -->



# **Vista Home**

En la vista Home se muestran un Carrusel de imagenes los cuales muestan lugares turisticos de Ucron. 
<div>
    <p align="center">
       <img src="resource/home.png" width="1500" alt="inicio"> 
    <p>
</div>

# **Vista Developers**

En la vista developers de muestran los datos de los desarrolladores que realizaron la aplicación.
<div>
    <p align="center">
       <img src="resource/developers.png" width="1500" alt="inicio"> 
    <p>
</div>


# **Vista Administrators**

En la vista Administrators se muestran una corta biografía de personas importantes de Ucron.  
<div>
    <p align="center">
       <img src="resource/administrators.png" width="1500" alt="inicio"> 
    <p>
</div>


# **Servidor**
El servidor de la aplicación fue desarrollada en Node JS, Node es un entorno en tiempo de ejecución multi plataforma, para la capa de servidor basado en el lenguaje de programación JavaScript.

Base de datos 
La base de datos que se utilizo fue MySQL, este es un sistema de gestión de base de datos relacional esta considerado como la base de datos de código abierto mas popular del mundo.
# Commands

Switch Capa 3
**nota: Por defecto ya esta habilitados los puertos en modo truncal**

config t
vlan 19
name ventas
exit

vlan 29
name distribucion
exit

vlan 39
name administracion
exit

vlan 49
name servidores
exit

vlan 99
name management&native
exit

vlan 999
name blackhole
exit

VTP:
conf t
vtp domain g9
vtp password g9
vtp mode server
vtp version 2

### SWITCH S0:

TRUNCALES:

config t
int f0/7
switchport mode trunk
switchport trunk allowed vlan 1,19,29,39,49,99,999,1002-1005

config t
int range f0/1 - 6
switchport mode trunk
switchport trunk allowed vlan 1,19,29,39,49,99,999,1002-1005

VTP:
conf t
vtp domain g9
vtp password g9
vtp mode client

PORT CHANEL:
LACP:
conf t
int range f0/1 - 2
channel-protocol lacp
channel-group 1 mode active
exit

int range f0/3 - 4
channel-protocol lacp
channel-group 2 mode active
exit

int range f0/5 - 6
channel-protocol lacp
channel-group 4 mode active
exit

PAGP:
conf t
int range f#/# - # || int f#/#
channel-protocol pagp
channel-group <no> mode on <auto || desirable>
exit

### SWITCH S1:

config t
int range f0/1 - 5
switchport mode trunk
switchport trunk allowed vlan 1,19,29,39,49,99,999,1002-1005

VTP:
conf t
vtp domain g9
vtp password g9
vtp mode client

PORT CHANEL:
LACP:
conf t
int range f0/1 - 2
channel-protocol lacp
channel-group 1 mode active
exit

### SWITCH S2 - S3:

config t
int range f0/1 - 4
switchport mode trunk
switchport trunk allowed vlan 1,19,29,39,49,99,999,1002-1005

VTP:
conf t
vtp domain g9
vtp password g9
vtp mode client

PORT CHANEL S2:
LACP:
conf t
int range f0/1 - 2
channel-protocol lacp
channel-group 2 mode active
exit

int range f0/3 - 4
channel-protocol lacp
channel-group 3 mode active
exit

PORT CHANEL S3:
LACP:
conf t
int range f0/1 - 2
channel-protocol lacp
channel-group 4 mode active
exit

int range f0/3 - 4
channel-protocol lacp
channel-group 3 mode active
exit

MODO ACCESO S2
- VENTAS y DISTRIBUCIÓN

config t
interface range f0/5 - 6
switchport mode access
switchport access vlan 19
exit

interface range f0/7 - 8
switchport mode access
switchport access vlan 29
exit

MODO ACCESO S3
- VENTAS y DISTRIBUCIÓN

config t
interface f0/5
switchport mode access
switchport access vlan 19
exit

interface f0/6
switchport mode access
switchport access vlan 29
exit



### SWITCH S4 - S5:

config t
int f0/1
switchport mode trunk
switchport trunk allowed vlan 1,19,29,39,49,99,999,1002-1005

VTP:
conf t
vtp domain g9
vtp password g9
vtp mode client


MODO ACCESO S4
- ADMINISTRACIÓN y SERVIDORES 

config t
interface f0/2
switchport mode access
switchport access vlan 39
exit

interface f0/3
switchport mode access
switchport access vlan 49
exit


MODO ACCESO S5
- ADMINISTRACIÓN y SERVIDORES 

config t
interface f0/2
switchport mode access
switchport access vlan 39
exit

interface f0/3
switchport mode access
switchport access vlan 49
exit

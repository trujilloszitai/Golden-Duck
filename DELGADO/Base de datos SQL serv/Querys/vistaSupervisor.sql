create view vistaSupervisor as
SELECT tarjetas.nro_cliente, tarjetas.tipo_tarjeta, tarjetas.num_tarj, tarjetas.nom_tarj,
empleados.*
,clientes.nacionalidad,clientes.ultimaConexion,clientes.email_pers,clientes.domicilio_pers,clientes.fecha_afiliacion,clientes.fecha_nac,clientes.golden_points, 
cuentas.cbu, cuentas.alias, cuentas.id_cliente, cuentas.fechaCreacion FROM cuentas 
inner join clientes on cuentas.id_cliente = clientes.id_cliente
inner join empleados on empleados.id_usuario = clientes.nro_usuario
inner join tarjetas on tarjetas.nro_cliente = clientes.id_cliente

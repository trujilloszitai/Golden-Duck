create procedure verTransferenciasEmYpagos
@nro_cuenta int
as
begin
select transacciones.*, pagos.* from transacciones 
inner join pagos on pagos.nro_cuenta = transacciones.nro_cuenta_em
where transacciones.nro_cuenta_em = nro_cuenta
end
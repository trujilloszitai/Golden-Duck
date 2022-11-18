create procedure revisarCuentaBancariaGer
@nro_cuenta int
as 
begin
select cuentas.*, transacciones.*, pagos.*, plazos_fijos.* from cuentas 
inner join transacciones on transacciones.nro_cuenta_em = @nro_cuenta
inner join pagos on pagos.nro_cuenta = @nro_cuenta
inner join plazos_fijos on plazos_fijos.nro_cuenta = @nro_cuenta
where cuentas.nro_cuenta = @nro_cuenta
end

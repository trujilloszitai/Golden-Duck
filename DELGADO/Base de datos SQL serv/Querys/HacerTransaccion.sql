create procedure hacerTransaccion
 @nro_cuenta_emisora int,
 @nro_cuenta_receptora int, 
 @monto float
 as
declare 
 @nro_cliente_emisor int,
 @montoCuentaEm float;
 set @montoCuentaEm = (SELECT monto_disp FROM cuentas WHERE nro_cuenta = @nro_cuenta_emisora);
 set @nro_cliente_emisor = (SELECT id_cliente FROM cuentas WHERE nro_cuenta = @nro_cuenta_emisora);
 
	begin 

	begin transaction;
	if @montoCuentaEm > @monto
		begin
			INSERT INTO transacciones VALUES (@nro_cuenta_receptora, @nro_cuenta_emisora,CURRENT_TIMESTAMP, @monto, NULL, (
			SELECT num_tarj FROM tarjetas 
			WHERE nro_cliente = @nro_cliente_emisor))
			UPDATE cuentas SET monto_disp = monto_disp + @monto WHERE nro_cuenta = @nro_cuenta_receptora
			UPDATE cuentas SET monto_disp = monto_disp - @monto WHERE nro_cuenta = @nro_cuenta_emisora
		commit;
end
else
begin
	commit
end

end
go

create procedure adquirirPlazoFijo
@nro_cuenta int,
@montoIni float, 
@tipoPF nchar(20),
@cantidadDeMeses smallint
AS
declare
	@gananciaMensual float,
	@gananciaFinal float;
	set @gananciaMensual = (SELECT porcentaje_de_ganancia FROM tipos_PF WHERE id_tipo_PF = @tipoPF)/@montoIni*100
	set @gananciaFinal = @gananciaMensual * (SELECT cant_meses FROM tipos_PF WHERE id_tipo_PF = @tipoPF)
begin 
INSERT INTO plazos_fijos VALUES (@nro_cuenta, @tipoPF, @montoIni, CURRENT_TIMESTAMP, '1 año', @cantidadDeMeses, @gananciaMensual, @gananciaFinal)
end
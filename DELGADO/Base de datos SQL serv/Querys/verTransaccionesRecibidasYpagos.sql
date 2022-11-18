create procedure verTransferenciasRec
@nro_cuenta int
as
begin
select * from transacciones 
where nro_cuenta_rec = @nro_cuenta
end
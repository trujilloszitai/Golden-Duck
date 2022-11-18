create procedure verCuentas
@id_cliente int
as 
begin
select * from cuentas where id_cliente = @id_cliente
end
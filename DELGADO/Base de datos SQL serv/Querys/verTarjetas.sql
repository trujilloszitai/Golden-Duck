create procedure verTarjetas 
@id_cliente int 
as 
begin 
SELECT * from tarjetas where nro_cliente = @id_cliente
end
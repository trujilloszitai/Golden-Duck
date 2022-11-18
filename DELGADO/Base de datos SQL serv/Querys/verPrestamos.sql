create procedure verPrestamos
@id_cliente int 
as 
begin 
SELECT * FROM prestamos where id_cliente = @id_cliente
end
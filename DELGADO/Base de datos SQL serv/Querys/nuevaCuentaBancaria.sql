create procedure nuevaCuentaBancaria
@id_cliente int,
@cbu nchar(22),
@alias nchar(50),
@claveAcceso nchar(50)
as
declare 
@fechaCreacion datetime = current_timestamp
begin
 INSERT INTO cuentas VALUES (@id_cliente, 0, @cbu, @alias, @claveAcceso, @fechaCreacion, NULL, NULL)
end	
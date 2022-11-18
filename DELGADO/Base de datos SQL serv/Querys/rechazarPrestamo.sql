create procedure rechazarPrestamo
@id_ger int,
@id_prestamo int
as
begin
update prestamos set rechazado = CURRENT_TIMESTAMP, id_gerente = @id_ger where id_prestamo = @id_prestamo
end

create procedure aprobarPrestamo
@id_ger int,
@id_prestamo int
as
begin
update prestamos set aprobado = CURRENT_TIMESTAMP, id_gerente = @id_ger where id_prestamo = @id_prestamo
end

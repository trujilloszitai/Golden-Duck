create procedure verSolicitudesPrestamosGer
as
begin
select * from prestamos where aprobado is null
end
create procedure agregarSupervisores
@id_ger int,
@id_us int
as 
begin
insert into supervisores values (@id_ger, @id_us)
end
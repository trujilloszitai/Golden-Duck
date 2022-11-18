create procedure verSupervisoresBajoCargoGer
@id_ger int
as 
begin
select * from supervisores where reports_to = @id_ger
end
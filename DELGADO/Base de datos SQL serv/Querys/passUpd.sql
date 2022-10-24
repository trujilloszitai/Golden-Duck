create procedure upd_pass
@idcu int,
@passupd nvarchar(15)
as 
begin 
UPDATE passTab SET pass = HASHBYTES('sha2_256', @passupd) WHERE id_cu = @idcu
end
CREATE PROCEDURE passIns
@idcuenta int,
@contraseña nvarchar(50) 
AS
BEGIN 
INSERT INTO passTab VALUES (@idcuenta, @contraseña, NULL)
END
USE [HomebankingPass]
GO
/****** Object:  StoredProcedure [dbo].[passIns]    Script Date: 14/11/2022 09:27:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[passIns]
@idusuario int,
@contraseña nvarchar(80) 
AS
BEGIN 
INSERT INTO passTab VALUES (@idusuario, @contraseña, NULL)
END
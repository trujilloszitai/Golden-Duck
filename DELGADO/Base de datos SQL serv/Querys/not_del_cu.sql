USE [Homebanking]
GO
/****** Object:  Trigger [dbo].[not_del_cu]    Script Date: 14/11/2022 09:38:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER trigger [dbo].[not_del_cu] on [dbo].[cuentas] instead of delete
as
begin 
	print 'No se pudo eliminar el registro'
	UPDATE cuentas SET fecha_del = GETDATE() where id_cliente = (select id_cliente from deleted)
end
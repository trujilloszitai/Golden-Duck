USE [Homebanking]
GO
/****** Object:  Trigger [dbo].[not_del_clients]    Script Date: 14/11/2022 10:08:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER trigger [dbo].[not_del_clients] on [dbo].[clientes] instead of delete
as
begin 
print 'No se pueden eliminar datos de esta tabla'
UPDATE clientes set cl_del = getdate() where id_cliente = (select id_cliente from deleted)
end
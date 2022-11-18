create procedure saldoTotalDisp
@id_cliente int
as
begin
SELECT sum(monto_disp) from cuentas where id_cliente = @id_cliente
end 
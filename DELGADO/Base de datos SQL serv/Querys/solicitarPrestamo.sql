create procedure solicitarPrestamo
@id_cliente int,
@montoSolic float, 
@motivo nchar(30)
as
declare
@interesPorRetraso float = 1000,
@fechaVencimiento nchar(10) = '1 año' 
begin 
INSERT INTO prestamos VALUES (@id_cliente, @montoSolic, @motivo, NULL, @fechaVencimiento, NULL, @interesPorRetraso, NULL);
end
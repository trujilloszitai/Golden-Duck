create procedure consultarSaldoTarj
@num_tarj int
as 
begin 
select saldo from tarjetas where num_tarj = @num_tarj
end


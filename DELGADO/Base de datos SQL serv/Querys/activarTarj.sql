create procedure activarTarj
@num_tarj int
as 
begin 
update tarjetas set pausada = null
end


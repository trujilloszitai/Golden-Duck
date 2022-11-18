create procedure pausarTarj
as
begin
update tarjetas set pausada = cast(CURRENT_TIMESTAMP as date)
end
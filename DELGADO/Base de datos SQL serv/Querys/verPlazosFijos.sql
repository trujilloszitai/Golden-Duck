create procedure verPlazosFijos
@nro_cuenta int
as 
begin 
select * from plazos_fijos where nro_cuenta = @nro_cuenta
end 
declare @nacionalidad nvarchar(50);
declare @num_tel int;
declare @fechaAf date = '11/11/2022';
declare @fecha_nac date;
declare @autenticacion nchar(30);
declare @golden_points int;
declare @nro_usuario int;

set @nacionalidad = 'ARG';
set @num_tel = 1158865827
set @fecha_nac  = '11/11/1999';
set @autenticacion = '2968291';
set @golden_points = 100;
set @nro_usuario = 12592;
 

declare @cont int = 10000;
declare @cont2 int = 0;

while @cont2 <= @cont
begin 
insert into clientes values (@nacionalidad, null, @num_tel + @cont2, @fechaAf, null, null, @fecha_nac, @autenticacion+@cont2, @golden_points, @nro_usuario+@cont2, null) 
set @cont2 = @cont2 + 1;
end


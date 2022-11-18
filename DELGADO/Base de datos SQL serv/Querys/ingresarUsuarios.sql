declare @nombre nchar(50) = 'Fede';
declare @apellido nchar(50) = 'Delgado';
declare @dni int = 45419167;
declare @sexo nchar(1) = 'H';
declare @dom_laboral nchar(50) = 'Malvinas Argentinas 2405'
declare @email_laboral nchar(50) = 'boca_capo26@gmail.com'
declare @num_tel int = 1158865827;

declare @cont int = 10000;
declare @cont2 int = 0;

while @cont2 <= @cont
begin 
insert into usuarios values (@nombre, @apellido, @dni+@cont2, @sexo, @dom_laboral, @email_laboral, @num_tel+@cont2,null) 
set @cont2 = @cont2 + 1;
end


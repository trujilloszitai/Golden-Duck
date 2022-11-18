create trigger not_del_cu on cuentas instead of delete
as
begin
update cuentas set cu_del = cast(CURRENT_TIMESTAMP as date)
end
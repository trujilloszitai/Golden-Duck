create trigger notDelUs on usuarios instead of delete
as
begin
update usuarios set us_del = CURRENT_TIMESTAMP
print 'no se puede eliminar usuario'
end
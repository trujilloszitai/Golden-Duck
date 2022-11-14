CREATE TRIGGER convertToHashbyte ON passTab INSTEAD OF insert, update
AS
BEGIN 
INSERT INTO passTab(id_us,pass)
SELECT id_us, HASHBYTES('SHA2_256', pass)
FROM inserted;
END 
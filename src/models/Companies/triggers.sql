DROP PROCEDURE IF EXISTS check_cif_validity;



CREATE FUNCTION check_cif_validity (CIF TEXT) RETURNS INTEGER
BEGIN
    SET @is_valid_cif = CIF REGEXP '^[a-zA-Z][0-9]{8}$';
    if not @is_valid_cif then
        signal sqlstate '45000' set message_text = 'CIF not valid. It must start with a letter and followed by 8 digits';
    end if;
    return 1;
END

DROP TRIGGER IF EXISTS before_insert_check_cif_validity;


CREATE TRIGGER before_insert_check_cif_validity
BEFORE INSERT
ON companies FOR EACH ROW

BEGIN
   CALL check_cif_validity(NEW.CIF);
END 


DROP TRIGGER IF EXISTS before_update_check_cif_validity;

CREATE TRIGGER before_update_check_cif_validity
BEFORE UPDATE
ON companies FOR EACH ROW

BEGIN
    CALL check_cif_validity(NEW.CIF);
END 


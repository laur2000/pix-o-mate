export const DROP_CHECK_CIF_VALIDITY = `
    DROP PROCEDURE IF EXISTS check_cif_validity;
`;

export const CREATE_CHECK_CIF_VALIDITY = `
    CREATE PROCEDURE check_cif_validity (CIF TEXT)
    BEGIN
        SET @is_valid_cif = CIF REGEXP '^[a-zA-Z][0-9]{8}$';
        if not @is_valid_cif then
            signal sqlstate '45000' set message_text = 'CIF not valid. It must start with a letter and followed by 8 digits';
        end if;
    END;
`;

export const DROP_BEFORE_INSERT_CIF_TRIGGER = `
    DROP TRIGGER IF EXISTS before_insert_check_cif_validity;
`;

export const CREATE_BEFORE_INSERT_CIF_TRIGGER = `
    CREATE TRIGGER before_insert_check_cif_validity
    BEFORE INSERT
    ON companies FOR EACH ROW
    BEGIN
    CALL check_cif_validity(NEW.CIF);
    END;
`;

export const DROP_BEFORE_UPDATE_CIF_TRIGGER = `
    DROP TRIGGER IF EXISTS before_update_check_cif_validity;
`;

export const CREATE_BEFORE_UPDATE_CIF_TRIGGER = `
    CREATE TRIGGER before_update_check_cif_validity
    BEFORE UPDATE
    ON companies FOR EACH ROW
    BEGIN
        CALL check_cif_validity(NEW.CIF);
    END;
`;

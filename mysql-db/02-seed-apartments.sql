USE apartment_db;

DELIMITER $$

CREATE PROCEDURE seed_apartments()
BEGIN
  DECLARE i INT DEFAULT 1;
  WHILE i <= 100 DO
    INSERT INTO apartments (
      unit_name, unit_number, project, description, price,
      bedrooms, bathrooms, area, floor, is_available, `order`
    ) VALUES (
      CONCAT('Unit ', i),
      CONCAT('A', i),
      CONCAT('Project ', MOD(i, 5) + 1),
      CONCAT('Description for unit ', i),
      ROUND(RAND() * 1000 + 500, 2),
      FLOOR(RAND() * 4 + 1),
      FLOOR(RAND() * 3 + 1),
      ROUND(RAND() * 100 + 50, 2),
      FLOOR(RAND() * 10 + 1),
      TRUE,
      i
    );
    SET i = i + 1;
  END WHILE;
END$$

DELIMITER ;

CALL seed_apartments();
DROP PROCEDURE seed_apartments;
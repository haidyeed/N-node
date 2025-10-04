USE apartment_db;

CREATE TABLE IF NOT EXISTS apartments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  unit_name VARCHAR(255),
  unit_number VARCHAR(255),
  project VARCHAR(255),
  description TEXT,
  price DECIMAL(10,2),
  bedrooms INT,
  bathrooms INT,
  area DECIMAL(10,2),
  floor INT,
  is_available BOOLEAN DEFAULT TRUE,
  `order` INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX (unit_name),
  INDEX (unit_number),
  INDEX (project)
);
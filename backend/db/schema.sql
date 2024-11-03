CREATE TABLE forms (
  id SERIAL PRIMARY KEY,
  form_type VARCHAR(1) NOT NULL,
  name VARCHAR(100) NOT NULL,
  country_code INT NOT NULL,
  phone_number VARCHAR(20) NOT NULL
);

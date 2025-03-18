CREATE DATABASE vfex_soci;

USE vfex_soci;

-- CREATE SUMMARISED TABLE FOR EACH EQUITY
create table asun_summarised (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  fy TINYINT UNSIGNED NOT NULL,
	revenue INT NOT NULL,
	cost_of_sales INT NOT NULL,
	gross_profit INT NOT NULL,
	operating_expenses INT NOT NULL,
	operating_profit INT NOT NULL,
	non_operating_income_or_expenses INT NOT NULL,
	profit_before_interest_and_tax INT NOT NULL,
	interest_expense INT NOT NULL,
	tax_expense INT NOT NULL,
	net_income_from_continuing_operations INT NOT NULL,
	loss_from_discountinued_operations INT NOT NULL,
	net_income INT NOT NULL,
  depreciation_and_ammortisation INT NOT NULL,
  ebitda INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (fy)
);
create table axia_summarised (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  fy TINYINT UNSIGNED NOT NULL,
	revenue INT NOT NULL,
	cost_of_sales INT NOT NULL,
	gross_profit INT NOT NULL,
	operating_expenses INT NOT NULL,
	operating_profit INT NOT NULL,
	non_operating_income_or_expenses INT NOT NULL,
	profit_before_interest_and_tax INT NOT NULL,
	interest_expense INT NOT NULL,
	tax_expense INT NOT NULL,
	net_income INT NOT NULL,
  depreciation_and_ammortisation INT NOT NULL,
  ebitda INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (fy)
);
create table cmcl_summarised (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  fy TINYINT UNSIGNED NOT NULL,
	revenue INT NOT NULL,
	cost_of_sales INT NOT NULL,
	gross_profit INT NOT NULL,
	operating_expenses INT NOT NULL,
	operating_profit INT NOT NULL,
	non_operating_income_or_expenses INT NOT NULL,
	profit_before_interest_and_tax INT NOT NULL,
	interest_expense INT NOT NULL,
	tax_expense INT NOT NULL,
	net_income INT NOT NULL,
  depreciation_and_ammortisation INT NOT NULL,
  ebitda INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (fy)
);
create table edgr_summarised (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  fy TINYINT UNSIGNED NOT NULL,
	revenue INT,
	cost_of_sales INT,
	gross_profit INT,
	operating_expenses INT,
	operating_profit INT,
	non_operating_income_or_expenses INT,
	profit_before_interest_and_tax INT,
	interest_expense INT,
	tax_expense INT,
	net_income INT,
    PRIMARY KEY (id),
    UNIQUE KEY (fy)
);
create table fca_summarised (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  fy TINYINT UNSIGNED NOT NULL,
	revenue INT NOT NULL,
	operating_expenses INT NOT NULL,
	operating_profit INT NOT NULL,
	non_operating_income_or_expenses INT NOT NULL,
	profit_before_interest_and_tax INT NOT NULL,
	interest_expense INT NOT NULL,
	tax_expense INT NOT NULL,
	net_income INT NOT NULL,
  depreciation_and_ammortisation INT NOT NULL,
  ebitda INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (fy)
);
create table inn_summarised (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  fy TINYINT UNSIGNED NOT NULL,
	revenue INT NOT NULL,
	cost_of_sales INT NOT NULL,
	gross_profit INT NOT NULL,
	operating_expenses INT NOT NULL,
	operating_profit INT NOT NULL,
	non_operating_income_or_expenses INT NOT NULL,
	profit_before_interest_and_tax INT NOT NULL,
	interest_expense INT NOT NULL,
	tax_expense INT NOT NULL,
	net_income INT NOT NULL,
  depreciation_and_ammortisation INT NOT NULL,
  ebitda INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (fy)
);
create table inv_summarised (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  fy TINYINT UNSIGNED NOT NULL,
	revenue INT NOT NULL,
	operating_expenses INT NOT NULL,
	operating_profit INT NOT NULL,
	non_operating_income_or_expenses INT NOT NULL,
	profit_before_interest_and_tax INT NOT NULL,
	interest_expense INT NOT NULL,
	tax_expense INT NOT NULL,
	net_income INT NOT NULL,
  depreciation_and_ammortisation INT NOT NULL,
  ebitda INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (fy)
);
create table ned_summarised (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  fy TINYINT UNSIGNED NOT NULL,
	revenue INT,
	operating_expenses INT,
	operating_profit INT,
	non_operating_income_or_expenses INT,
	profit_before_interest_and_tax INT,
	interest_expense INT,
	tax_expense INT,
	net_income INT,
    PRIMARY KEY (id),
    UNIQUE KEY (fy)
);
create table phl_summarised (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  fy TINYINT UNSIGNED NOT NULL,
	revenue INT NOT NULL,
	cost_of_sales INT NOT NULL,
	gross_profit INT NOT NULL,
	operating_expenses INT NOT NULL,
	operating_profit INT NOT NULL,
	non_operating_income_or_expenses INT NOT NULL,
	profit_before_interest_and_tax INT NOT NULL,
	interest_expense INT NOT NULL,
	tax_expense INT NOT NULL,
	net_income_from_continuing_operations INT NOT NULL,
	loss_from_discountinued_operations INT NOT NULL,
	net_income INT NOT NULL,
  depreciation_and_ammortisation INT NOT NULL,
  ebitda INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (fy)
);
create table scil_summarised (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  fy TINYINT UNSIGNED NOT NULL,
	revenue INT NOT NULL,
	cost_of_sales INT NOT NULL,
	gross_profit INT NOT NULL,
	operating_expenses INT NOT NULL,
	operating_profit INT NOT NULL,
	non_operating_income_or_expenses INT NOT NULL,
	profit_before_interest_and_tax INT NOT NULL,
	interest_expense INT NOT NULL,
	tax_expense INT NOT NULL,
	net_income_from_continuing_operations INT NOT NULL,
	loss_from_discountinued_operations INT NOT NULL,
	net_income INT NOT NULL,
  depreciation_and_ammortisation INT NOT NULL,
  ebitda INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (fy)
);
create table sim_summarised (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  fy TINYINT UNSIGNED NOT NULL,
	revenue INT NOT NULL,
	operating_expenses INT NOT NULL,
	operating_profit INT NOT NULL,
	non_operating_income_or_expenses INT NOT NULL,
	profit_before_interest_and_tax INT NOT NULL,
	interest_expense INT NOT NULL,
	tax_expense INT NOT NULL,
	net_income_from_continuing_operations INT NOT NULL,
	loss_from_discountinued_operations INT NOT NULL,
	net_income INT NOT NULL,
  depreciation_and_ammortisation INT NOT NULL,
  ebitda INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (fy)
);
create table wphl_summarised (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  fy TINYINT UNSIGNED NOT NULL,
	revenue INT NOT NULL,
	cost_of_sales INT NOT NULL,
	gross_profit INT NOT NULL,
	operating_expenses INT NOT NULL,
	operating_profit INT NOT NULL,
	non_operating_income_or_expenses INT NOT NULL,
	profit_before_interest_and_tax INT NOT NULL,
	interest_expense INT NOT NULL,
	tax_expense INT NOT NULL,
	net_income INT NOT NULL,
  depreciation_and_ammortisation INT NOT NULL,
  ebitda INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (fy)
);
create table zimw_summarised (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  fy TINYINT UNSIGNED NOT NULL,
	revenue INT NOT NULL,
	cost_of_sales INT NOT NULL,
	gross_profit INT NOT NULL,
	operating_expenses INT NOT NULL,
	operating_profit INT NOT NULL,
	non_operating_income_or_expenses INT NOT NULL,
	profit_before_interest_and_tax INT NOT NULL,
	interest_expense INT NOT NULL,
	tax_expense INT NOT NULL,
	net_income INT NOT NULL,
  depreciation_and_ammortisation INT NOT NULL,
  ebitda INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (fy)
);


-- STORED PROCEDURES
DELIMITER //
CREATE PROCEDURE soci()
BEGIN
	SELECT id AS asun, date, fy, revenue, cost_of_sales, gross_profit, operating_expenses, operating_profit, non_operating_income_or_expenses, profit_before_interest_and_tax, interest_expense, tax_expense, net_income_from_continuing_operations, loss_from_discountinued_operations, net_income, depreciation_and_ammortisation, (profit_before_interest_and_tax + depreciation_and_ammortisation) AS ebitda FROM asun_summarised;
	SELECT id AS axia, date, fy, revenue, cost_of_sales, gross_profit, operating_expenses, operating_profit, non_operating_income_or_expenses, profit_before_interest_and_tax, interest_expense, tax_expense, net_income, depreciation_and_ammortisation, (profit_before_interest_and_tax + depreciation_and_ammortisation) AS ebitda FROM axia_summarised;
	SELECT id AS cmcl, date, fy, revenue, cost_of_sales, gross_profit, operating_expenses, operating_profit, non_operating_income_or_expenses, profit_before_interest_and_tax, interest_expense, tax_expense, net_income, depreciation_and_ammortisation, (profit_before_interest_and_tax + depreciation_and_ammortisation) AS ebitda FROM cmcl_summarised;
	SELECT id AS edgr, date, fy, revenue, cost_of_sales, gross_profit, operating_expenses, operating_profit, non_operating_income_or_expenses, profit_before_interest_and_tax, interest_expense, tax_expense, net_income, depreciation_and_ammortisation, (profit_before_interest_and_tax + depreciation_and_ammortisation) AS ebitda FROM edgr_summarised;
	SELECT id AS fca, date, fy, revenue, operating_expenses, operating_profit, non_operating_income_or_expenses, profit_before_interest_and_tax, interest_expense, tax_expense, net_income, depreciation_and_ammortisation, (profit_before_interest_and_tax + depreciation_and_ammortisation) AS ebitda FROM fca_summarised;
	SELECT id AS inn, date, fy, revenue, cost_of_sales, gross_profit, operating_expenses, operating_profit, non_operating_income_or_expenses, profit_before_interest_and_tax, interest_expense, tax_expense, net_income, depreciation_and_ammortisation, (profit_before_interest_and_tax + depreciation_and_ammortisation) AS ebitda FROM inn_summarised;
	SELECT id AS inv, date, fy, revenue, operating_expenses, operating_profit, non_operating_income_or_expenses, profit_before_interest_and_tax, interest_expense, tax_expense, net_income, depreciation_and_ammortisation, (profit_before_interest_and_tax + depreciation_and_ammortisation) AS ebitda FROM inv_summarised;
	SELECT id AS ned, date, fy, revenue, operating_expenses, operating_profit, non_operating_income_or_expenses, profit_before_interest_and_tax, interest_expense, tax_expense, net_income, depreciation_and_ammortisation, (profit_before_interest_and_tax + depreciation_and_ammortisation) AS ebitda FROM ned_summarised;
	SELECT id AS phl, date, fy, revenue, cost_of_sales, gross_profit, operating_expenses, operating_profit, non_operating_income_or_expenses, profit_before_interest_and_tax, interest_expense, tax_expense, net_income_from_continuing_operations, loss_from_discountinued_operations, net_income, depreciation_and_ammortisation, (profit_before_interest_and_tax + depreciation_and_ammortisation) AS ebitda FROM phl_summarised;
	SELECT id AS scil, date, fy, revenue, cost_of_sales, gross_profit, operating_expenses, operating_profit, non_operating_income_or_expenses, profit_before_interest_and_tax, interest_expense, tax_expense, net_income_from_continuing_operations, loss_from_discountinued_operations, net_income, depreciation_and_ammortisation, (profit_before_interest_and_tax + depreciation_and_ammortisation) AS ebitda FROM scil_summarised;
	SELECT id AS sim, date, fy, revenue, operating_expenses, operating_profit, non_operating_income_or_expenses, profit_before_interest_and_tax, interest_expense, tax_expense, net_income_from_continuing_operations, loss_from_discountinued_operations, net_income, depreciation_and_ammortisation, (profit_before_interest_and_tax + depreciation_and_ammortisation) AS ebitda FROM sim_summarised;
	SELECT id AS wphl, date, fy, revenue, cost_of_sales, gross_profit, operating_expenses, operating_profit, non_operating_income_or_expenses, profit_before_interest_and_tax, interest_expense, tax_expense, net_income, depreciation_and_ammortisation, (profit_before_interest_and_tax + depreciation_and_ammortisation) AS ebitda FROM wphl_summarised;
	SELECT id AS zimw, date, fy, revenue, cost_of_sales, gross_profit, operating_expenses, operating_profit, non_operating_income_or_expenses, profit_before_interest_and_tax, interest_expense, tax_expense, net_income, depreciation_and_ammortisation, (profit_before_interest_and_tax + depreciation_and_ammortisation) AS ebitda FROM zimw_summarised;
END //
DELIMITER ;

-- TRIGGERS

CREATE DATABASE vfex;

USE vfex;

CREATE TABLE price (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
	ASUN DECIMAL(8,4),
	AXIA DECIMAL(8,4),
	CMCL DECIMAL(8,4),
	EDGR DECIMAL(8,4),
	FCA DECIMAL(8,4),
	INN DECIMAL(8,4),
  INV DECIMAL(8,4),
	NTFD DECIMAL(8,4),
	NED DECIMAL(8,4),
	PHL DECIMAL(8,4),
	SCIL DECIMAL(8,4),
	SIM DECIMAL(8,4),
	WPHL DECIMAL(8,4),
	ZIMW DECIMAL(8,4),
  PRIMARY KEY (id),
  UNIQUE KEY (date)
);

CREATE TABLE volume (
	id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
	ASUN INT DEFAULT 0,
	AXIA INT DEFAULT 0,
	CMCL INT DEFAULT 0,
	EDGR INT DEFAULT 0,
	FCA INT DEFAULT 0,
	INN INT DEFAULT 0,
  INV INT DEFAULT 0,
	NTFD INT DEFAULT 0,
	NED INT DEFAULT 0,
	PHL INT DEFAULT 0,
	SCIL INT DEFAULT 0,
	SIM INT DEFAULT 0,
	WPHL INT DEFAULT 0,
	ZIMW INT DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY (date)
);

CREATE TABLE indices (
	id INT NOT NULL AUTO_INCREMENT,
	date DATE NOT NULL,
  all_ahare DECIMAL(8,2) DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY (date)
);

CREATE TABLE activity (
	id INT NOT NULL AUTO_INCREMENT,
	date DATE NOT NULL,
  market_cap INT DEFAULT 0,
  market_turnover DECIMAL(12,2) DEFAULT 0,
  foreign_buys DECIMAL(10,2) DEFAULT 0,
  foreign_sells DECIMAL(10,2) DEFAULT 0,
	no_of_trades INT DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY (date)
);

CREATE TABLE summary (
`id` int NOT NULL AUTO_INCREMENT,
  `ticker` varchar(4) NOT NULL,
  `fy` smallint DEFAULT NULL,
  `close` decimal(6,4) DEFAULT NULL,
  `volume` int unsigned DEFAULT NULL,
  `turnover` decimal(12,3) DEFAULT NULL,
  `volume_30_day_avg` int unsigned DEFAULT NULL,
  `market_cap` bigint unsigned DEFAULT NULL,
  `pe_ratio` float DEFAULT NULL,
  `pb_ratio` float DEFAULT NULL,
  `dividend_yield` decimal(5,3) DEFAULT NULL,
  `shares_in_issue` bigint unsigned DEFAULT NULL,
  `curr_revenue` int DEFAULT NULL,
  `prev_revenue` int DEFAULT NULL,
  `revenue_yoy` float DEFAULT NULL,
  `curr_net_income` int DEFAULT NULL,
  `prev_net_income` int DEFAULT NULL,
  `net_income_yoy` float DEFAULT NULL,
  `curr_total_assets` int DEFAULT NULL,
  `prev_total_assets` int DEFAULT NULL,
  `total_assets_yoy` float DEFAULT NULL,
  `curr_total_liabilities` int DEFAULT NULL,
  `prev_total_liabilities` int DEFAULT NULL,
  `total_liabilities_yoy` float DEFAULT NULL,
  `curr_equity` int DEFAULT NULL,
  `prev_equity` int DEFAULT NULL,
  `equity_yoy` float DEFAULT NULL,
  `curr_eps` decimal(7,5) DEFAULT NULL,
  `prev_eps` decimal(7,5) DEFAULT NULL,
  `eps_yoy` float DEFAULT NULL,
  `curr_profit_to_shareholders` int DEFAULT NULL,
  `prev_profit_to_shareholders` int DEFAULT NULL,
  `profit_to_shareholders_yoy` float DEFAULT NULL,
  `curr_avg_shares_issued` bigint DEFAULT NULL,
  `prev_avg_shares_issued` bigint DEFAULT NULL,
  `avg_shares_issued_yoy` float DEFAULT NULL,
  `curr_cf_ops` int DEFAULT NULL,
  `prev_cf_ops` int DEFAULT NULL,
  `cf_ops_yoy` float DEFAULT NULL,
  `curr_capex` int DEFAULT NULL,
  `prev_capex` int DEFAULT NULL,
  `capex_yoy` float DEFAULT NULL,
  `curr_fcf` int DEFAULT NULL,
  `prev_fcf` int DEFAULT NULL,
  `fcf_yoy` float DEFAULT NULL,
  `curr_dps` decimal(10,8) DEFAULT NULL,
  `prev_dps` decimal(10,8) DEFAULT NULL,
  `dps_yoy` float DEFAULT NULL,
  `curr_intangible_assets` int DEFAULT NULL,
  `prev_intangible_assets` int DEFAULT NULL,
  `intangible_assets_yoy` float DEFAULT NULL,
  `curr_book_value` int DEFAULT NULL,
  `prev_book_value` int DEFAULT NULL,
  `book_value_yoy` float DEFAULT NULL,
  `curr_bvps` decimal(8,5) DEFAULT NULL,
  `prev_bvps` decimal(8,5) DEFAULT NULL,
  `bvps_yoy` float DEFAULT NULL,
  `sector` set('agribusiness','financial','distribution','hospitality','manufacturing','mining','oil & gas','real estate','retail') DEFAULT NULL,
  `ceo` varchar(125) DEFAULT NULL,
  `board_size` tinyint unsigned DEFAULT NULL,
  `women_on_board` tinyint unsigned DEFAULT NULL,
  `independent_directors` tinyint unsigned DEFAULT NULL,
  `no_of_employees` smallint unsigned DEFAULT NULL,
  `founded` year DEFAULT NULL,
  `external_auditors` varchar(125) DEFAULT NULL,
  `website` varchar(100) DEFAULT NULL,
  `date_of_listing` date DEFAULT NULL,
  `year_end` varchar(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `company_description` varchar(255) DEFAULT NULL,
  `short_name` varchar(45) DEFAULT NULL,
  `long_name` varchar(90) DEFAULT NULL,
  `exchange_rate` decimal(10,6) DEFAULT NULL,
  `currency` char(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ticker_UNIQUE` (`ticker`)
);


--
-- TRIGGERS
delimiter //
CREATE TRIGGER update_summary_price_metrics_on_insert AFTER INSERT ON price
FOR EACH ROW
BEGIN
  UPDATE summary SET close = NEW.ASUN, pe_ratio = (NEW.ASUN / curr_eps), pb_ratio = (NEW.ASUN / curr_bvps), market_cap = shares_in_issue * NEW.ASUN, dividend_yield = (curr_dps / NEW.ASUN), turnover = NEW.ASUN * volume where ticker='ASUN';
  UPDATE summary SET close = NEW.AXIA, pe_ratio = (NEW.AXIA / curr_eps), pb_ratio = (NEW.AXIA / curr_bvps), market_cap = shares_in_issue * NEW.AXIA, dividend_yield = (curr_dps / NEW.AXIA), turnover = NEW.AXIA * volume where ticker='AXIA';
  UPDATE summary SET close = NEW.CMCL, pe_ratio = (NEW.CMCL / curr_eps), pb_ratio = (NEW.CMCL / curr_bvps), market_cap = shares_in_issue * NEW.CMCL, dividend_yield = (curr_dps / NEW.CMCL), turnover = NEW.CMCL * volume where ticker='CMCL';
  UPDATE summary SET close = NEW.EDGR, pe_ratio = (NEW.EDGR / curr_eps), pb_ratio = (NEW.EDGR / curr_bvps), market_cap = shares_in_issue * NEW.EDGR, dividend_yield = (curr_dps / NEW.EDGR), turnover = NEW.EDGR * volume where ticker='EDGR';
  UPDATE summary SET close = NEW.FCA, pe_ratio = (NEW.FCA / curr_eps), pb_ratio = (NEW.FCA / curr_bvps), market_cap = shares_in_issue * NEW.FCA, dividend_yield = (curr_dps / NEW.FCA), turnover = NEW.FCA * volume where ticker='FCA';
  UPDATE summary SET close = NEW.INN, pe_ratio = (NEW.INN / curr_eps), pb_ratio = (NEW.INN / curr_bvps), market_cap = shares_in_issue * NEW.INN, dividend_yield = (curr_dps / NEW.INN), turnover = NEW.INN * volume where ticker='INN';
  UPDATE summary SET close = NEW.INV, pe_ratio = (NEW.INV / curr_eps), pb_ratio = (NEW.INV / curr_bvps), market_cap = shares_in_issue * NEW.INV, dividend_yield = (curr_dps / NEW.INV), turnover = NEW.INV * volume where ticker='INV';
  UPDATE summary SET close = NEW.NTFD, pe_ratio = (NEW.NTFD / curr_eps), pb_ratio = (NEW.NTFD / curr_bvps), market_cap = shares_in_issue * NEW.NTFD, dividend_yield = (curr_dps / NEW.NTFD), turnover = NEW.NTFD * volume where ticker='NTFD';
  UPDATE summary SET close = NEW.NED, pe_ratio = (NEW.NED / curr_eps), pb_ratio = (NEW.NED / curr_bvps), market_cap = shares_in_issue * NEW.NED, dividend_yield = (curr_dps / NEW.NED), turnover = NEW.NED * volume where ticker='NED';
  UPDATE summary SET close = NEW.PHL, pe_ratio = (NEW.PHL / curr_eps), pb_ratio = (NEW.PHL / curr_bvps), market_cap = shares_in_issue * NEW.PHL, dividend_yield = (curr_dps / NEW.PHL), turnover = NEW.PHL * volume where ticker='PHL';
  UPDATE summary SET close = NEW.SCIL, pe_ratio = (NEW.SCIL / curr_eps), pb_ratio = (NEW.SCIL / curr_bvps), market_cap = shares_in_issue * NEW.SCIL, dividend_yield = (curr_dps / NEW.SCIL), turnover = NEW.SCIL * volume where ticker='SCIL';
  UPDATE summary SET close = NEW.SIM, pe_ratio = (NEW.SIM / curr_eps), pb_ratio = (NEW.SIM / curr_bvps), market_cap = shares_in_issue * NEW.SIM, dividend_yield = (curr_dps / NEW.SIM), turnover = NEW.SIM * volume where ticker='SIM';
  UPDATE summary SET close = NEW.WPHL, pe_ratio = (NEW.WPHL / curr_eps), pb_ratio = (NEW.WPHL / curr_bvps), market_cap = shares_in_issue * NEW.WPHL, dividend_yield = (curr_dps / NEW.WPHL), turnover = NEW.WPHL * volume where ticker='WPHL';
  UPDATE summary SET close = NEW.ZIMW, pe_ratio = (NEW.ZIMW / curr_eps), pb_ratio = (NEW.ZIMW / curr_bvps), market_cap = shares_in_issue * NEW.ZIMW, dividend_yield = (curr_dps / NEW.ZIMW), turnover = NEW.ZIMW * volume where ticker='ZIMW';
END //
delimiter ;

delimiter //
CREATE TRIGGER update_summary_price_metrics_on_update AFTER UPDATE ON price
FOR EACH ROW
BEGIN
  UPDATE summary SET close = NEW.ASUN, pe_ratio = (NEW.ASUN / curr_eps), pb_ratio = (NEW.ASUN / curr_bvps), market_cap = shares_in_issue * NEW.ASUN, dividend_yield = (curr_dps / NEW.ASUN), turnover = NEW.ASUN * volume where ticker='ASUN';
  UPDATE summary SET close = NEW.AXIA, pe_ratio = (NEW.AXIA / curr_eps), pb_ratio = (NEW.AXIA / curr_bvps), market_cap = shares_in_issue * NEW.AXIA, dividend_yield = (curr_dps / NEW.AXIA), turnover = NEW.AXIA * volume where ticker='AXIA';
  UPDATE summary SET close = NEW.CMCL, pe_ratio = (NEW.CMCL / curr_eps), pb_ratio = (NEW.CMCL / curr_bvps), market_cap = shares_in_issue * NEW.CMCL, dividend_yield = (curr_dps / NEW.CMCL), turnover = NEW.CMCL * volume where ticker='CMCL';
  UPDATE summary SET close = NEW.EDGR, pe_ratio = (NEW.EDGR / curr_eps), pb_ratio = (NEW.EDGR / curr_bvps), market_cap = shares_in_issue * NEW.EDGR, dividend_yield = (curr_dps / NEW.EDGR), turnover = NEW.EDGR * volume where ticker='EDGR';
  UPDATE summary SET close = NEW.FCA, pe_ratio = (NEW.FCA / curr_eps), pb_ratio = (NEW.FCA / curr_bvps), market_cap = shares_in_issue * NEW.FCA, dividend_yield = (curr_dps / NEW.FCA), turnover = NEW.FCA * volume where ticker='FCA';
  UPDATE summary SET close = NEW.INN, pe_ratio = (NEW.INN / curr_eps), pb_ratio = (NEW.INN / curr_bvps), market_cap = shares_in_issue * NEW.INN, dividend_yield = (curr_dps / NEW.INN), turnover = NEW.INN * volume where ticker='INN';
  UPDATE summary SET close = NEW.INV, pe_ratio = (NEW.INV / curr_eps), pb_ratio = (NEW.INV / curr_bvps), market_cap = shares_in_issue * NEW.INV, dividend_yield = (curr_dps / NEW.INV), turnover = NEW.INV * volume where ticker='INV';
  UPDATE summary SET close = NEW.NTFD, pe_ratio = (NEW.NTFD / curr_eps), pb_ratio = (NEW.NTFD / curr_bvps), market_cap = shares_in_issue * NEW.NTFD, dividend_yield = (curr_dps / NEW.NTFD), turnover = NEW.NTFD * volume where ticker='NTFD';
  UPDATE summary SET close = NEW.NED, pe_ratio = (NEW.NED / curr_eps), pb_ratio = (NEW.NED / curr_bvps), market_cap = shares_in_issue * NEW.NED, dividend_yield = (curr_dps / NEW.NED), turnover = NEW.NED * volume where ticker='NED';
  UPDATE summary SET close = NEW.PHL, pe_ratio = (NEW.PHL / curr_eps), pb_ratio = (NEW.PHL / curr_bvps), market_cap = shares_in_issue * NEW.PHL, dividend_yield = (curr_dps / NEW.PHL), turnover = NEW.PHL * volume where ticker='PHL';
  UPDATE summary SET close = NEW.SCIL, pe_ratio = (NEW.SCIL / curr_eps), pb_ratio = (NEW.SCIL / curr_bvps), market_cap = shares_in_issue * NEW.SCIL, dividend_yield = (curr_dps / NEW.SCIL), turnover = NEW.SCIL * volume where ticker='SCIL';
  UPDATE summary SET close = NEW.SIM, pe_ratio = (NEW.SIM / curr_eps), pb_ratio = (NEW.SIM / curr_bvps), market_cap = shares_in_issue * NEW.SIM, dividend_yield = (curr_dps / NEW.SIM), turnover = NEW.SIM * volume where ticker='SIM';
  UPDATE summary SET close = NEW.WPHL, pe_ratio = (NEW.WPHL / curr_eps), pb_ratio = (NEW.WPHL / curr_bvps), market_cap = shares_in_issue * NEW.WPHL, dividend_yield = (curr_dps / NEW.WPHL), turnover = NEW.WPHL * volume where ticker='WPHL';
  UPDATE summary SET close = NEW.ZIMW, pe_ratio = (NEW.ZIMW / curr_eps), pb_ratio = (NEW.ZIMW / curr_bvps), market_cap = shares_in_issue * NEW.ZIMW, dividend_yield = (curr_dps / NEW.ZIMW), turnover = NEW.ZIMW * volume where ticker='ZIMW';
END //
delimiter ;

delimiter //
CREATE TRIGGER update_30_day_volume_avg_on_insert AFTER INSERT ON volume
FOR EACH ROW
BEGIN
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT ASUN FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(ASUN) FROM cte), volume = NEW.ASUN, turnover = NEW.ASUN * close where ticker='ASUN';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT AXIA FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(AXIA) FROM cte), volume = NEW.AXIA, turnover = NEW.AXIA * close where ticker='AXIA';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT CMCL FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(CMCL) FROM cte), volume = NEW.CMCL, turnover = NEW.CMCL * close where ticker='CMCL';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT EDGR FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(EDGR) FROM cte), volume = NEW.EDGR, turnover = NEW.EDGR * close where ticker='EDGR';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT FCA FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(FCA) FROM cte), volume = NEW.FCA, turnover = NEW.FCA * close where ticker='FCA';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT INN FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(INN) FROM cte), volume = NEW.INN, turnover = NEW.INN * close where ticker='INN';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT INV FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(INV) FROM cte), volume = NEW.INV, turnover = NEW.INV * close where ticker='INV';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT NTFD FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(NTFD) FROM cte), volume = NEW.NTFD, turnover = NEW.NTFD * close where ticker='NTFD';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT NED FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(NED) FROM cte), volume = NEW.NED, turnover = NEW.NED * close where ticker='NED';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT PHL FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(PHL) FROM cte ), volume = NEW.PHL, turnover = NEW.PHL * close where ticker='PHL';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT SCIL FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(SCIL) FROM cte), volume = NEW.SCIL, turnover = NEW.SCIL * close where ticker='SCIL';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT SIM FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(SIM) FROM cte), volume = NEW.SIM, turnover = NEW.SIM * close where ticker='SIM';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT WPHL FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(WPHL) FROM cte), volume = NEW.WPHL, turnover = NEW.WPHL * close where ticker='WPHL';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT ZIMW FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(ZIMW) FROM cte), volume = NEW.ZIMW, turnover = NEW.ZIMW * close where ticker='ZIMW';
  UPDATE summary SET volume = NEW.ASUN, turnover = NEW.ASUN * close where ticker='ASUN';
  UPDATE summary SET volume = NEW.AXIA, turnover = NEW.AXIA * close where ticker='AXIA';
  UPDATE summary SET volume = NEW.CMCL, turnover = NEW.CMCL * close where ticker='CMCL';
  UPDATE summary SET volume = NEW.EDGR, turnover = NEW.EDGR * close where ticker='EDGR';
  UPDATE summary SET volume = NEW.FCA, turnover = NEW.FCA * close where ticker='FCA';
  UPDATE summary SET volume = NEW.INN, turnover = NEW.INN * close where ticker='INN';
  UPDATE summary SET volume = NEW.INV, turnover = NEW.INV * close where ticker='INV';
  UPDATE summary SET volume = NEW.NTFD, turnover = NEW.NTFD * close where ticker='NTFD';
  UPDATE summary SET volume = NEW.NED, turnover = NEW.NED * close where ticker='NED';
  UPDATE summary SET volume = NEW.PHL, turnover = NEW.PHL * close where ticker='PHL';
  UPDATE summary SET volume = NEW.SCIL, turnover = NEW.SCIL * close where ticker='SCIL';
  UPDATE summary SET volume = NEW.SIM, turnover = NEW.SIM * close where ticker='SIM';
  UPDATE summary SET volume = NEW.WPHL, turnover = NEW.WPHL * close where ticker='WPHL';
  UPDATE summary SET volume = NEW.ZIMW, turnover = NEW.ZIMW * close where ticker='ZIMW';
  END //

CREATE TRIGGER update_30_day_volume_avg_on_update AFTER UPDATE ON volume
FOR EACH ROW
BEGIN
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT ASUN FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(ASUN) FROM cte), volume = NEW.ASUN, turnover = NEW.ASUN * close where ticker='ASUN';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT AXIA FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(AXIA) FROM cte), volume = NEW.AXIA, turnover = NEW.AXIA * close where ticker='AXIA';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT CMCL FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(CMCL) FROM cte), volume = NEW.CMCL, turnover = NEW.CMCL * close where ticker='CMCL';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT EDGR FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(EDGR) FROM cte), volume = NEW.EDGR, turnover = NEW.EDGR * close where ticker='EDGR';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT FCA FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(FCA) FROM cte), volume = NEW.FCA, turnover = NEW.FCA * close where ticker='FCA';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT INN FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(INN) FROM cte), volume = NEW.INN, turnover = NEW.INN * close where ticker='INN';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT INV FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(INV) FROM cte), volume = NEW.INV, turnover = NEW.INV * close where ticker='INV';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT NTFD FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(NTFD) FROM cte), volume = NEW.NTFD, turnover = NEW.NTFD * close where ticker='NTFD';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT NED FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(NED) FROM cte), volume = NEW.NED, turnover = NEW.NED * close where ticker='NED';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT PHL FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(PHL) FROM cte ), volume = NEW.PHL, turnover = NEW.PHL * close where ticker='PHL';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT SCIL FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(SCIL) FROM cte), volume = NEW.SCIL, turnover = NEW.SCIL * close where ticker='SCIL';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT SIM FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(SIM) FROM cte), volume = NEW.SIM, turnover = NEW.SIM * close where ticker='SIM';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT WPHL FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(WPHL) FROM cte), volume = NEW.WPHL, turnover = NEW.WPHL * close where ticker='WPHL';
  UPDATE summary SET volume_30_day_avg = (WITH cte AS (SELECT ZIMW FROM volume ORDER BY id DESC LIMIT 30) SELECT AVG(ZIMW) FROM cte), volume = NEW.ZIMW, turnover = NEW.ZIMW * close where ticker='ZIMW';
  UPDATE summary SET volume = NEW.ASUN, turnover = NEW.ASUN * close where ticker='ASUN';
  UPDATE summary SET volume = NEW.AXIA, turnover = NEW.AXIA * close where ticker='AXIA';
  UPDATE summary SET volume = NEW.CMCL, turnover = NEW.CMCL * close where ticker='CMCL';
  UPDATE summary SET volume = NEW.EDGR, turnover = NEW.EDGR * close where ticker='EDGR';
  UPDATE summary SET volume = NEW.FCA, turnover = NEW.FCA * close where ticker='FCA';
  UPDATE summary SET volume = NEW.INN, turnover = NEW.INN * close where ticker='INN';
  UPDATE summary SET volume = NEW.INV, turnover = NEW.INV * close where ticker='INV';
  UPDATE summary SET volume = NEW.NTFD, turnover = NEW.NTFD * close where ticker='NTFD';
  UPDATE summary SET volume = NEW.NED, turnover = NEW.NED * close where ticker='NED';
  UPDATE summary SET volume = NEW.PHL, turnover = NEW.PHL * close where ticker='PHL';
  UPDATE summary SET volume = NEW.SCIL, turnover = NEW.SCIL * close where ticker='SCIL';
  UPDATE summary SET volume = NEW.SIM, turnover = NEW.SIM * close where ticker='SIM';
  UPDATE summary SET volume = NEW.WPHL, turnover = NEW.WPHL * close where ticker='WPHL';
  UPDATE summary SET volume = NEW.ZIMW, turnover = NEW.ZIMW * close where ticker='ZIMW';
END //
delimiter ;

delimiter //
CREATE TRIGGER calculate_financial_metrics_on_insert BEFORE INSERT ON summary
FOR EACH ROW
BEGIN
  SET NEW.revenue_yoy = (NEW.curr_revenue - NEW.prev_revenue) / NEW.prev_revenue;
  SET NEW.net_income_yoy = (NEW.curr_net_income - NEW.prev_net_income) / NEW.prev_net_income;
  SET NEW.total_assets_yoy = (NEW.curr_total_assets - NEW.prev_total_assets) / NEW.prev_total_assets;
  SET NEW.total_liabilities_yoy = (NEW.curr_total_liabilities - NEW.prev_total_liabilities) / NEW.prev_total_liabilities;
  SET NEW.curr_equity = NEW.curr_total_assets - NEW.curr_total_liabilities;
  SET NEW.prev_equity = NEW.prev_total_assets - NEW.prev_total_liabilities;
  SET NEW.equity_yoy = (NEW.curr_equity - NEW.prev_equity) / NEW.prev_equity;
  SET NEW.eps_yoy = (NEW.curr_eps - NEW.prev_eps) / NEW.prev_eps;
  SET NEW.profit_to_shareholders_yoy = (NEW.curr_profit_to_shareholders - NEW.prev_profit_to_shareholders) / NEW.prev_profit_to_shareholders;
  SET NEW.avg_shares_issued_yoy = (NEW.curr_avg_shares_issued - NEW.prev_avg_shares_issued) / NEW.prev_avg_shares_issued;
  SET NEW.cf_ops_yoy = (NEW.curr_cf_ops - NEW.prev_cf_ops) / NEW.prev_cf_ops;
  SET NEW.capex_yoy = (NEW.curr_capex - NEW.prev_capex) / NEW.prev_capex;
  SET NEW.curr_fcf = (NEW.curr_cf_ops - NEW.curr_capex);
  SET NEW.prev_fcf = (NEW.prev_cf_ops - NEW.prev_capex);
  SET NEW.fcf_yoy = (NEW.curr_fcf - NEW.prev_fcf) / NEW.prev_fcf;
  SET NEW.intangible_assets_yoy = (NEW.curr_intangible_assets - NEW.prev_intangible_assets) / NULLIF(NEW.prev_intangible_assets,0);
  SET NEW.dps_yoy = (NEW.curr_dps - NEW.prev_dps) / NULLIF(NEW.prev_dps, 0);
  SET NEW.intangible_assets_yoy = (NEW.curr_intangible_assets - NEW.prev_intangible_assets) / NULLIF(NEW.prev_intangible_assets,0);
  SET NEW.curr_book_value = NEW.curr_equity - NEW.curr_intangible_assets;
  SET NEW.prev_book_value = NEW.prev_equity - NEW.prev_intangible_assets;
  SET NEW.book_value_yoy = (NEW.curr_book_value - NEW.prev_book_value) / NEW.prev_book_value;
  SET NEW.curr_bvps = NEW.curr_book_value / NEW.curr_avg_shares_issued;
  SET NEW.prev_bvps = NEW.prev_book_value / NEW.prev_avg_shares_issued;
  SET NEW.bvps_yoy = (NEW.curr_bvps - NEW.prev_bvps) / NEW.curr_bvps;
END //
delimiter ;

delimiter //
CREATE TRIGGER calculate_financial_metrics_on_update BEFORE UPDATE ON summary
FOR EACH ROW
BEGIN
  SET NEW.revenue_yoy = (NEW.curr_revenue - NEW.prev_revenue) / NEW.prev_revenue;
  SET NEW.net_income_yoy = (NEW.curr_net_income - NEW.prev_net_income) / NEW.prev_net_income;
  SET NEW.total_assets_yoy = (NEW.curr_total_assets - NEW.prev_total_assets) / NEW.prev_total_assets;
  SET NEW.total_liabilities_yoy = (NEW.curr_total_liabilities - NEW.prev_total_liabilities) / NEW.prev_total_liabilities;
  SET NEW.curr_equity = NEW.curr_total_assets - NEW.curr_total_liabilities;
  SET NEW.prev_equity = NEW.prev_total_assets - NEW.prev_total_liabilities;
  SET NEW.equity_yoy = (NEW.curr_equity - NEW.prev_equity) / NEW.prev_equity;
  SET NEW.eps_yoy = (NEW.curr_eps - NEW.prev_eps) / NEW.prev_eps;
  SET NEW.profit_to_shareholders_yoy = (NEW.curr_profit_to_shareholders - NEW.prev_profit_to_shareholders) / NEW.prev_profit_to_shareholders;
  SET NEW.avg_shares_issued_yoy = (NEW.curr_avg_shares_issued - NEW.prev_avg_shares_issued) / NEW.prev_avg_shares_issued;
  SET NEW.cf_ops_yoy = (NEW.curr_cf_ops - NEW.prev_cf_ops) / NEW.prev_cf_ops;
  SET NEW.capex_yoy = (NEW.curr_capex - NEW.prev_capex) / NEW.prev_capex;
  SET NEW.curr_fcf = (NEW.curr_cf_ops - NEW.curr_capex);
  SET NEW.prev_fcf = (NEW.prev_cf_ops - NEW.prev_capex);
  SET NEW.fcf_yoy = (NEW.curr_fcf - NEW.prev_fcf) / NEW.prev_fcf;
  SET NEW.intangible_assets_yoy = (NEW.curr_intangible_assets - NEW.prev_intangible_assets) / NULLIF(NEW.prev_intangible_assets,0);
  SET NEW.dps_yoy = (NEW.curr_dps - NEW.prev_dps) / NULLIF(NEW.prev_dps, 0);
  SET NEW.intangible_assets_yoy = (NEW.curr_intangible_assets - NEW.prev_intangible_assets) / NULLIF(NEW.prev_intangible_assets,0);
  SET NEW.curr_book_value = NEW.curr_equity - NEW.curr_intangible_assets;
  SET NEW.prev_book_value = NEW.prev_equity - NEW.prev_intangible_assets;
  SET NEW.book_value_yoy = (NEW.curr_book_value - NEW.prev_book_value) / NEW.prev_book_value;
  SET NEW.curr_bvps = NEW.curr_book_value / NEW.curr_avg_shares_issued;
  SET NEW.prev_bvps = NEW.prev_book_value / NEW.prev_avg_shares_issued;
  SET NEW.bvps_yoy = (NEW.curr_bvps - NEW.prev_bvps) / NEW.curr_bvps;
END //
delimiter ;

--
-- STORED PROCEDURES
delimiter //
CREATE PROCEDURE eod()
BEGIN
  SELECT ticker, CONCAT('$',close) AS price, FORMAT(volume,0) AS volume, CONCAT('$',FORMAT(turnover,1)) AS turnover, CONCAT('$',FORMAT(market_cap,0)) AS 'market cap', ROUND(pe_ratio,1) AS 'p/e ratio', ROUND(pb_ratio,1) AS 'p/b ratio',FORMAT(volume_30_day_avg,0) AS '30 day vol avg' FROM summary
  UNION
  SELECT '','','','','','','',''
  UNION
  SELECT 'SUM', NULL, FORMAT(SUM(volume),0), CONCAT('$',FORMAT(SUM(turnover),0)), CONCAT('$',FORMAT(SUM(market_cap),0)), NULL, NULL, NULL FROM summary
  UNION
  SELECT 'AVERAGE', NULL, FORMAT(AVG(volume),0), CONCAT('$',FORMAT(AVG(turnover),0)), CONCAT('$',FORMAT(AVG(market_cap),0)), ROUND(AVG(pe_ratio),1), ROUND(AVG(pb_ratio),1),FORMAT(AVG(volume_30_day_avg),0) FROM summary
  ;
END //
delimiter ;

delimiter //
CREATE PROCEDURE p5()
BEGIN
  SELECT * FROM price ORDER BY id DESC LIMIT 5;
END //
delimiter ;

delimiter //
CREATE PROCEDURE p50()
BEGIN
  SELECT * FROM price ORDER BY id DESC LIMIT 50;
END //
delimiter ;

delimiter //
CREATE PROCEDURE v5()
BEGIN
  SELECT * FROM volume ORDER BY id DESC LIMIT 5;
END //
delimiter ;

delimiter //
CREATE PROCEDURE v50()
BEGIN
  SELECT * FROM volume ORDER BY id DESC LIMIT 50;
END //
delimiter ;

delimiter //
CREATE PROCEDURE  close()
BEGIN
  WITH price_change AS (
      SELECT 
        date, 
        ASUN AS ASUN_c, LEAD(ASUN) OVER (ORDER BY id DESC ) AS ASUN_p,
        AXIA AS AXIA_c, LEAD(AXIA) OVER (ORDER BY id DESC ) AS AXIA_p,
        CMCL AS CMCL_c, LEAD(CMCL) OVER (ORDER BY id DESC ) AS CMCL_p,
        EDGR AS EDGR_c, LEAD(EDGR) OVER (ORDER BY id DESC ) AS EDGR_p,
        FCA AS FCA_c, LEAD(FCA) OVER (ORDER BY id DESC ) AS FCA_p,
        INN AS INN_c, LEAD(INN) OVER (ORDER BY id DESC ) AS INN_p,
        INV AS INV_c, LEAD(INV) OVER (ORDER BY id DESC ) AS INV_p,
        NTFD AS NTFD_c, LEAD(NTFD) OVER (ORDER BY id DESC ) AS NTFD_p,
        NED AS NED_c, LEAD(NED) OVER (ORDER BY id DESC ) AS NED_p,
        PHL AS PHL_c, LEAD(PHL) OVER (ORDER BY id DESC ) AS PHL_p,
        SCIL AS SCIL_c, LEAD(SCIL) OVER (ORDER BY id DESC ) AS SCIL_p,
        SIM AS SIM_c, LEAD(SIM) OVER (ORDER BY id DESC ) AS SIM_p,
        WPHL AS WPHL_c, LEAD(WPHL) OVER (ORDER BY id DESC ) AS WPHL_p,
        ZIMW AS ZIMW_c, LEAD(ZIMW) OVER (ORDER BY id DESC ) AS ZIMW_p
      FROM price
    ),
    vol_change AS (
      SELECT 
        date,
        ASUN AS ASUN_c, LEAD(ASUN) OVER (ORDER BY id DESC ) AS ASUN_p,
        AXIA AS AXIA_c, LEAD(AXIA) OVER (ORDER BY id DESC ) AS AXIA_p,
        CMCL AS CMCL_c, LEAD(CMCL) OVER (ORDER BY id DESC ) AS CMCL_p,
        EDGR AS EDGR_c, LEAD(EDGR) OVER (ORDER BY id DESC ) AS EDGR_p,
        FCA AS FCA_c, LEAD(FCA) OVER (ORDER BY id DESC ) AS FCA_p,
        INN AS INN_c, LEAD(INN) OVER (ORDER BY id DESC ) AS INN_p,
        INV AS INV_c, LEAD(INV) OVER (ORDER BY id DESC ) AS INV_p,
        NTFD AS NTFD_c, LEAD(NTFD) OVER (ORDER BY id DESC ) AS NTFD_p,
        NED AS NED_c, LEAD(NED) OVER (ORDER BY id DESC ) AS NED_p,
        PHL AS PHL_c, LEAD(PHL) OVER (ORDER BY id DESC ) AS PHL_p,
        SCIL AS SCIL_c, LEAD(SCIL) OVER (ORDER BY id DESC ) AS SCIL_p,
        SIM AS SIM_c, LEAD(SIM) OVER (ORDER BY id DESC ) AS SIM_p,
        WPHL AS WPHL_c, LEAD(WPHL) OVER (ORDER BY id DESC ) AS WPHL_p,
        ZIMW AS ZIMW_c, LEAD(ZIMW) OVER (ORDER BY id DESC ) AS ZIMW_p
      FROM volume
    )
  SELECT 'date', '', 'ASUN', 'AXIA', 'CMCL', 'EDGR', 'FCA', 'INN', 'INV', 'NTFD', 'NED', 'PHL', 'SCIL', 'SIM', 'WPHL', 'ZIMW'
  UNION  
  SELECT 
    date,
    'price',
    CONCAT(FORMAT(( (ASUN_c - ASUN_p ) / NULLIF(ASUN_p,0) )*100,2),'%') AS 'ASUN',
    CONCAT(FORMAT(( (AXIA_c - AXIA_p ) / NULLIF(AXIA_p,0) )*100,2),'%') AS 'AXIA',
    CONCAT(FORMAT(( (CMCL_c - CMCL_p ) / NULLIF(CMCL_p,0) )*100,2),'%') AS 'CMCL',
    CONCAT(FORMAT(( (EDGR_c - EDGR_p ) / NULLIF(EDGR_p,0) )*100,2),'%') AS 'EDGR',
    CONCAT(FORMAT(( (FCA_c - FCA_p ) / NULLIF(FCA_p,0) )*100,2),'%') AS 'FCA',
    CONCAT(FORMAT(( (INN_c - INN_p ) / NULLIF(INN_p,0) )*100,2),'%') AS 'INN',
    CONCAT(FORMAT(( (INV_c - INV_p ) / NULLIF(INV_p,0) )*100,2),'%') AS 'INV',
    CONCAT(FORMAT(( (NTFD_c - NTFD_p ) / NULLIF(NTFD_p,0) )*100,2),'%') AS 'NTFD',
    CONCAT(FORMAT(( (NED_c - NED_p ) / NULLIF(NED_p,0) )*100,2),'%') AS 'NED',
    CONCAT(FORMAT(( (PHL_c - PHL_p ) / NULLIF(PHL_p,0) )*100,2),'%') AS 'PHL',
    CONCAT(FORMAT(( (SCIL_c - SCIL_p ) / NULLIF(SCIL_p,0) )*100,2),'%') AS 'SCIL',
    CONCAT(FORMAT(( (SIM_c - SIM_p ) / NULLIF(SIM_p,0) )*100,2),'%') AS 'SIM',
    CONCAT(FORMAT(( (WPHL_c - WPHL_p ) / NULLIF(WPHL_p,0) )*100,2),'%') AS 'WPHL',
    CONCAT(FORMAT(( (ZIMW_c - ZIMW_p ) / NULLIF(ZIMW_p,0) )*100,2),'%') AS 'ZIMW'
  FROM price_change
  UNION
  SELECT 
    date,
    'volume',
    FORMAT( (ASUN_c - ASUN_p) ,0) AS 'ASUN',
    FORMAT( (AXIA_c - AXIA_p ),0) AS 'AXIA',
    FORMAT( (CMCL_c - CMCL_p ),0) AS 'CMCL',
    FORMAT( (EDGR_c - EDGR_p ),0) AS 'EDGR',
    FORMAT( (FCA_c - FCA_p ),0) AS 'FCA',
    FORMAT( (INN_c - INN_p ),0) AS 'INN',
    FORMAT( (INV_c - INV_p ),0) AS 'INV',
    FORMAT( (NTFD_c - NTFD_p ),0) AS 'NTFD',
    FORMAT( (NED_c - NED_p ),0) AS 'NED',
    FORMAT( (PHL_c - PHL_p ),0) AS 'PHL',
    FORMAT( (SCIL_c - SCIL_p ),0) AS 'SCIL',
    FORMAT( (SIM_c - SIM_p ),0) AS 'SIM',
    FORMAT( (WPHL_c - WPHL_p ),0) AS 'WPHL',
    FORMAT( (ZIMW_c - ZIMW_p ),0) AS 'ZIMW'
  FROM vol_change
  ORDER BY date DESC 
  LIMIT 1,2;
END //
delimiter ;

delimiter //
CREATE PROCEDURE mov_avg()
BEGIN
    SELECT 
    date AS 'close_mov_avg',
    FORMAT(AVG(ASUN) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'ASUN',
    FORMAT(AVG(AXIA) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'AXIA',
    FORMAT(AVG(CMCL) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'CMCL',
    FORMAT(AVG(EDGR) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'EDGR',
    FORMAT(AVG(FCA) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'FCA',
    FORMAT(AVG(INN) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'INN',
    FORMAT(AVG(INV) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'INV',
    FORMAT(AVG(NTFD) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'NTFD',
    FORMAT(AVG(NED) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'NED',
    FORMAT(AVG(PHL) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'PHL',
    FORMAT(AVG(SCIL) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'SCIL',
    FORMAT(AVG(SIM) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'SIM',
    FORMAT(AVG(WPHL) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'WPHL',
    FORMAT(AVG(ZIMW) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),4) AS 'ZIMW'
  FROM price LIMIT 30;

  SELECT 
    date AS 'vol_mov_avg',
    FORMAT(AVG(ASUN) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'ASUN',
    FORMAT(AVG(AXIA) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'AXIA',
    FORMAT(AVG(CMCL) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'CMCL',
    FORMAT(AVG(EDGR) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'EDGR',
    FORMAT(AVG(FCA) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'FCA',
    FORMAT(AVG(INN) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'INN',
    FORMAT(AVG(INV) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'INV',
    FORMAT(AVG(NTFD) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'NTFD',
    FORMAT(AVG(NED) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'NED',
    FORMAT(AVG(PHL) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'PHL',
    FORMAT(AVG(SCIL) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'SCIL',
    FORMAT(AVG(SIM) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'SIM',
    FORMAT(AVG(WPHL) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'WPHL',
    FORMAT(AVG(ZIMW) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 29 FOLLOWING),1) AS 'ZIMW'
  FROM volume LIMIT 30;
END //
delimiter ;

with cte as (select * from price ORDER BY id DESC LIMIT 100)
SELECT 
	date AS 'price',
	ASUN, 
	AVG(ASUN) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 49 FOLLOWING) AS mov_avg, 
	ASUN - AVG(ASUN) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 49 FOLLOWING) AS delta,
	CONCAT(FORMAT(( ( ( ASUN - (AVG(ASUN) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 49 FOLLOWING)) ) /  (AVG(ASUN) OVER(ORDER BY date DESC ROWS BETWEEN CURRENT ROW AND 49 FOLLOWING)) ) * 100 ),1),'%') AS diff,
  ROW_NUMBER() OVER() AS 'no.'
FROM cte 
limit 30;

delimiter //
CREATE PROCEDURE indices()
BEGIN
  SELECT * FROM indices ORDER BY id DESC LIMIT 5;
END //
delimiter ;

delimiter //
CREATE PROCEDURE vfex()
BEGIN
  CALL p5();
  CALL v5();
  CALL close();
  CALL eod();
  CALL indices();
END //
delimiter ;
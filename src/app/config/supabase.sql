-- Create trades table
CREATE TABLE trades (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  trade_id VARCHAR NOT NULL,
  security_name VARCHAR NOT NULL,
  quantity NUMERIC NOT NULL,
  price NUMERIC NOT NULL,
  trade_date DATE NOT NULL,
  settlement_date DATE NOT NULL,
  counterparty VARCHAR NOT NULL,
  status VARCHAR NOT NULL CHECK (status IN ('UNMAPPED', 'MAPPED', 'SETTLED')),
  currency VARCHAR NOT NULL,
  total_amount NUMERIC NOT NULL
);

-- Insert sample data
INSERT INTO trades (trade_id, security_name, quantity, price, trade_date, settlement_date, counterparty, status, currency, total_amount)
VALUES
  ('T2024001', 'Apple Inc.', 1000, 175.34, '2024-03-20', '2024-03-22', 'Goldman Sachs', 'UNMAPPED', 'USD', 175340),
  ('T2024002', 'Microsoft Corp', 500, 420.45, '2024-03-20', '2024-03-22', 'JP Morgan', 'MAPPED', 'USD', 210225),
  ('T2024003', 'Tesla Inc', 200, 172.82, '2024-03-19', '2024-03-21', 'Morgan Stanley', 'SETTLED', 'USD', 34564),
  ('T2024004', 'Amazon.com Inc', 300, 178.15, '2024-03-20', '2024-03-22', 'Citigroup', 'UNMAPPED', 'USD', 53445),
  ('T2024005', 'Google Inc', 150, 147.60, '2024-03-19', '2024-03-21', 'Bank of America', 'MAPPED', 'USD', 22140); 
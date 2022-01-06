create TABLE transaction(
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    asset INTEGER,
    categories VARCHAR(100) [],
    value NUMERIC(12, 2),
    comments VARCHAR(255),
    FOREIGN KEY (asset) REFERENCES transaction (id)
);

create TABLE asset(
    id SERIAL,
    name VARCHAR(100),
    description VARCHAR(255),
    value NUMERIC(12, 2)
);

ALTER TABLE transaction DROP CONSTRAINT transaction_asset_fkey;
ALTER TABLE asset ADD CONSTRAINT asset_pk PRIMARY KEY (id);

ALTER TABLE transaction ADD CONSTRAINT transaction_asset_fkey FOREIGN KEY (asset) REFERENCES asset (id);
ALTER TABLE asset ALTER COLUMN name SET NOT NULL;
ALTER TABLE transaction ALTER COLUMN asset SET NOT NULL;
ALTER TABLE transaction ALTER COLUMN value SET NOT NULL;
ALTER TABLE transaction ADD COLUMN timestamp TIMESTAMP NOT NULL;

DROP TABLE asset;
DROP TABLE transaction;

create TABLE assets(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    value NUMERIC(12, 2)
);

create TABLE transactions(
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMPTZ NOT NULL,
    asset INTEGER NOT NULL,
    categories VARCHAR(100) [] NOT NULL,
    value NUMERIC(12, 2) NOT NULL,
    comments VARCHAR(255),
    FOREIGN KEY (asset) REFERENCES assets (id)
);

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
    value NUMERIC(12, 2),
);

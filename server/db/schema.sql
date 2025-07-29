CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name VARCHAR(100),
    notify_threshold INT DEFAULT 5,
    preferred_hospital VARCHAR(100)
);

CREATE TABLE alerts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users (id),
    title VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW ()
);

CREATE TABLE diagnostic_tests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    result VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    user_id INT REFERENCES users (id)
);

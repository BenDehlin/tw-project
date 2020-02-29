INSERT INTO tw_players
(username, email, hash)
VALUES
(${username}, ${email}, ${hash})
RETURNING username, email;
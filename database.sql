CREATE SCHEMA `graphql-app`;

CREATE USER 'graphql_user'@'localhost' IDENTIFIED BY 'graphql_user';
GRANT ALL PRIVILEGES ON `graphql-app`.* TO 'graphql_user'@'localhost';

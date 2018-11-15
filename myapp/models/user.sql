create table if not exists users (
    username varchar(20) NOT NULL,
    password varchar(20) NOT NULL,
    PRIMARY KEY (username)
)engine = InnoDB, charset = utf8;
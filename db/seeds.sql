-- USERS
drop table if exists users;

create table users
(
    user_id serial primary key,
    user_name text,
    email text,
    phone text,
    location text,
    title varchar(80),
    picture text,
    auth_id text
)

select *
from teams_users tu
join users u 
on tu.user_id = u.user_id;

select *
from teams_users tu
join teams t 
on tu.user_id = t.team_id;


-- TEAMS

drop table if exists teams;

create table teams
(
    team_id serial primary key,
    name text
)

insert into teams
(name)
values('funday');

drop table teams_users;

create table teams_users 
(
    tu_id serial primary key,
    user_id integer references users(user_id),
    team_id integer references teams(team_id)
)

insert into teams_users
(user_id, team_id)
values(1, 1);


-- MESSAGES

drop table messages;

create table messages 
(
    message_id serial primary key,
    team_id references teams_users(team_id),
    user_id references teams_users(user_id),
    message text,
    date text
)

insert into messages
(team_id, user_id, message, date)
values(1, 1, 'Hey, welcome to the team!', 'Oct 3, 2018');

select *
from messages m
join teams t
on t.team_id = m.team_id;

-- BOARDS

drop table if exists boards;

create table boards
(
    board_id serial primary key,
    team_id integer references teams(team_id),
    title text,
    description text
)


-- TABLES

drop table if exists tables;

create table tables
(
    table_id serial primary key,
    title text,
    board_id integer references boards(board_id)
)

-- ROWS

drop table if exists rows;

create table rows
(
    row_id serial primary key,
    table_id integer references tables(table_id),
    status text,
    text text,
    date text,
    user_id integer references users(user_id),
    order_index integer
)

insert into rows
(table_id, title, status, text, date, person)
values
(1, 'whatever', 'done', 'add header', 'Oct 8 2018', 'Hunter')
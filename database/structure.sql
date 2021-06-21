DROP DATABASE IF EXISTS AMapsDb;
CREATE DATABASE IF NOT EXISTS AmapsDb;

use AMapsDb;
drop table if exists Users;
create table Users (
Id int unsigned auto_increment,
Names varchar(50) not null,
Email varchar(50) not null,
Address varchar(50) not null,
Password varchar(50) not null,
Image varchar(100),
primary key (Id)
);

drop table if exists Products;
create table Products (
Id int unsigned auto_increment,
Name varchar(50) not null,
Continent varchar(50),
Description text not null,
UnitPrice decimal(10, 2),
Image varchar(100) not null,
Stock int,
primary key(Id)
);

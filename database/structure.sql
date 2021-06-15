create database AMapsDb;

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
Stock int unsigned,
primary key(Id)
);

drop table if exists Serial_Numbers;
create table Serial_Numbers (
    Id int unsigned auto_increment,
    Id_Product int unsigned,
    primary key(Id),
    foreign key(Id_Product) references Products(Id)
);

drop table if exists Sales;
create table Sales (
    Id int unsigned auto_increment,
    Id_User int unsigned,
    Id_SerialNumber int unsigned,
    primary key(Id),
    foreign key(Id_User) references Users(Id),
    foreign key(Id_SerialNumber) references Serial_Numbers(Id)
);
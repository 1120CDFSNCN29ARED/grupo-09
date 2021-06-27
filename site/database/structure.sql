drop database if exists AMapsDb;
create database AMapsDb;

use AMapsDb;
drop table if exists Users;
create table Users (
Id int unsigned auto_increment,
Names varchar(50) not null,
Email varchar(50) not null,
Address varchar(50) not null,
Password varchar(150) not null,
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

INSERT INTO AMapsDb.Users (Id, Names, Email, Address, Password, Image) VALUES(1, 'toto', 'toto2@mail.com', 'casa 1', '$2a$10$x8YhxmZIHCLzaP8MJ68EmOxxXf1PvgbV0PeCqGO95IVab9/JqbHl2', '16243214401610profile.jpeg');

# Checkpoint4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## data base

Create in MySQL a database named 'checkpoint4' with user 'cp4' and password 'Cp4Checkpoint4'

## table

After launching the application in javaApplication the tables are self-generated.
To fill the tables execute in MySQL the following srcipt.

INSERT INTO food (name, type, minimum_age, consumption)
VALUES('lait maternel', 'lait', 0, 36),
('lait 1er âge', 'lait', 0, 5),('lait 2ème âge', 'lait', 5, 24),
('lait croissance', 'lait', 24, 36),('yaourt', 'produits laitiers', 7, 36),
('fromage blanc', 'produits laitiers', 8, 36),('fromage', 'produits laitiers', 8, 36),
('pomme', 'fruits', 5, 36),('poire', 'fruits', 5, 36),('bannane', 'fruits', 5, 36),
('kiwi', 'fruits', 5, 36),('orange', 'fruits', 5, 36),('raisin', 'fruits', 5, 36),('tomate', 'légumes', 5, 36),
('poireaux', 'légumes', 5, 36),('aubergine', 'légumes', 5, 36),('petit poids', 'légumes', 5, 36),
('avocat', 'légumes', 5, 36),('courgette', 'légumes', 5, 36),('courge', 'légumes', 5, 36),
('pommes de terre', 'légumes', 5, 36),('pattate douce', 'légumes', 5, 36),('petit poids', 'légumes', 5, 36),
('céréales infantiles', 'céréales', 5, 36),('poissons', 'poisson', 5, 36),('boeuf', 'viandes', 5, 36),
('poulets', 'viandes', 5, 36),('porcs', 'viandes', 5, 36),('moutons', 'viandes', 5, 36),('pain', 'produits céréaliers', 8, 36),
('légumes secs', 'légumes secs', 24, 36),('oeufs', 'oeufs', 7, 36),('beurre', 'matière grasse', 7, 36),('eau pure', 'boissons', 0, 36),
('sel', 'sels', 24, 36);

insert into parent (child_age, email, firstname, lastname) values ('5', 'mb@gm.com', 'Micka', 'Bel');

## node module

Run `npm install` for update node_modules

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

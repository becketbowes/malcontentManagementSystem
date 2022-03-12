INSERT INTO department
    (name)
VALUES
    ('executive'),
    ('horology'),
    ('ontology'),
    ('planting'),
    ('gleaning'),
    ('janitorial'),
    ('research and development'),
    ('off book');

INSERT INTO role
    (title, manager, salary, department_id)
VALUES 
    ('director', true, 3000000, 1),
    ('director of horology', true,  380000, 2),
    ('existing onotologist', true, 300000, 3),
    ('cheif botanist', true, 600000, 4),
    ('pickerery', true, 140000, 5),
    ('cultural janitor', false, 160000, 6),
    ('director of shenanigans', false, 500000, 7),
    ('consultantation', false, 38000000, 8),
    ('experimental horologist', false, 300000, 2),
    ('horological intern', false, 120000, 2),
    ('existing onotologist', false, 300000, 3),
    ('potentialists', false, 280000, 3),
    ('schrödingerean felines', false, 120000, 3),
    ('botanical specialism', false, 400000, 4),
    ('botanical generalism', false, 450000, 4),
    ('plant whispering', false, 280000, 4),
    ('cleaners', false, 200000, 6),
    ('plumbing', false, 300000, 6),
    ('electric', false, 300000, 6),
    ('assistant to the DOS', false, 250000, 7),
    ('assistant DOS', false, 350000, 7),
    ('agent consultantationists', false, 8000000, 8);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Aja', 'Monk', 1, NULL),
    ('Mud', 'Cearly', 2, 1),
    ('Begget', 'Bar', 3, 1),
    ('Parson', 'Erith', 4, 1),
    ('Ella', 'Fugata', 5, 1),
    ('Manga', 'Tellahson', 2, 2),
    ('Maria', 'Martine', 2, 2),
    ('Sly', 'Familystone', 2, 2),
    ('Xana', 'Parsol', 3, 2),
    ('Olga', 'Therin', 2, 2),
    ('Reed', 'Ragged', 3, 3),
    ('Oryn', 'Maja', 4, 3),
    ('Morana', 'Kays', 5, 3),
    ('Porro', 'Fuga', 6, 3),
    ('Rama', 'Querra', 7, 4),
    ('Portia', 'Guy', 8, 4),
    ('Zek', 'Alegro', 9, 4),
    ('Groo', 'Leone', 10, 4),
    ('Hunta', 'Thena', 11, 5),
    ('Caixo', 'Brint', 12, 5),
    ('Sela', 'Sese', 13, 5),
    ('Natasha', 'Zhou', 14, 5),
    ('Greg', 'Cousins', 14, 5);

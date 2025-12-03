CREATE DATABASE db_blogpessoal;

USE  db_blogpessoal;


INSERT INTO tb_postagens (data, texto, titulo) 
VALUES (current_timestamp(), 'Texto da postagem 1', 'Postagem 1');

INSERT INTO tb_postagens (data, texto, titulo) 
VALUES (current_timestamp(), 'Texto da postagem 2', 'Postagem 2');


SELECT * FROM tb_postagens;

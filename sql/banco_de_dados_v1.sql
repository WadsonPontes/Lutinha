CREATE TABLE usuario (
    id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome_usuario VARCHAR(64) NOT NULL,
    email VARCHAR(512) DEFAULT NULL,
    senha VARCHAR(512) NOT NULL,
    estado VARCHAR(256) DEFAULT 'ativo',
    data_criado DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizado DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE personagem (
    id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome_personagem VARCHAR(64) NOT NULL,
    nivel INT(6) DEFAULT 1,
    experiencia INT(6) DEFAULT 0,

    energia INT(6) DEFAULT 100, -- Afeta a quantidade de vezes que pode treinar
    vida INT(6) DEFAULT 1000,
    dano INT(6) DEFAULT 100, -- O dano medio que o personagem causa
    chance_critico DECIMAL(8,5) DEFAULT 0.0, -- Em porcentagem de 0.0 ate 100.0, chance de acertar um golpe critico
    armadura DECIMAL(8,5) DEFAULT 0.0, -- Em porcentagem de 0.0 ate 100.0, rediz o dano recebido
    reflexo DECIMAL(8,5) DEFAULT 0.0, -- Em porcentagem de 0.0 ate 100.0, chance de desviar de um golpe
    velocidade INT(6) DEFAULT 20, -- Quanto mais alto, mais chance de dar mais de um golpe seguido

    vigor INT(6) DEFAULT 10, -- Aumenta a energia
    vitalidade INT(6) DEFAULT 10, -- Aumenta a vida
    forca INT(6) DEFAULT 10, -- Aumenta o dano
    sorte INT(6) DEFAULT 10, -- Aumenta a chance de critico
    resistencia INT(6) DEFAULT 10, -- Aumenta a armadura
    destreza INT(6) DEFAULT 10, -- Aumenta o reflexo
    agilidade INT(6) DEFAULT 10, -- Aumenta a velocidade

    pontos_ficha INT(6) DEFAULT 10, -- Ganha 5 por nivel
    pontos_arena INT(6) DEFAULT 0,
    estado VARCHAR(256) DEFAULT 'ativo',
    data_criado DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizado DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    id_usuario BIGINT(20) UNSIGNED NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE batalha (
    id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_personagem_online BIGINT(20) UNSIGNED NOT NULL,
    FOREIGN KEY (id_personagem_online) REFERENCES personagem(id),
    id_personagem_offline BIGINT(20) UNSIGNED NOT NULL,
    FOREIGN KEY (id_personagem_offline) REFERENCES personagem(id),
    vida_online INT(6) NOT NULL,
    vida_offline INT(6) NOT NULL,
    experiencia_online INT(6) DEFAULT NULL,
    experiencia_offline INT(6) DEFAULT NULL,
    ouro_online INT(6) DEFAULT NULL,
    ouro_offline INT(6) DEFAULT NULL,
    pontos_arena_online INT(6) DEFAULT NULL,
    pontos_arena_offline INT(6) DEFAULT NULL,
    estado VARCHAR(256) DEFAULT 'ativo',
    data_criado DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizado DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE golpe (
    id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_personagem_atacante BIGINT(20) UNSIGNED NOT NULL,
    FOREIGN KEY (id_personagem_atacante) REFERENCES personagem(id),
    id_personagem_defensor BIGINT(20) UNSIGNED NOT NULL,
    FOREIGN KEY (id_personagem_defensor) REFERENCES personagem(id),
    dano INT(6) NOT NULL,
    critico BOOLEAN DEFAULT false,
    desviado BOOLEAN DEFAULT false,
    experiencia_atacante INT(6) NOT NULL,
    experiencia_defensor INT(6) NOT NULL,
    data_efetuacao DATETIME DEFAULT CURRENT_TIMESTAMP
);
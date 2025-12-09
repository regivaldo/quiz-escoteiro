-- ============================================
-- Script de Criação do Banco de Dados
-- Quiz Escoteiro - MySQL
-- ============================================

-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS quiz_escoteiro
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE quiz_escoteiro;

-- ============================================
-- Tabela: quizes
-- Armazena os quizzes/categorias do jogo
-- ============================================
CREATE TABLE IF NOT EXISTS quizes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    highlighted BOOLEAN DEFAULT FALSE,
    color VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_slug (slug),
    INDEX idx_highlighted (highlighted)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Tabela: questions
-- Armazena as perguntas de cada quiz
-- ============================================
CREATE TABLE IF NOT EXISTS questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quiz_id INT NOT NULL,
    question TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_questions_quiz
        FOREIGN KEY (quiz_id) 
        REFERENCES quizes(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    
    INDEX idx_quiz_id (quiz_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Tabela: options
-- Armazena as opções de resposta para cada pergunta
-- ============================================
CREATE TABLE IF NOT EXISTS options (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question_id INT NOT NULL,
    option_text VARCHAR(255) NOT NULL,
    is_correct BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_options_question
        FOREIGN KEY (question_id) 
        REFERENCES questions(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    
    INDEX idx_question_id (question_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- VIEW: vw_quiz_complete
-- View para facilitar consulta de quiz completo
-- ============================================
CREATE OR REPLACE VIEW vw_quiz_complete AS
SELECT 
    q.id AS quiz_id,
    q.title AS quiz_title,
    q.slug AS quiz_slug,
    q.description AS quiz_description,
    q.highlighted,
    q.color,
    qu.id AS question_id,
    qu.question,
    o.id AS option_id,
    o.option_text,
    o.is_correct,
    o.display_order
FROM quizes q
LEFT JOIN questions qu ON q.id = qu.quiz_id
LEFT JOIN options o ON qu.id = o.question_id
ORDER BY q.id, qu.id, o.display_order;

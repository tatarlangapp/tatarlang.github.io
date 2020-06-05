-- phpMyAdmin SQL Dump
-- version 4.0.8
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 04 2014 г., 11:58
-- Версия сервера: 5.1.71-community-log
-- Версия PHP: 5.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `testing`
--

-- --------------------------------------------------------

--
-- Структура таблицы `answers`
--

CREATE TABLE IF NOT EXISTS `answers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `answer` varchar(255) NOT NULL,
  `parent_question` int(10) unsigned NOT NULL,
  `correct_answer` enum('0','1') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- Дамп данных таблицы `answers`
--

INSERT INTO `answers` (`id`, `answer`, `parent_question`, `correct_answer`) VALUES
(1, 'Вывод данных из БД', 1, '0'),
(2, 'Получение данных из БД', 1, '0'),
(3, 'Подключение к БД', 1, '1'),
(4, 'строке', 2, '0'),
(5, 'целому числу', 2, '1'),
(6, 'intval()', 5, '0'),
(7, 'var_dump()', 5, '1'),
(8, 'mysql_query()', 5, '0'),
(9, 'count()', 5, '0'),
(10, '11', 3, '0'),
(11, '12', 3, '1'),
(12, '13', 3, '0'),
(13, 'Гея', 4, '1'),
(14, 'Афродита', 4, '0'),
(15, 'Гера', 4, '0'),
(16, 'Зевс', 6, '1'),
(17, 'Аид', 6, '0'),
(18, 'Посейдон', 6, '0'),
(19, 'Зевс', 7, '0'),
(20, 'Аид', 7, '0'),
(21, 'Посейдон', 7, '1');

-- --------------------------------------------------------

--
-- Структура таблицы `questions`
--

CREATE TABLE IF NOT EXISTS `questions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `parent_test` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Дамп данных таблицы `questions`
--

INSERT INTO `questions` (`id`, `question`, `parent_test`) VALUES
(1, 'Что делает функция mysql_connect()?', 1),
(2, 'Функция intval() приводит значение к:', 1),
(3, 'Сколько подвигов совершил Геракл', 2),
(4, 'Богиня Земли в греческой мифологии', 2),
(5, 'Какая из этих функций относится к функциям дебага?', 1),
(6, 'Верховный бог греческой мифологии', 2),
(7, 'Бог морей в греческой мифологии', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `test`
--

CREATE TABLE IF NOT EXISTS `test` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `test_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Дамп данных таблицы `test`
--

INSERT INTO `test` (`id`, `test_name`) VALUES
(1, 'Тест по PHP'),
(2, 'Тест по мифологии');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

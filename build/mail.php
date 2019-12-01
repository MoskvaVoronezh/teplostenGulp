
<?

//$to = 'v@teplosten-sib.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
$to = 'teplosten-sib@yandex.ru';
    $subject = 'Обратный звонок c сайта Теплосен-Сибирь'; //Загаловок сообщения
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$_POST['user_name'].'</p>
                    <p>Email: '.$_POST['user_email'].'</p>
                    <p>Телефон: '.$_POST['user_phone'].'</p>                        
                </body>
            </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@teplosten-sib.ru>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

?>


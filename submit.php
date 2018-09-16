<?php 
if (!empty($_POST['name']) AND !empty($_POST['email'])){
  
  $headers = 'Заявка от  клиента'.
             
  $theme = 'Болгария';

  $letter = 'Данные сообщения:\r\n';
  $letter .='Имя: '.$_POST['name'].'\r\n';
  $letter .='Email: '.$_POST['email'].'\r\n';
  $letter .='Телефон: '.$_POST['phone'].'\r\n';
  
  if (mail('dennikita03@gmail.com', $theme, $letter, $headers)){
    // echo "<script>
    //   $('#exampleModal1').arcticmodal();
    // </script>";
  } else {
    echo "Ошибка при отправке!";
  }
} else {
  echo "Ошибка: Заполните все поля!";
}


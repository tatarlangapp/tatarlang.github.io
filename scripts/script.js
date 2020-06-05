//Массив вопросов и ответа
var data_array = [
  ["<img src='img/img1.jpg' class='q_img'><br>","Урман","Кыр","Басма","Юл",3],
  ["<img src='img/img2.jpg' class='q_img'><br>","Печәнлек","Тегермән","Тырма","Әрәмәлек",2],
  ["<img src='img/img3.jpg' class='q_img'><br>","Ат","Сарык","Сыер","Кәҗә",1],
  ["<img src='img/img4.jpg' class='q_img'><br>","Күлмәк","Аяк","Читек","Оекбаш",3],
  ["<img src='img/img5.jpg' class='q_img'><br>","Чүлмәк","Тәлинкә","Чиләк","Табак",3],
  ["<img src='img/img6.jpg' class='q_img'><br>","Ләкләк","Тавык","Сандугач","Торна",1],
  ["<img src='img/img7.jpg' class='q_img'><br>","Бүре","Көртлек","Аю","Төлке",3],
  ["<img src='img/img8.jpg' class='q_img'><br>","Чыпчык","Куян","Тукран","Селәүсен",2],
  ["<img src='img/img9.jpg' class='q_img'><br>","Тәгәрмәч","Арба","Чана","Дилбегә",1],
  ["<img src='img/img10.jpg' class='q_img'><br>","Дәфтәр","Китап","Мәктәп","Каләм",2],
  ["<img src='img/img11.jpg' class='q_img'><br>","Өстәл","Урындык","Тартма","Идән",1],
  ["<img src='img/img12.jpg' class='q_img'><br>","Чаңгы","Шакмак","Туп","Алка",3],
  ["<img src='img/img13.jpg' class='q_img'><br>","Сабан","Печән өсте","Кар тоту","Бәрәңге алу",2],
  ["<img src='img/img14.jpg' class='q_img'><br>","Салам","Печән","Он","Ашлык",2],
  ["<img src='img/img15.jpg' class='q_img'><br>","Томан","Буран","Төтен","Пар",3],
  ["<img src='img/img16.jpg' class='q_img'><br>","Болыт","Кояш","Кар","Йолдыз",1],
  ["<img src='img/img17.jpg' class='q_img'><br>","Оя","Өн","Җимлек","Йорт",3],
  ["<img src='img/img18.jpg' class='q_img'><br>","Таяк","Чаңгы","Ләгән","Чана",4],
  ["<img src='img/img19.jpg' class='q_img'><br>","Яшелчә","Җиләк-җимеш","Сөт","Икмәк",1],
  ["<img src='img/img20.jpg' class='q_img'><br>","Кашык","Ботка","Чәйнек","Чүлмәк",1],
  ["<img src='img/img21.jpg' class='q_img'><br>","Диңгез","Елга","Урман","Кыр",4],
  ["<img src='img/img22.jpg' class='q_img'><br>","Кыстыбый","Өчпочмак","Чәк-чәк","Гөбәдия",4],
  ["<img src='img/img23.jpg' class='q_img'><br>","Ишәк","Кәҗә","Колын","Ат",2],
  ["<img src='img/img24.jpg' class='q_img'><br>","Кавын","Шалкан","Кызыл карлыган","Кыяр",2],
  ["<img src='img/img25.jpg' class='q_img'><br>","Сыер","Үрдәк","Эт","Песи",1],
  ["<img src='img/img26.jpg' class='q_img'><br>","Мич","Чолан","Түбә","Идән",1],
  ["<img src='img/img27.jpg' class='q_img'><br>","Алма","Җиләк","Карбыз","Әфлисун",4],
  ["<img src='img/img28.jpg' class='q_img'><br>","Күбәләк","Коңгыз","Кош","Җәнлек",1],
  ["<img src='img/img29.jpg' class='q_img'><br>","Үлән","Агач","Яшелчә","Яфрак",1],
  ["<img src='img/img30.jpg' class='q_img'><br>","Сабын","Чүмеч","Урман","Миллек",4],
  ["<img src='img/img31.jpg' class='q_img'><br>","Кабартма","Кәнфит","Бәлеш","Ипи",4],
  ["<img src='img/img32.jpg' class='q_img'><br>","Кура җиләге","Карлыган","Җир җиләге","Өрек",2],
  ["<img src='img/img33.jpg' class='q_img'><br>","Абзар","Мунча","Келәт","Сарай",2],
  ["<img src='img/img34.jpg' class='q_img'><br>","Өрәңге","Нарат","Каен","Чыршы",1],
  ["<img src='img/1.jpg' class='q_img'><br>","Кыска чәчле","Озын чәчле","Баш","Озын толым",3],
  ["<img src='img/2.jpg' class='q_img'><br>","Чәч","Чал чәчле","Кара чәчле","Жирән чәчле",2],
  ["<img src='img/3.jpg' class='q_img'><br>","Көчле","Матур кыз","Пеләш","Ябык",1],
  ["<img src='img/4.jpg' class='q_img'><br>","Тырнак","Бармак","Кул","Беләк",3],
  ["<img src='img/5.jpg' class='q_img'><br>","Аяк","Кул юу","Йодрык","Бот",3],
  ["<img src='img/6.jpg' class='q_img'><br>","Уч","Тез","Табан","Укчә",1],
  ["<img src='img/7.jpg' class='q_img'><br>","Батыр","Патша","Ир-ат","Хан",3],
  ["<img src='img/8.jpg' class='q_img'><br>","Халык","Табун","әбиләр","Кызлар",2],
  ["<img src='img/9.jpg' class='q_img'><br>","Ми","Баш сөяге","Такыя","Тән",1],
  ["<img src='img/10.jpg' class='q_img'><br>","Каравылчы","Тимерче","Пешекче","Очучы",2],
  ["<img src='img/11.jpg' class='q_img'><br>","Күмер","Көмеш","Агач","Тимер",1],
  ["<img src='img/12.jpg' class='q_img'><br>","Балтачы","Кошчы","Укчы","Сугыш",3],
  ["<img src='img/13.jpg' class='q_img'><br>","Табиб","Очучы","Сатучы","Тегүче",2],
  ["<img src='img/14.jpg' class='q_img'><br>","Шагыйрь","Язучы","Рәссам","Сугышчы",2],
  ["<img src='img/15.jpg' class='q_img'><br>","Тәрҗемәче","Спортчы","Янгын сүндерүче","үзе аучы",3],
  ["<img src='img/16.jpg' class='q_img'><br>","Ат","Кәҗә","Сарык","Сыер",1],
  ["<img src='img/17.jpg' class='q_img'><br>","Тавык","Эт","Тәкә","Бүре",3],
  ["<img src='img/18.jpg' class='q_img'><br>","Төлке","Дөя","Аю","Бозау",2],
  ["<img src='img/19.jpg' class='q_img'><br>","Үгез","Мөгез","Сөт","Дуңгыз",1],
  ["<img src='img/20.jpg' class='q_img'><br>","Эремчек","Ботка","Шулпа","Бәрәңге",1],
  ["<img src='img/21.jpg' class='q_img'><br>","Көчек","Айгыр","Эт","Бия",3],
  ["<img src='img/22.jpg' class='q_img'><br>","Карбыз","Кабак","Чия","Кыяр",3],
  ["<img src='img/23.jpg' class='q_img'><br>","Йөзем","Кура җиләге","Карлыган","Как",2],
  ["<img src='img/24.jpg' class='q_img'><br>","Кавын","Өрек","Кызыл карлыган","Караҗимеш",3],
  ["<img src='img/25.jpg' class='q_img'><br>","Кара бөрлегән","Нарат җиләге","Мүк җиләге","Кара миләш",1],
];

var plus = 0;
var time = 0;
var cur_answer = 0;
var count_answer = data_array.length;

function sec() {
	time++;	
	document.getElementById('time').innerHTML='Вакыт: ' + time + ' сек!!';
}

function check(num){
		
		document.getElementById('intro_img').style.display='none';
		document.getElementById('question-container').style.display='block';
		document.getElementById('answer-container').style.display='block';
		
	if(num == 0){ 
		
		document.getElementById('option1').style.display='inline';
		document.getElementById('option2').style.display='inline';
		document.getElementById('option3').style.display='inline';
		document.getElementById('option4').style.display='inline';
		document.getElementById('question').style.display='inline';

		document.getElementById('option1').innerHTML=data_array[cur_answer][1];
		document.getElementById('option2').innerHTML=data_array[cur_answer][2];
		document.getElementById('option3').innerHTML=data_array[cur_answer][3];
		document.getElementById('option4').innerHTML=data_array[cur_answer][4];
		document.getElementById('question').innerHTML=data_array[cur_answer][0];
		
		document.getElementById('start').style.display='none';
		document.getElementById('end').style.display='inline';
		
		var intervalID = setInterval(sec, 1000);
		
	}else{

		if( num ==  data_array[cur_answer][5]){
			plus++;
			document.getElementById('result').innerHTML='Верно!';
		}else{
			document.getElementById('result').innerHTML="Неверно! Правильный ответ: " + data_array[cur_answer][data_array[cur_answer][5]];
		}
			
		cur_answer++;
		if(cur_answer < count_answer){
		
			document.getElementById('option1').innerHTML=data_array[cur_answer][1];
			document.getElementById('option2').innerHTML=data_array[cur_answer][2];
			document.getElementById('option3').innerHTML=data_array[cur_answer][3];
			document.getElementById('option4').innerHTML=data_array[cur_answer][4];
			document.getElementById('question').innerHTML=data_array[cur_answer][0];
			
		}else{
			
			document.getElementById('time').id = 'stop';
			document.getElementById('option1').style.display='none';
			document.getElementById('option2').style.display='none';
			document.getElementById('option3').style.display='none';
			document.getElementById('option4').style.display='none';
			document.getElementById('question').style.display='none';
			document.getElementById('end').style.display='inline';
			
			var percent =  Math.round(plus/count_answer*100);				
			var res = 'Плохо!';
			if(percent>70) res = 'Хорошо!';
			if(percent==100) res = 'Отлично!';
			
			document.getElementById('answer-container').style.display='none';
			document.getElementById('result').style.display='block';
			document.getElementById('result').innerHTML='Правильных ответов: ' + plus + ' из ' + count_answer + ' (' + percent + '%) - ' + res;
			document.getElementById('question-container').style.display='none';
			document.getElementById('finish_img').style.display='block';
		}
	}
}

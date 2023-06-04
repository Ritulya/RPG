$(document).ready ( function() {

	let catStand = "img/hero/cat.png";
	let catGoing = "img/hero/котик.gif";
	let isStand = true;  //Переменная для запрета возможности нескольких кликов при передвижении
	heroSprite('stand');

  	
  	//let heroVelocity = 0.125;
	//let sceneVelocity = 0.125;

	let heroVelocity = 0.5;
	let sceneVelocity = 0.5;


	let rpgLeft = document.getElementById("rpg").offsetLeft;
	let rpgWidth = document.getElementById("rpg").offsetWidth;
	let sceneWidth;
	let hero = document.getElementById("hero");
	let heroWidth = hero.offsetWidth/2;
	let sceneLeft, heroX, heroTime, sceneX, sceneTime;



	//---------------------------------------------------------------
	//Переход между сценами
	$('.transition').on('click', function (event) {

		$('#dialog').fadeOut('slow');


		if (isStand) {

			$('#scene').attr('class', '');

			//получаем название сцены и позицию из класса перехода
			let nextScene = $(this).attr('class');
			nextScene = nextScene.replace('sceneObj transition ', '');

			//получаем данные о позиционироваа
			let positionScene = $('#scene').data(nextScene);

			//получаем данные об общем названии
			nextScene = nextScene.match(/^([^-]+)/)[0];

			//нахождение положения инициализируемой сцены, чтобы первое движение по сцене не ломалось
			sceneX = positionScene.match(/(-?\d+)/)[0];

			//выполнение перехода по названию и позиции
			nextScene = '$(\'#rpg\').initScene_' + nextScene + positionScene;
			eval(nextScene);

			event.stopPropagation();
		}
	})

	//---------------------------------------------------------------
	// Движение по сцене
	$( "#scene" ).on ('click', (event) => {

		$('#dialog').fadeOut('slow');

		if (isStand) {
			let sceneWidth = document.getElementById("scene").offsetWidth;
			event.stopPropagation();
			let clickX = event.pageX - rpgLeft;
			sceneLeft = document.getElementById("scene").offsetLeft;
			heroTime = hero.offsetLeft;

			const maxX = rpgWidth * 0.8 - heroWidth;
			const minX = rpgWidth * 0.2 + heroWidth;



			//Проверка на движение за край
			if (clickX <= minX) { // Проверка на тык за левый край движения
				heroX = minX - heroWidth;
				sceneX = sceneLeft + (minX - clickX);
			} else if (clickX >= maxX) { // Проверка на тык за правый край движения
				heroX = maxX - heroWidth;
				sceneX = sceneLeft - (clickX - maxX);
			} else {
				heroX = clickX - heroWidth;
			}


			//Проверка на конец сцены
			if (sceneX > 0)
				sceneX = 0
			else if (sceneX < rpgWidth - sceneWidth)
				sceneX = rpgWidth - sceneWidth


			//Проверка на замену стороны
			if (heroTime + heroWidth - clickX > 0)
				heroSide('left');
			else
				heroSide('right');


			//Время движения
			heroTime = Math.abs(heroTime - heroX) / heroVelocity;
			sceneTime = Math.abs(sceneLeft - sceneX) / sceneVelocity;

			heroSprite("go");
			$("#hero").animate({left: heroX}, heroTime, 'linear', function () {
				$("#scene").animate({left: sceneX}, sceneTime, 'linear', function () {
					heroSprite('stand');
				});});

			//isClose(heroX);
		}

	});



	// Функция замены спрайта
	function heroSprite(state) {
		switch (state) {
			case 'stand':
				$( "#cat" ).attr('src', catStand);
				isStand = true;
				break
			case 'go':
				$( "#cat" ).attr('src', catGoing);
				isStand = false;
				break
		}
	}


	// Функция замены направления поворота
	function heroSide(state) {
		switch (state) {
			case 'left':
				$('#hero').removeClass('toRight');
				$('#hero').addClass('toLeft');
				break
			case 'right':
				$('#hero').removeClass('toLeft');
				$('#hero').addClass('toRight');
				break
		}
	}



	/*
        //---------------------------------------------------------------
        //Проверка на близость к персонажу
        let scenePerson = document.getElementsByClassName("sceneObj person")[0];

         function isClose(a) {
             if (Math.abs(scenePerson.offsetLeft - (Math.abs(sceneLeft) + a + heroWidth * 2)) <= 80) {
                 if (isStand)
                   showInteractions();
             }
             else
                 hideInteractions();
         }


         //---------------------------------------------------------------
        //Показать или скрыть меню взаимодействий
         function showInteractions() {
             $('#getThought').css('left', scenePerson.offsetLeft + 'px')
                             .css('display', 'block')
             $('#startDialogue').css('left', scenePerson.offsetLeft + 'px')
                             .css('display', 'block');
         }

         function hideInteractions() {
             $('#getThought').css('display', 'none');
             $('#startDialogue').css('display', 'none');
         }

        //---------------------------------------------------------------
        //Отображение взимодействий при наведении
        scenePerson.addEventListener('mouseover', (event) => {
            isClose(hero.offsetLeft)
            console.log('ok')
        });*/


	//---------------------------------------------------------------
	// Click  по персонажу
	let person;

	function initDialogBlocks(i) {
		switch (person.data('dialog')[i].character) {
			case 'hero':
				$('#dialog').css('left', (parseInt($('#hero').css('left')) + Math.abs(parseInt($('#scene').css('left'))) - 125 + 'px')).css('top', (parseInt($('#hero').css('top')) - 80) + 'px');
				break;
			case 'person':
				$('#dialog').css('left', (parseInt(person.css('left')) - 75) + 'px').css('top', (parseInt(person.css('top')) - 80) + 'px');
				break;
		}
	}


	function showDialogFragment(i) {
		$('#textDialog').html( person.data('dialog')[i].text);
	};

	function ifDialogHaveImplement(i) {
		if (person.data('dialog')[i].implement){
			eval(person.data('dialog')[i].implement)
		}
	}


	function showAnswers(a) {
		$('#answers').html('');

		for (let i in a)  {
			const response = document.createElement("button");
			response.innerText = a[i].text;

			response.addEventListener("click", function(event) {
				event.stopPropagation()
				eval(a[i].implement);
				showIsNotAnswer()
			});


			$('#answers').append(response);
		}
	}


	function showIsNotAnswer() {
		$('#answers').html('');
		$('#textDialog').css('display', 'inline-block');
		if (!person.data('dialog')[person.data('dialogIndex')].isEnd)
			$('#dialogDalee').css('display', 'inline-block');
		else {
			if (person.data('state') == 'readyForDialog') {
				addBallsForDialog();
				person.data('state', 'dialogCompleted');
			}
		}
		showDialogFragment(person.data('dialogIndex'));
	}


	function addBallsForDialog() {
		//	NB! ??? после окончания диалога добавить баллы за диалог с персонажем ???
		$('#rpg').data('sceneScore', $('#rpg').data('sceneScore') + person.data('value') );		// показатель прогресса сцены
		$('#rpg').data('personScore', $('#rpg').data('personScore') + person.data('value') );	// показатель прогресса действий с персонажем на сцене

		// [NB! временно!] Отображение индикаторов прогресса
		$('#sceneScore .score').text( $('#rpg').data('sceneScore') );
		$('#personScore .score').text( $('#rpg').data('personScore') );
	};




	$('.person').on ( 'click', function(event) {

		person = $(this);
		event.stopPropagation();

		initDialogBlocks(person.data('dialogIndex'));

		$('#dialog').fadeIn(300);

		if (person.data('dialog')[person.data('dialogIndex')].isAnswers) {
			$('#textDialog').css('display', 'none');
			$('#dialogDalee').css('display', 'none');
			showAnswers(person.data('dialog')[person.data('dialogIndex')].answers);
		}
		else {
			showIsNotAnswer()
		}
	});

	$('#dialogDalee').on ( 'click', function(event) {

		console.log(person.data('dialogIndex'))


		$('#dialogDalee').css('display', 'none');
		ifDialogHaveImplement(person.data('dialogIndex'));
		event.stopPropagation();


		if ( person.data('state') == 'wait')
				person.data('state', 'readyForDialog');

		if ( person.data('state') == 'readyForDialog') {
				// проверка окончания диалога:
				if( person.data('dialogIndex') < person.data('dialog').length - 1  ) {
					person.data('dialogIndex', person.data('dialogIndex' ) + 1);
				}
		}


			initDialogBlocks(person.data('dialogIndex'));

			$('#dialog').fadeIn(300);

			if (person.data('dialog')[person.data('dialogIndex')].isAnswers) {
				$('#textDialog').css('display', 'none');
				$('#dialogDalee').css('display', 'none');
				showAnswers(person.data('dialog')[person.data('dialogIndex')].answers);
			}
			else {
				initDialogBlocks(person.data('dialogIndex'));
				showIsNotAnswer();
			}

	});


	//---------------------------------------------------------------
	// Click  по инструменту на сцене
	$('.tool').on ( 'click', function(event) {

		event.stopPropagation();	// клик по инструменту не "всплывает"

		let toolObj = $(this);

		let callbackFunc = function() {
			// скрываем "идущего" героя и показываем статичного:
			$("#hero .walking").fadeOut('fast');
			$("#hero .static").fadeIn('fast');

			// отправляем инструмент на "панель инструментов"
			toolObj.find('img').appendTo( $('#toolsPanel') )
				.attr( 'class', 'availableTool' )
				.attr( 'name', $(this).attr('name') )
				.attr( 'rel', $(this).attr('id') );
		};

		callbackFunc();

		//----- NB! ??? добавить баллы к общему счёты сцены и игры в целом ???

		$('#rpg').data('sceneScore', $('#rpg').data('sceneScore') + $(this).data('value') );	// показатель прогресса сцены
		$('#rpg').data('toolsScore', $('#rpg').data('toolsScore') + $(this).data('value') );	// показатель прогресса действий с инструментами на сцене

		// [NB! временно!] Отображение индикаторов прогресса
		$('#sceneScore .score').text( $('#rpg').data('sceneScore') );
		$('#toolsScore .score').text( $('#rpg').data('toolsScore') );

		//----- END	NB! ??? после окончания диалога добавить баллы за диалог с персонажем ???

	});

	//---------------------------------------------------------------
	// Click  по инструменту, уже обретённому (панель инструментов)
	$('.tool').on ( 'click', function(event) {

		let callbackFunc = function() {
			//...
		};

		callbackFunc();
	});

	//---------------------------------------------------------------
	// Click  по элементу сцены
	$('.thing').on ( 'click', function(event) {

		event.stopPropagation();	// клик по элементу сцены не "всплывает"

		let callbackFunc = function() {
			// скрываем "идущего" героя и показываем статичного:
			$("#hero .walking").fadeOut('fast');
			$("#hero .static").fadeIn('fast');
		};

		callbackFunc();
	});

	//---------------------------------------------------------------
	// Click  по сцене вне объектов
	$('#scene').on ( 'click', function(e) {

		let callbackFunc = function() {
			// скрываем "идущего" героя и показываем статичного:
			$("#hero .walking").fadeOut('fast');
			$("#hero .static").fadeIn('fast');
		};

		let posX = e.offsetX;
		let posY = e.offsetY;

		$('#empty').css('left', posX+'px').css('top', posY+'px');
		callbackFunc();
	});


	//-------------------------------------------------------------------------------------------------------------------------
	//-------------------------------------------------------------------------------------------------------------------------
	// Функции, используемые в обработчиках:


	//-------
	$.fn.startDialog = function(callbackFunc) {

	}	// $.fn.startDialog

	//-------
	function initScene() {
		$('#scene .person').each ( function() {
			$(this).data('status', 'wait');
			$(this).data('dialog', '');
			$(this).data('dialogIndex', 0);
		});
	};	// initScene

	//-------
	function initSceneDialogs(sceneDialogs) {

	};	// initSceneDialogs
 })	// $(document).ready
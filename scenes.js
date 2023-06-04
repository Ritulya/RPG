$(document).ready ( function() {

	$('#hero').data('thingsNeed', 'Немного ткани, шнурок, две пуговки поменьше, одна пуговка побольше, нитки и иголка!')

	$('#scene').data('perehodOposs-1', '(0, 0)');
	$('#scene').data('perehodOposs-2', '(0, 680)');

	$('#scene').data('opossums', '(0, 1040)');

	$('#scene').data('zhaba-1', '(-750, 1350)');
	$('#scene').data('zhaba-2', '(0, 0)');

	$('#scene').data('perehodZO-1', '(-400, 1350)');
	$('#scene').data('perehodZO-2', '(0, 0)');
	$('#scene').data('perehodZO-3', '(-225, 755)');

	$('#scene').data('ovechka-1', '(-750, 1350)');

	$('#scene').data('perehodHM-1', '(-750, 1350)');
	$('#scene').data('perehodHM-2', '(0, 0)');
	$('#scene').data('perehodHM-3', '(-350, 680)');


	$('#scene').data('perehodUS-1', '(-750, 1350)');
	$('#scene').data('perehodUS-2', '(0, 0)');
	$('#scene').data('perehodUS-3', '(-350, 680)');


	$('#scene').data('medved', '(0, 0)');

	$('#scene').data('sova-1', '(0, 0)');



	$('#scene').data('hrustina-1', '(-750, 1350)');
	$('#scene').data('hrustina-2', '(-750, 750)');

	$('#scene').data('utochka-1', '(0, 0)');
	$('#scene').data('utochka-2', '(-750, 1350)');


	console.log($('.person'))
	$('.person').each( function(){
		$(this).data('dialogIndex', 0)
	});



//Здесь надо инициализировать сцены.
//Для инициализации каждой сцены следует определить соответствующие функции, расширяющие основной класс JQuery
// 
//	- задать фон
//	- инициализировать объекты сцены	

	//------------------------------------------
	// Стартовая сцена:

	$('#zhaba').data('part', 'one');
	$.fn.initScene_zhaba = function(sceneX, heroX) {
		$('#scene').css('width', '2250px')

		//----- Определение параметров конкретной сцены. NB! изменить для другой сцены!

		initScene('img/bg/bg2.png', 'zhaba', 'Начало путешествия', sceneX);		// Фон и ID сцены, текст её названия.

		// Персонажи:
		initSceneObject( { objectId: 'zhaba', leftPos: 1600, topPos: 335, value: 4 } );

		if ($('#zhaba').data('part') == 'one') {
			$('#zhaba').data('state', 'wait');
			$('#zhaba').data('dialogIndex', 0);
		}
		else if ($('#zhaba').data('part') == 'two'){
			$('#zhaba').data('state', 'readyForDialog');
			$('#zhaba').data('dialogIndex', 32);
		}
		else {
			$('#zhaba').data('state', 'readyForDialog');
			$('#zhaba').data('dialogIndex', 43);
		}

		// Инструменты:
		initSceneObject( { objectId: 'mashroom-belyi', leftPos: 600, topPos: 500, value: 10 } );
		initSceneObject( { objectId: 'flask', leftPos: 910, topPos: 600, value: 20 } );

		// Элементы сцены:
		initSceneObject( { objectId: 'mushroom-volnushka', leftPos: 1150, topPos: 550, value: 0 } );
		initSceneObject( { objectId: 'transition1', leftPos: 2090, topPos: 430, value: 0});
		setTransition($('#transition1'), 'perehodOposs-1');
		initSceneObject( { objectId: 'transition2', leftPos: 25, topPos: 430, value: 0});
		setTransition($('#transition2'), 'perehodZO-1');

		// Диалоги:
		let dialogs = {
			'zhaba': [
				{
					character: 'hero',
					text: 'Здравствуйте, мистер, который живёт в огромной тыкве!'
				},{
					character: 'person',
					text: 'Ой, здравстуй - здравствуй!'
				}, {
					character: 'person',
					text: 'Как здорово, что к нам в лес подтягивается молодежь.'
				}, {
					character: 'person',
					text: 'Позволь представиться'
				}, {
					character: 'person',
					text: 'Уважаемый Жабракадабра, в прошлом фея-крёстная...'
				},{
					character: 'person',
					text: 'В настоящем просто джентельмен в самом расцвете сил.'
				}, {
					character: 'person',
					text: 'Может быть выпьем по чашечке чайного гриба?'
				}, {
					character: 'hero',
					text: 'Простите, но это звучит слишком страшно…'
				}, {
					character: 'person',
					text: 'Эх, молодежь…'
				}, {
					character: 'person',
					text: 'Тогда рассказывай кто такой и зачем в такую даль забрёл.'
				}, {
					character: 'hero',
					text: 'Я Котик. Ищу для Алисы немного вещей.'
				}, {
					character: 'hero',
					text: 'Может у вас есть что-то из того, что требуется?'
				}, {
					character: 'person',
					text: 'Для Алисы, говоришь…'
				}, {
					character: 'person',
					text: 'Это, конечно, не моё дело, но будь с ней осторожнее... ведьма всё таки.'
				}, {
					character: 'person',
					text: 'Так вот, что там тебе нужно?'
				}, {
					character: 'hero',
					text: $('#hero').data('thingsNeed')
				}, {
					character: 'person',
					text: 'Хммм…'
				}, {
					character: 'person',
					text: 'О! Вот, держи катушку волшебних ниток.',
					implement: "console.log('получил'); " +
						"$('#hero').data('thingsNeed', $('#hero').data('thingsNeed').replace(' нитки ', ''))" // TODO: ДОБАВИТЬ ДОБАВЛЕНИЕ ВЕЩИ
				}, {
					character: 'hero',
					text: '*Котик получает катушку прозрачных ниток*'
				}, {
					character: 'hero',
					text: 'Волшебных? Это как?'
				}, {
					character: 'person',
					text: 'Ну как, как! Видишь, они же полностью невидимы!'
				}, {
					character: 'hero',
					text: '',
					isAnswers: true,
					answers: [   // прибавлять до номера реплик
						{
							text: 'Они просто прозрачные...',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
						},
						{
							text: 'Ух ты!',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 2)"
						}
					]
				},{
					character: 'hero',
					text: 'Они просто прозрачные, это не волшебство…',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
				}, {
					character: 'hero',
					text: 'Ух ты, действительно!',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 5)"
				},


				{
					character: 'hero',
					text: 'Да и если честно, их очертания всё равно видно.'
				}, {
					character: 'person',
					text: '…'
				},{
					character: 'person',
					text: 'Если много спорить со взрослыми, они могут обидеться…'
				},{
					character: 'person',
					text: 'И забрать то, чем великодушно поделились.'
				},{
					character: 'hero',
					text: 'Понял.',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
				},


				{
					character: 'person',
					text: 'Ах! Мой маленький друг, ты так меня понимаешь!',
				},


				{
					character: 'hero',
					text: 'Спасибо вам большое!',
					implement: " $('#zhaba').data('part', 'three')"
				},{
					character: 'person',
					text: 'Да не за что, мой дорогой! От Алисы же пришёл…',
					isEnd: true
				},






				{
					character: 'hero',
					text: 'Мистер Жабракадабра?'
				},{
					character: 'person',
					text: 'Да, мой друг? Что-то случилось?'
				},{
					character: 'hero',
					text: 'Эм…'
				},{
					character: 'hero',
					text: 'Там чуть дальше, на полянке, есть пень…'
				},{
					character: 'person',
					text: 'А! Ты познакомился с нашими немногословными друзьями?'
				},{
					character: 'hero',
					text: 'Наверное,  можно и так сказать…'
				},{
					character: 'hero',
					text: 'Просто знаете, я не очень понимаю как правильно с ними разговаривать…'
				},{
					character: 'person',
					text: 'Ха-ха! Просто настройся на их волну!'
				},{
					character: 'hero',
					text: 'Их волну?'
				},{
					character: 'hero',
					text: 'Э, спасибо, наверное…',
					implement: "$('#opossums').data('part', 'two'); $('#zhaba').data('part', 'three')"
				},{
					character: 'person',
					text: 'Да не за что, мой дорогой!',
					isEnd: true
				},



				{
					character: 'person',
					text: 'Здравствуй, мой дорогой!'
				},{
					character: 'person',
					text: 'Уже сделал все свои дела?'
				},{
					character: 'hero',
					text: 'Нет ещё...'
				},{
					character: 'person',
					text: 'Удачи, Котёночек!',
					isEnd: true,
				}
			],
		};

		// Главный герой - первоначальная ориентация и предполагаемое направление движения:
		$('#hero').css('left', heroX + 'px');

		//----- END   Определение параметров конкретной сцены. NB! изменить для другой сцены!

		//----- Действия общего характера, выполняются единообразно для любой сцены:

		// инициализация объектов сцены
		initSceneObjects();

		// инициализация диалогов сцены:
		for ( let personId in dialogs ) {
			let person = $('#'+personId);
			let personDialog = dialogs[personId];
			person.data('dialog', personDialog);
		};

		//----- END	  Действия общего характера:

	};


	$.fn.initScene_perehodOposs = function(sceneX, heroX) {

		//----- Определение параметров конкретной сцены. NB! изменить для другой сцены!
		$('#scene').css('width', '1700px')

		initScene('img/bg/bg3.png', 'two', 'Продолжение путешествия', sceneX);		// Фон и ID сцены, текст её названия.

		// Инструменты:
		initSceneObject( { objectId: 'mashroom-violet-poisonous', leftPos: 890, topPos: 670, value: -10 } );

		// Элементы сцены:
		initSceneObject( { objectId: 'mushroom-podosinoviki', leftPos: 1200, topPos: 650, value: 0 } );
		initSceneObject( { objectId: 'transition2', leftPos: 25, topPos: 470, value: 0})
		setTransition(('#transition2'), 'zhaba-1');

		initSceneObject( { objectId: 'transition3', leftPos: 700, topPos: 445, value: 0})
		setTransition(('#transition3'), 'opossums');



		// Главный герой - первоначальная ориентация и предполагаемое направление движения:
		$('#hero').css('left', heroX + 'px');

		//----- END   Определение параметров конкретной сцены. NB! изменить для другой сцены!

		//----- Действия общего характера, выполняются единообразно для любой сцены:

		// инициализация объектов сцены
		initSceneObjects();

		// инициализация диалогов сцены:
		for ( let personId in dialogs ) {
			let person = $('#'+personId);
			let personDialog = dialogs[personId];
			person.data('dialog', personDialog);
		};

		//----- END	  Действия общего характера:

	};


	$('#opossums').data('part', 'one');

	$.fn.initScene_opossums = function(sceneX, heroX) {
		$('#scene').css('width', '2250px')

		//----- Определение параметров конкретной сцены. NB! изменить для другой сцены!

		initScene('img/bg/bg5.png', 'opossums', 'Начало путешествия', sceneX);// Фон и ID сцены, текст её названия.


		// Персонажи:
		initSceneObject( { objectId: 'opossums', leftPos:50, topPos: 450, value: 4 } );
		$('#opos_img').attr('src', 'img/persons/home_opos.png')


		if ($('#opossums').data('part') == 'one') {
			$('#opossums').data('state', 'wait');
			$('#opossums').data('dialogIndex', 0);
		}
		else if ($('#opossums').data('part') == 'two'){
			$('#opossums').data('state', 'readyForDialog');
			$('#opossums').data('dialogIndex', 11);
		}
		else {
			$('#opossums').data('state', 'readyForDialog');
			$('#opossums').data('dialogIndex', 28);
		}

		// Элементы сцены:
		//initSceneObject( { objectId: 'derevo', leftPos: 0, topPos: 375, value: 0 } );
		initSceneObject( { objectId: 'transition3', leftPos: 1015, topPos: 470, value: 0});
		setTransition($('#transition3'), 'perehodOposs-2');



		// Диалоги:
		let dialogs = {
			'opossums': [

				{
					character: 'hero',
					text: '*Тук-тук*'
				},{
					character: 'hero',
					text: 'Тут кто-то есть?',
					implement: "$('#opos_img').attr('src', 'img/persons/opossums.png')"
				},{
					character: 'person',
					text: '…'
				},{
					character: 'person',
					text: '…',
				},{
					character: 'hero',
					text: 'Привет!',
				},{
					character: 'person',
					text: '…',
				}, {
					character: 'person',
					text: 'ААААААААААААААААААААА!',
				}, {
					character: 'person',
					text: 'АААААААААААА АААА ААААААААААААААААААА АААААА!',
				}, {
					character: 'hero',
					text: 'Ааааа! Хватит орать!',
				}, {
					character: 'person',
					text: 'АААААААААААА!!!!!!!!!!',
					implement: "$('#opos_img').attr('src', 'img/persons/home_opos.png'); $('#zhaba').data('part', 'two')"
				}, {
					character: 'hero',
					text: 'О господи...',
					isEnd: true
				},




				{
					character: 'hero',
					text: '',
					isAnswers: true,
					answers: [   // прибавлять до номера реплик
						{
							text: 'Постучать.',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
						},
						{
							text: 'АААААААААААА!',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 9); $('#opos_img').attr('src', 'img/persons/opossums.png')"
						}
					]
				},
				{
					character: 'hero',
					text: '*Тук-тук*'
				},
				{
					character: 'hero',
					text: 'Тут есть кто-то?',
					implement: "$('#opos_img').attr('src', 'img/persons/opossums.png')"
				},
				{
					character: 'person',
					text: '…'
				},
				{
					character: 'person',
					text: '…'
				},
				{
					character: 'hero',
					text: 'Привет!'
				},
				{
					character: 'person',
					text: '…'
				},
				{
					character: 'person',
					text: 'АААААААААААААААААААААА!'
				},{
					character: 'hero',
					text: 'Да что такое то!'
				}, {
					character: 'hero',
					text: 'ААААААААААААААААААА АААААААААААААААААААААА!'
				}, {
					character: 'hero',
					text: '…'
				}, {
					character: 'person',
					text: '…'
				}, {
					character: 'person',
					text: 'АААА АА А?'
				}, {
					character: 'hero',
					text: 'ААААА!'
				}, {
					character: 'person',
					text: 'А!'
				}, {
					character: 'person',
					text: '*каждый из опоссумов выплёвывает по чёрной пуговке*',
					implement: "console.log('получил'); $('#opossums').data('part', 'three'); " +
						"$('#opos_img').attr('src', 'img/persons/home_opos.png')" // TODO: ДОБАВИТЬ ДОБАВЛЕНИЕ ВЕЩИ
				},{
					character: 'hero',
					text: '*Котик получает две маленькие пуговки*',
					isEnd: true
				},



				{
					character: 'hero',
					text: '*Тук-тук*'
				}, {
					character: 'hero',
					text: 'Тут кто-то есть?'
				},{
					character: 'hero',
					text: '…'
				}, {
					character: 'hero',
					text: 'Видимо никого нет.',
					isEnd: true
				},

			],
		};

		// Главный герой - первоначальная ориентация и предполагаемое направление движения:
		$('#hero').css('left', heroX + 'px');


		// инициализация объектов сцены
		initSceneObjects();

		// инициализация диалогов сцены:
		for ( let personId in dialogs ) {
			let person = $('#'+personId);
			let personDialog = dialogs[personId];
			person.data('dialog', personDialog);
		};
	};




	$('#medved').data('part', 'one');
	$.fn.initScene_medved = function(sceneX, heroX) {
		$('#scene').css('width', '1500px')

		//----- Определение параметров конкретной сцены. NB! изменить для другой сцены!

		initScene('img/bg/medved_bg.png', 'medved', 'Медведь', sceneX);		// Фон и ID сцены, текст её названия.

		// Персонажи:
		initSceneObject( { objectId: 'medved', leftPos:1195, topPos: 430, value: 4 } );



		if ($('#medved').data('part') == 'one') {
			$('#medved').data('state', 'wait'); // 27-28 48-49 72-73
		}
		else if ($('#medved').data('part') == 'two'){
			$('#medved').data('state', 'readyForDialog');
			if ($('#medved').data('dialogIndex') <= 27)
				$('#medved').data('dialogIndex', 28);
		}
		else if ($('#medved').data('part') == 'three'){
			$('#medved').data('state', 'readyForDialog');
			if (true)                  //TODO: добавить условие на грибы
				$('#medved').data('dialogIndex', 48);
			else
				('#medved').data('dialogIndex', 72);
		}
		else {
			$('#medved').data('state', 'readyForDialog');
			$('#medved').data('dialogIndex', 72);
		}




		// Элементы сцены:
		//initSceneObject( { objectId: 'derevo', leftPos: 0, topPos: 375, value: 0 } );
		initSceneObject( { objectId: 'transition2', leftPos: 25, topPos: 485, value: 0});
		setTransition($('#transition2'), 'perehodHM-1');



		let dialogs = {

			'medved': [
				{
					character: 'hero',
					text: 'Здравствуйте!'
				},{
					character: 'person',
					text: 'ОХ ЕПТ!'
				},{
					character: 'person',
					text: 'ТЫ ЧЕ ПУГАЕШЬ ТО?!'
				},{
					character: 'hero',
					text: 'А? Простите!'
				},{
					character: 'hero',
					text: 'Было же видно, что я захожу…'
				},{
					character: 'person',
					text: 'Ты че думаешь я просто так сижу в очках?'
				},{
					character: 'person',
					text: 'Да ещё и в подвале.'
				},{
					character: 'hero',
					text: 'Ах, простите!'
				},{
					character: 'hero',
					text: 'Я как-то не подумал…'
				},{
					character: 'person',
					text: 'Ага. Все мы не думаем…'
				},{
					character: 'person',
					text: 'Ну ты это, в следующий раз хоть скажи что-то, перед тем, как подойти.'
				},{
					character: 'person',
					text: 'Или топай громче.'
				},{
					character: 'person',
					text: 'Ну короче, не пугай больше…'
				},{
					character: 'hero',
					text: 'Понял! Меня Котик зовут.'
				},{
					character: 'person',
					text: 'Потапов Гризли Михайлович.'
				},{
					character: 'person',
					text: 'Чё пожаловал то?'
				},{
					character: 'hero',
					text: 'А! Я тут немного вещей ищу, можете помочь?'
				},{
					character: 'person',
					text: 'Конечно! Говори что надо.'
				},{
					character: 'hero',
					text: $('#hero').data('thingsNeed')
				},{
					character: 'person',
					text: 'Иголку я тебе точно достану, погуляй ток немного.'
				},{
					character: 'person',
					text: 'Тебе же обычную?'
				},{
					character: 'hero',
					text: 'Ну да, наверное…'
				},{
					character: 'hero',
					text: 'Алиса не уточняла…'
				},{
					character: 'person',
					text: 'Алиса значит…'
				},{
					character: 'person',
					text: 'Ты это, пока я ищу, сгоняй-ка за грибом.'
				},{
					character: 'hero',
					text: 'Грибом?'
				},{
					character: 'person',
					text: 'Ага, давно грибы не ел… А тебе всё равно ждать.',
					implement: "$('#medved').data('part', 'two');"
				},{
					character: 'hero',
					text: 'Хорошо!',
					isEnd: true
				},





				{
					character: 'person',
					text: 'А, ты уже вернулся?'
				},{
					character: 'person',
					text: 'Я пока ещё это… не готов.'
				},{
					character: 'hero',
					text: 'Нет, я просто хотел поболтать.'
				},{
					character: 'person',
					text: 'А, ну давай болтать.'
				},
				{
					character: 'hero',
					text: '',
					isAnswers: true,
					answers: [   // прибавлять до номера реплик
						{
							text: 'Поговорить про работу',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
						}
					]

				},
				{
					character: 'hero',
					text: 'А почему вы живёте в бункере?...'
				}, {
					character: 'person',
					text: 'Бизнес такой…'
				}, {
					character: 'person',
					text: 'Понимаешь, торгую мёдом я…'
				}, {
					character: 'person',
					text: 'А мёд он такой… интересный…'
				},{
					character: 'person',
					text: 'Ну вот и недоброжелателей много.'
				},{
					character: 'person',
					text: 'А в бункере только один вход, так что все гости легко отслеживаются.'
				},{
					character: 'hero',
					text: 'Если так полумать, то правда удобно.'
				},{
					character: 'hero',
					text: 'А какой мёд интрересный?'
				},{
					character: 'person',
					text: 'Ты это… маленький ещё.'
				},{
					character: 'person',
					text: 'Просто знай, что мёд неправильный.'
				},{
					character: 'person',
					text: 'И пробовать его тебе нельзя.'
				},{
					character: 'person',
					text: 'Понял?'
				},{
					character: 'hero',
					text: 'Д-да!'
				},{
					character: 'hero',
					text: 'Ладно, пойду я ваш гриб искать.'
				},{
					character: 'hero',
					text: 'Скоро вернусь.',
					implement: "$('#medved').data('part', 'three');"
				},{
					character: 'person',
					text: 'Бывай.',
					isEnd: true
				},





				{
					character: 'hero',
					text: 'Мистер Гризли!'
				},{
					character: 'hero',
					text: 'Я всё нашёл!'
				},{
					character: 'person',
					text: 'Ооо, молодчина.'
				},{
					character: 'person',
					text: 'Давай сюда'
				},
				{
					character: 'hero',
					text: '',
					isAnswers: true,
					answers: [   // прибавлять до номера реплик
						{
							text: 'Дать обычный',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
						},
						{
							text: 'Дать красный',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 2)"
						},
						{
							text: 'Отдать оба.',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 3)"
						}
					]
				},
				{
					character: 'hero',
					text: '*Котик отдаёт обычный гриб*',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 2)"
				},{
					character: 'hero',
					text: '*Котик отдаёт подозрительный красный гриб*',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 3)"
				},{
					character: 'hero',
					text: '*Котик отдаёт оба гриба*',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 5)"
				},


				{
					character: 'person',
					text: 'Ох, как вкусно пахнет!'
				},{
					character: 'hero',
					text: 'Я рад, что он вам нравится.',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 5)"
				},


				{
					character: 'person',
					text: 'Стоп.'
				},{
					character: 'person',
					text: 'Ты чё, он же ядовитый!'
				},{
					character: 'hero',
					text: 'А вы не говорили, какой вам нужен…',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 2)"
				},


				{
					character: 'person',
					text: 'Ох, ты аж два притащил.'
				},{
					character: 'hero',
					text: 'Ага, но один выглядит подозрительно.'
				},


				{
					character: 'person',
					text: 'Спасибо тебе, маленький друг!'
				},{
					character: 'hero',
					text: 'Да не за что, а вы ашли иголку?'
				},{
					character: 'person',
					text: 'Ясен пень нашёл!'
				},{
					character: 'person',
					text: 'На!',
					implement: "console.log('получил'); $('#hero').data('thingsNeed', " +
						"$('#hero').data('thingsNeed').replace(' и иголка', ''))" //TODO: получение вещи
				},{
					character: 'hero',
					text: '*Котик получает иголку*'
				},{
					character: 'hero',
					text: 'Спасибо!'
				},{
					character: 'person',
					text: 'Сочтёмся! А сейчас иди разберись со своей Алисой.'
				},{
					character: 'person',
					text: 'Дела с ней иметь опасно.',
					implement: "$('#medved').data('part', 'four');"
				},{
					character: 'hero',
					text: 'А? Хорошо…',
					isEnd: true
				},




				{
					character: 'hero',
					text: 'Опять здравствуйте!'
				},{
					character: 'person',
					text: 'Милый дружок.'
				},{
					character: 'person',
					text: 'Я рад, что ты зашёл.'
				},{
					character: 'person',
					text: 'Но дела есть дела.'
				},{
					character: 'hero',
					text: 'Понятно,  удачи!'
				},{
					character: 'person',
					text: 'И тебе!',
					isEnd: true
				},

			]
		};



		// Главный герой - первоначальная ориентация и предполагаемое направление движения:
		$('#hero').css('left', heroX + 'px');

		// инициализация объектов сцены
		initSceneObjects();

		// инициализация диалогов сцены:
		for ( let personId in dialogs ) {
			let person = $('#'+personId);
			let personDialog = dialogs[personId];
			person.data('dialog', personDialog);
		};

	};




	$.fn.initScene_perehodHM = function(sceneX, heroX) {
		$('#scene').css('width', '2250px')

		//----- Определение параметров конкретной сцены. NB! изменить для другой сцены!

		initScene('img/bg/bg4.png', 'perehodHM', 'Переход между хрюшкой и мишкой', sceneX);		// Фон и ID сцены, текст её названия.

		// Персонажи:


		// Элементы сцены:
		//initSceneObject( { objectId: 'derevo', leftPos: 0, topPos: 375, value: 0 } );
		initSceneObject( { objectId: 'transition1', leftPos: 2090, topPos: 460, value: 0});
		setTransition($('#transition1'), 'medved');
		initSceneObject( { objectId: 'transition2', leftPos: 25, topPos: 460, value: 0});
		setTransition($('#transition2'), 'hrustina-1');
		initSceneObject( { objectId: 'transition3', leftPos: 990, topPos: 440, value: 0});
		setTransition($('#transition3'), 'perehodZO-3');


		// Главный герой - первоначальная ориентация и предполагаемое направление движения:
		$('#hero').css('left', heroX + 'px');

		// инициализация объектов сцены
		initSceneObjects();

	};



	$('#ovechka').data('part', 'one');
	$.fn.initScene_ovechka = function(sceneX, heroX) {
		$('#scene').css('width', '2250px')

		//----- Определение параметров конкретной сцены. NB! изменить для другой сцены!

		initScene('img/bg/bg7.png', 'ovechka', 'Начало путешествия', sceneX);		// Фон и ID сцены, текст её названия.

		// Персонажи:
		initSceneObject( { objectId: 'ovechka', leftPos:750, topPos: 455, value: 4 } );


		if ($('#ovechka').data('part') == 'one') {
			$('#ovechka').data('state', 'wait');
		}
		else if ($('#ovechka').data('part') == 'two'){
			$('#ovechka').data('state', 'readyForDialog');
			if ($('#ovechka').data('dialogIndex') <= 20)
			$('#ovechka').data('dialogIndex', 21);
		}
		else {
			$('#ovechka').data('state', 'readyForDialog');
			$('#ovechka').data('dialogIndex', 42);
		}



		// Элементы сцены:
		initSceneObject( { objectId: 'derevo', leftPos: -500, topPos: 375, value: 0 } );
		initSceneObject( { objectId: 'transition1', leftPos: 2090, topPos: 445, value: 0});
		setTransition($('#transition1'), 'perehodZO-2');

		// Диалоги:
		let dialogs = {
			'ovechka': [
				{
					character: 'person',
					text: 'Ты кто?'
				},{
					character: 'hero',
					text: 'Котик.'
				},{
					character: 'hero',
					text: 'Здравствуйте!'
				},{
					character: 'person',
					text: 'Ага, Котик значит. Смотри, у меня есть задание.'
				},{
					character: 'hero',
					text: 'А? Что?'
				},{
					character: 'hero',
					text: 'Прям вот так сразу?'
				},{
					character: 'person',
					text: 'Да, это очень важно!'
				},{
					character: 'person',
					text: 'Ты наверное не знаешь, но я известная в модном мире дама.'
				},{
					character: 'person',
					text: 'Моё имя Мисс Бееатрис!'
				},{
					character: 'person',
					text: 'Мою статью о новых стрижках для модных овечек должны опубликовать в популярном журнале!'
				},{
					character: 'person',
					text: 'И вот мне нужно выбрать обложку для этого номера.'
				},{
					character: 'person',
					text: 'Но на обеих я так хороша…'
				},{
					character: 'person',
					text: 'Поэтому хочу знать мнение простого читателя!'
				},{
					character: 'hero',
					text: '',
					isAnswers: true,
					answers: [   // прибавлять до номера реплик
						{
							text: 'Но я не читаю модные журналы…',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
						},
						{
							text: 'Ого! Я буду рад повлиять на ваш выбор!',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 2)"
						}
					]
				},
				{
					character: 'hero',
					text: 'Но я не читаю модные журналы…',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
				}, {
					character: 'hero',
					text: 'Ого! Я буду рад повлиять на ваш выбор!',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 2)"
				}, {
					character: 'person',
					text: 'Значит стоит начать.'
				}, {
					character: 'person',
					text: 'Возвращайся как выберешь.',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
				},{
					character: 'person',
					text: 'Так держать!',
					implement: "console.log('ok')" //TODO: получение двух постеров
				},{
					character: 'hero',
					text: '*Котик получает две картинки в инвентарь.*',
					implement: "$('#ovechka').data('part', 'two');"
				},{
					character: 'hero',
					text: 'Скоро вернусь!',
					isEnd: true
				},




				{
					character: 'hero',
					text: 'Я готов сказать, какая обложка лучше.'
				},{
					character: 'person',
					text: 'Ох, наконец-то!'
				},{
					character: 'person',
					text: 'И что же ты выберешь?'
				},
				{
					character: 'hero',
					text: '',
					isAnswers: true,
					answers: [   // прибавлять до номера реплик
						{
							text: 'Розовая!',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
						},
						{
							text: 'Голубая!',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 2)"
						}
					]
				},{
					character: 'hero',
					text: 'Розовая!',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
				},{
					character: 'hero',
					text: 'Голубая!'
				},{
					character: 'person',
					text: 'Хмм… Интересный выбор.'
				},{
					character: 'person',
					text: 'Спасибо, что помог.'
				},{
					character: 'hero',
					text: 'Могу ли я тоже попросить у вас кое-что, мисс Бееатрис?'
				},{
					character: 'person',
					text: 'Ух ты, ну попробуй!'
				},{
					character: 'hero',
					text: 'Понимаете, Алиса поручила мне найти несколько вещей…'
				},{
					character: 'person',
					text: 'О, так ты от Алисы!'
				},{
					character: 'hero',
					text: 'Ну да… в общем мне ещё нужны...'
				},{
					character: 'hero',
					text: $('#hero').data('thingsNeed')
				},{
					character: 'person',
					text: 'Так-с, из всего этого, могу тебе отдать кусок ткани!'
				},{
					character: 'person',
					text: 'У меня много разных обрезков, тебе что-то конкретное?'
				},{
					character: 'hero',
					text: "Да нет, пойдёт любой кусочек."
				},{
					character: 'person',
					text: 'Тогда держи!',
					implement: "console.log('ok'); $('#hero').data('thingsNeed', " +
						"$('#hero').data('thingsNeed').replace('Немного ткани,', ''))" // TODO: получение вещей
				},{
					character: 'hero',
					text: '*Котик полчает немного ткани*'
				},{
					character: 'hero',
					text: 'Спасибо вам большое!',
					implement: "$('#ovechka').data('part', 'three');"
				},{
					character: 'person',
					text: 'Да не за что!',
					isEnd: true
				},





				{
					character: 'hero',
					text: 'Мисс Бееатрис!'
				},{
					character: 'person',
					text: 'Котёночек!'
				},{
					character: 'person',
					text: 'Я рада видеть такого милашку, но я сейчас занята!'
				},{
					character: 'person',
					text: 'Извини, потом поговорим.',
					isEnd: true
				},
			],
		};

		// Главный герой - первоначальная ориентация и предполагаемое направление движения:
		$('#hero').css('left', heroX + 'px');


		// инициализация объектов сцены
		initSceneObjects();

		// инициализация диалогов сцены:
		for ( let personId in dialogs ) {
			let person = $('#'+personId);
			let personDialog = dialogs[personId];
			person.data('dialog', personDialog);
		};
	};



	$('#hrustina').data('part', 'one');
	$.fn.initScene_hrustina = function(sceneX, heroX) {
		$('#scene').css('width', '2250px')

		//----- Определение параметров конкретной сцены. NB! изменить для другой сцены!

		initScene('img/bg/bg7.png', 'hrustina', 'Начало путешествия', sceneX);		// Фон и ID сцены, текст её названия.

		// Персонажи:
		initSceneObject( { objectId: 'hrustina', leftPos:750, topPos: 455, value: 4 } );


		if ($('#hrustina').data('part') == 'one') {
			$('#hrustina').data('state', 'wait');
		}
		else {
			$('#hrustina').data('state', 'readyForDialog');
			$('#hrustina').data('dialogIndex', 35);
		}



		// Элементы сцены:

		initSceneObject( { objectId: 'transition1', leftPos: 2090, topPos: 445, value: 0});
		setTransition($('#transition1'), 'perehodHM-2');
		initSceneObject( { objectId: 'transition3', leftPos: 1500, topPos: 445, value: 0});
		setTransition($('#transition3'), 'perehodUS-3');

		// Диалоги:
		let dialogs = {
			'hrustina': [
				{
					character: 'hero',
					text: 'Привет!'
				},{
					character: 'person',
					text: 'Ой, хрюк! Привет.'
				},{
					character: 'person',
					text: 'Новенький что ли?'
				},{
					character: 'hero',
					text: 'Да нет, я тут ненадолго забрёл в ваш лес по делам.'
				},{
					character: 'person',
					text: 'Дела? Тут?'
				},{
					character: 'hero',
					text: 'Ага, долго объяснять…'
				},{
					character: 'hero',
					text: 'Но в общем Алиса послала меня найти пару-тройку вещей.'
				},{
					character: 'hero',
					text: 'Можешь пожалуйста помочь?'
				},{
					character: 'person',
					text: 'А-алиса?!'
				},{
					character: 'person',
					text: 'А ты у нас видимо отчаянный…'
				},{
					character: 'hero',
					text: 'Почему ты так решила?'
				},{
					character: 'person',
					text: 'С Алисой принято иметь дела, только когда совсем нет других варинатов. Хрю.'
				},
				{
					character: 'hero',
					text: '',
					isAnswers: true,
					answers: [   // прибавлять до номера реплик
						{
							text: 'Правда? А я и не знал…',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
						},
						{
							text: 'Ох, видимо я об этом пожалею…',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 2)"
						}
					]
				},
				{
					character: 'hero',
					text: 'Правда? А я и не знал…',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
				},{
					character: 'hero',
					text: 'Ох, видимо я об этом пожалею…',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
				},{
					character: 'hero',
					text: 'Она была очень дружелюбной и обещала помочь.'
				},{
					character: 'hero',
					text: 'Но мне нужна была помощь и она пообещала помочь, так что я не задумываясь согласился.'
				},


				{
					character: 'person',
					text: 'Обещать все подряд могут.'
				},{
					character: 'person',
					text: 'Но уже ничего не поделаешь, так что давай помогу.'
				},{
					character: 'person',
					text: 'Что тебе нужно?'
				},{
					character: 'hero',
					text: $('#hero').data('thingsNeed')
				},{
					character: 'person',
					text: 'Ой, легко!'
				},{
					character: 'person',
					text: '*Хрюшка быстро отрывает одну пуговицу от своего плаща*',
					implement: "$('#pig_img').attr('src', 'img/persons/pig.png')"
				},{
					character: 'person',
					text: 'Хрю! Держи!',
					implement: "console.log('ok'); $('#hero').data('thingsNeed', " +
						"$('#hero').data('thingsNeed').replace('Немного ткани,', ''))" // TODO: получение вещей и изменение картинки
				},{
					character: 'hero',
					text: '*Котик получает большую красную пуговку*'
				},{
					character: 'hero',
					text: 'Что?!'
				},{
					character: 'hero',
					text: 'Вот так просто? Тебе не жалко?'
				},{
					character: 'person',
					text: 'Неа.'
				},{
					character: 'person',
					text: 'Всё равно моя подружка Бееатрисс постоянно шьёт для меня новые наряды.'
				},{
					character: 'person',
					text: 'Да и чем быстрее ты всё найдёшь, тем лучше.'
				},{
					character: 'hero',
					text: 'Ах, понял! Спасибо тебе большое!'
				},{
					character: 'person',
					text: 'Да не за что! Хрю!'
				},{
					character: 'person',
					text: 'Ты, это…'
				},{
					character: 'person',
					text: 'Приходи если что, я тут староста, так что должна всем помогать.',
					implement: "$('#hrustina').data('part', 'two')"
				},{
					character: 'hero',
					text: 'Понял! Ещё раз спасибо!',
					isEnd: true
				},




				{
					character: 'hero',
					text: 'Хрюстина! Привет.'
				},{
					character: 'person',
					text: 'Опять ты?'
				},{
					character: 'person',
					text: 'Уже разобрался со своими делами?'
				},{
					character: 'hero',
					text: 'Ещё нет.'
				},{
					character: 'hero',
					text: 'Просто хотел поболтать.'
				},{
					character: 'person',
					text: 'Тогда иди разбирайся.'
				},{
					character: 'person',
					text: 'Хрю.'
				},{
					character: 'person',
					text: 'В твоей ситуации нечего без дела слоняться.'
				},{
					character: 'hero',
					text: 'А, хорошо...'
				},{
					character: 'hero',
					text: 'Тогда я пойду.'
				},{
					character: 'person',
					text: 'Хрю.',
					isEnd: true
				},
			],
		};

		// Главный герой - первоначальная ориентация и предполагаемое направление движения:
		$('#hero').css('left', heroX + 'px');


		// инициализация объектов сцены
		initSceneObjects();

		// инициализация диалогов сцены:
		for ( let personId in dialogs ) {
			let person = $('#'+personId);
			let personDialog = dialogs[personId];
			person.data('dialog', personDialog);
		};
	};



	$.fn.initScene_perehodZO = function(sceneX, heroX) {
		$('#scene').css('width', '1900px')

		//----- Определение параметров конкретной сцены. NB! изменить для другой сцены!

		initScene('img/bg/bg6.png', 'perehodZO', 'Переход между жабой и овечкой', sceneX);		// Фон и ID сцены, текст её названия.

		// Персонажи:


		// Элементы сцены:
		//initSceneObject( { objectId: 'derevo', leftPos: 0, topPos: 375, value: 0 } );
		initSceneObject( { objectId: 'transition1', leftPos: 1715, topPos: 460, value: 0});
		setTransition($('#transition1'), 'zhaba-2');
		initSceneObject( { objectId: 'transition2', leftPos: 25, topPos: 460, value: 0});
		setTransition($('#transition2'), 'ovechka-1');
		initSceneObject( { objectId: 'transition3', leftPos: 945, topPos: 440, value: 0});
		setTransition($('#transition3'), 'perehodHM-3');


		// Главный герой - первоначальная ориентация и предполагаемое направление движения:
		$('#hero').css('left', heroX + 'px');

		// инициализация объектов сцены
		initSceneObjects();

	};


	$.fn.initScene_perehodUS = function(sceneX, heroX) {
		$('#scene').css('width', '2250px')

		//----- Определение параметров конкретной сцены. NB! изменить для другой сцены!

		initScene('img/bg/medved_bg.png', 'perehodUS', 'Переход между уточкой и совой', sceneX);		// Фон и ID сцены, текст её названия.

		// Персонажи:


		// Элементы сцены:
		//initSceneObject( { objectId: 'derevo', leftPos: 0, topPos: 375, value: 0 } );
		initSceneObject( { objectId: 'transition1', leftPos: 2100, topPos: 480, value: 0});
		setTransition($('#transition1'), 'sova-1');
		initSceneObject( { objectId: 'transition2', leftPos: 25, topPos: 480, value: 0});
		setTransition($('#transition2'), 'utochka-2');
		initSceneObject( { objectId: 'transition3', leftPos: 945, topPos: 465, value: 0});
		setTransition($('#transition3'), 'hrustina-2');


		// Главный герой - первоначальная ориентация и предполагаемое направление движения:
		$('#hero').css('left', heroX + 'px');

		// инициализация объектов сцены
		initSceneObjects();

	};



	$.fn.initScene_sova = function(sceneX, heroX) {
		$('#scene').css('width', '1700px')

		//----- Определение параметров конкретной сцены. NB! изменить для другой сцены!

		initScene('img/bg/bg7.png', 'sova', 'Начало путешествия', sceneX);		// Фон и ID сцены, текст её названия.

		// Персонажи:
		initSceneObject( { objectId: 'sova', leftPos: 1300, topPos: 450, value: 4 } );


		// Элементы сцены:

		initSceneObject( { objectId: 'transition2', leftPos: 25, topPos: 445, value: 0});
		setTransition($('#transition2'), 'perehodUS-1');

		// Диалоги:
		let dialogs = {
			'sova': [
				{
					character: 'person',
					text: '?'
				}, {
					character: 'person',
					text: 'Кто?'
				}, {
					character: 'person',
					text: 'Как?'
				}, {
					character: 'hero',
					text: 'Эээ…'
				}, {
					character: 'hero',
					text: 'Здравствуйте, я Котик!'
				}, {
					character: 'hero',
					text: '"Как?" это наверное как я сюда зашёл?'
				}, {
					character: 'hero',
					text: 'Там висела лестница, и я подумал, что могу зайти.'
				}, {
					character: 'hero',
					text: 'Простите, если смутил вас.'
				}, {
					character: 'hero',
					text: 'Как, кстати, вас зовут?'
				}, {
					character: 'person',
					text: 'Зовут!'
				}, {
					character: 'person',
					text: 'Ольга!'
				}, {
					character: 'person',
					text: 'Сова!'
				}, {
					character: 'person',
					text: 'Зачем?'
				}, {
					character: 'hero',
					text: 'Приятно познакомиться, сова Ольга!'
				}, {
					character: 'hero',
					text: 'Я пришёл, потому что мне нужно найти несколько вещей'
				}, {
					character: 'hero',
					text: 'У меня есть важная цель, и Алиса обещала мне помочь.'
				}, {
					character: 'person',
					text: 'АЛИСА!!!'
				}, {
					character: 'hero',
					text: 'Да…'
				}, {
					character: 'hero',
					text: 'Так можно попросить у вас что-нибудь из нужных вещей?'
				}, {
					character: 'person',
					text: 'Быстрее!'
				}, {
					character: 'hero',
					text: 'А, конечно!'
				}, {
					character: 'hero',
					text: $('#hero').data('thingsNeed')
				}, {
					character: 'person',
					text: '*роется в куче мусора рядом*',
					implement: "console.log('получил'); $('#hero').data('thingsNeed', $('#hero').data('thingsNeed').replace(' шнурок,', ''))" // TODO: ДОБАВИТЬ ДОБАВЛЕНИЕ ВЕЩИ
				}, {
					character: 'hero',
					text: '*Котёнок получает шнурки*'
				}, {
					character: 'person',
					text: 'Брать!',
				}, {
					character: 'person',
					text: 'Уходить!',
				}, {
					character: 'hero',
					text: 'Спасибо большое!',
				}, {
					character: 'hero',
					text: 'Простите, я правда не хотел вас тревожить!',
					isEnd: true,
					isHasAnswer: false,
					condition: '',
					implement: '' // TODO: Запретить вход
				}
			],
		};

		// Главный герой - первоначальная ориентация и предполагаемое направление движения:
		$('#hero').css('left', heroX + 'px');


		// инициализация объектов сцены
		initSceneObjects();

		// инициализация диалогов сцены:
		for ( let personId in dialogs ) {
			let person = $('#'+personId);
			let personDialog = dialogs[personId];
			person.data('dialog', personDialog);
		};
	};

	$('#utochka').data('part', 'one');
	$.fn.initScene_utochka = function(sceneX, heroX) {
		$('#scene').css('width', '2250px')

		//----- Определение параметров конкретной сцены. NB! изменить для другой сцены!

		initScene('img/bg/bg7.png', 'utochka', 'Начало путешествия', sceneX);		// Фон и ID сцены, текст её названия.

		// Персонажи:
		initSceneObject( { objectId: 'utochka', leftPos: 1100, topPos: 450, value: 4 } );


		// Элементы сцены:
		initSceneObject( { objectId: 'ut_dom', leftPos: 500, topPos: 200, value: 20 } );

		//if ($('#utochka').data('part') != 'one') {
			initSceneObject({objectId: 'transition1', leftPos: 2100, topPos: 445, value: 0});
			setTransition($('#transition1'), 'perehodUS-2');


		// Диалоги:
		let dialogs = {
			'utochka': [
				{
					character: 'person',
					text: 'ОЙ!!!'
				}, {
					character: 'person',
					text: 'Ты кто такой? И зачем ты сюда зашёл?!'
				}, {
					character: 'hero',
					text: 'Здравствуйте! Я Котик, и я не хотел вас пугать.'
				}, {
					character: 'person',
					text: 'А я Алиса, и допустим, что я тебе поверю.  Чего пришёл то?'
				},



				{
					character: 'hero',
					text: '',
					isAnswers: true,
					answers: [   // прибавлять до номера реплик
						{
							text: 'Объяснить сиутацию',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
						},
						{
							text: 'Мне нужна игрушечная мышка.',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 2)"
						}
					]
				},



				{
					character: 'hero',
					text: 'Понимаете…',
					implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 3)"
				},


				{
					character: 'hero',
					text: 'Мне нужна игрушечная мышка.'
				},{
					character: 'hero',
					text: '…'
				},{
					character: 'hero',
					text: 'че?'
				},



				{
					character: 'hero',
					text: 'Моя мама посчитала, что я уже достаточно взрослый…'
				}, {
					character: 'hero',
					text: 'И поэтому отправила меня искать смысл жизни.'
				}, {
					character: 'person',
					text: 'А игрушечная мышь тут при чём?'
				}, {
					character: 'hero',
					text: 'Ну…'
				}, {
					character: 'hero',
					text: 'Когда я спросил, где мне искать смысл жизни, она ответила:'
				}, {
					character: 'hero',
					text: '"Хе-хе, думаю он будет идти в комплекте с твой личной игрушечной мышкой"'
				}, {
					character: 'hero',
					text: 'Вот я и ищу мышку.'
				}, {
					character: 'person',
					text: 'Вау…'
				}, {
					character: 'person',
					text: 'Я мало что не поняла, но если тебе нужна игрушка в виде мыши…'
				}, {
					character: 'person',
					text: 'то я тебе помогу!'
				}, {
					character: 'hero',
					text: 'Ух ты! Спасибо большое!'
				}, {
					character: 'person',
					text: 'Правда это будет не бесплатно, но с этим разберёмся потом.'
				}, {
					character: 'hero',
					text: 'Не бесплатно?.. Но мне нечего…'
				}, {
					character: 'person',
					text: 'Я же сказала, потом разберёмся!'
				}, {
					character: 'person',
					text: 'Значит так…'
				},{
					character: 'person',
					text: 'Тут рядом ты сможешь найти ещё 6 небольших домиков.'
				},{
					character: 'person',
					text: 'Нам нужно немного хлама,  поэтому попробуй поискать его у владельцев домиков.'
				},



				{
					character: 'hero',
					text: '',
					isAnswers: true,
					answers: [   // прибавлять до номера реплик
						{
							text: 'Ох, а точно?',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 1)"
						},
						{
							text: 'Ладно…',
							implement: "person.data('dialogIndex', person.data('dialogIndex' ) + 4)"
						}
					]
				},





				{
					character: 'hero',
					text: 'Ох, а для этого точно нужно тревожить других владельцев домиков?'
				},{
					character: 'person',
					text: 'Хи-хи, а меня ты не постеснялся потревожить.'
				},{
					character: 'person',
					text: 'Не боись, они вполне себе дружелюбные.'
				},


				{
					character: 'hero',
					text: 'Ладно, я понял…'
				}, {
					character: 'person',
					text: 'Запомни, нам нужно: немного ткани, шнурок, две пуговки поменьше, одна пуговка побольше, нитки и иголка!'
				},{
					character: 'hero',
					text: 'Всё запомнил. Но…'
				},{
					character: 'person',
					text: 'Тогда топай! Жду со всем готовым.'
				},{
					character: 'person',
					text: 'И последнее, чтобы дело шло быстрее - говори, что от меня.',
					isEnd: true
				},




				{
					character: 'person',
					text: 'Ну что, всё принёс?'
				}, {
					character: 'hero',
					text: 'Если честно, ещё не всё…'
				}, {
					character: 'person',
					text: 'Зачем пришёл тогда…'
				}, {
					character: 'person',
					text: 'Иди отсюда.',
					isEnd: true
				},




				{
					character: 'hero',
					text: 'Алиса!'
				},{
					character: 'hero',
					text: 'Я смог всё найти!'
				},{
					character: 'person',
					text: 'О! А ко мне уже приходили гости.'
				},{
					character: 'person',
					text: 'Рассказывали, каким милым и дружелюбным оказался присланный мной котёночек,  хи-хи.'
				},{
					character: 'hero',
					text: 'Ого! Я тоже был очень рад со всеми познакомиться.'
				},{
					character: 'person',
					text: 'И как тебе жители нашей чащи?'
				},{
					character: 'hero',
					text: 'Все такие милые! Мне бы хотелось пообщатьс со всеми побольше.'
				},





				{
					character: 'hero',
					text: 'Алиса!'
				},{
					character: 'hero',
					text: 'Я смог всё найти!'
				},{
					character: 'person',
					text: 'Ага, знаю.'
				},{
					character: 'person',
					text: 'Ко мне приходили некоторые владельцы домиков и рассказывали, каким интересным ты оказался.'
				},{
					character: 'hero',
					text: 'Интересным?'
				},{
					character: 'person',
					text: 'Слишком честным и упрямым…'
				},{
					character: 'hero',
					text: 'Ой…'
				},{
					character: 'hero',
					text: 'Я не хотел никого обидеть…'
				},{
					character: 'person',
					text: 'Да, да, мы все поняли.'
				},









				{
					character: 'person',
					text: 'Чтож, давай сюда всё, что нашёл.'
				},{
					character: 'hero',
					text: '*отдаёт всё что нужно*'
				},{
					character: 'person',
					text: 'Отлично.'
				},{
					character: 'person',
					text: '*копошится*'
				},{
					character: 'person',
					text: '…'
				},{
					character: 'person',
					text: '*суетится*'
				},{
					character: 'person',
					text: '…'
				},{
					character: 'person',
					text: 'Держи!'
				},{
					character: 'hero',
					text: '*Котик получает игрушечную мышку*'
				},{
					character: 'hero',
					text: 'А?'
				},{
					character: 'hero',
					text: 'Ты просто сшила мышку?!'
				},{
					character: 'person',
					text: 'Тебе нужна была мышка - я её сделала.'
				},{
					character: 'person',
					text: 'Что не так?'
				},{
					character: 'hero',
					text: 'Но…'
				},{
					character: 'hero',
					text: 'Мне казалось, что это будет как-то по-другому…'
				},{
					character: 'hero',
					text: 'Может тебе стоило ещё поколдовать?'
				},{
					character: 'hero',
					text: 'Потому что я не чувствую, что понял смысл жизни…'
				},{
					character: 'person',
					text: 'Для игрушки волшебство не нужно.'
				},{
					character: 'person',
					text: 'А смысл я тебе и не обещала, хи-хи.'
				},




				{
					character: 'person',
					text: 'Зато теперь ты сможешь испольнить своё желание!'
				},{
					character: 'person',
					text: 'И пообщаться со всеми ещё немного!'
				},





				{
					character: 'person',
					text: 'Хотя…'
				},{
					character: 'person',
					text: 'Раз ты у нас честный котёночек, то скажу тебе честно.'
				},{
					character: 'person',
					text: 'Придётся здесь задержаться и раздать всем долги.'
				},




				{
					character: 'hero',
					text: 'Что? Почему?'
				},{
					character: 'person',
					text: 'Понимаешь, у нас тут строгие бартерные отношения.'
				},{
					character: 'person',
					text: 'И на деле, ты просто взял у всех что-то.'
				},{
					character: 'person',
					text: 'Теперь нужно что-то отдать или сделать взамен.'
				},{
					character: 'hero',
					text: 'Ох, а почему ты не сказала это сразу?'
				},{
					character: 'person',
					text: 'Тогда было бы не настолько интересно!'
				},{
					character: 'person',
					text: 'Хи-хи!'
				},{
					character: 'hero',
					text: 'Эх…'
				},{
					character: 'hero',
					text: 'Сейчас я наконец понял, что имела ввиду Хрюстина.'
				},{
					character: 'hero',
					text: 'Ладно, раз уж такие правила.'
				},{
					character: 'person',
					text: 'Ну вот мы и нашли тебе смыл жизни на ближайшие пару дней, хи-хи',
					isEnd: true
				},




				{
					character: 'hero',
					text: 'Простите, я правда не хотел вас тревожить!',
					isEnd: true,
					isHasAnswer: false,
					condition: '',
					implement: '' // TODO: Запретить вход
				}
			],
		};

		// Главный герой - первоначальная ориентация и предполагаемое направление движения:
		$('#hero').css('left', heroX + 'px');


		// инициализация объектов сцены
		initSceneObjects();

		// инициализация диалогов сцены:
		for ( let personId in dialogs ) {
			let person = $('#'+personId);
			let personDialog = dialogs[personId];
			person.data('dialog', personDialog);
		};
	};



	//----------------------------------------------------------------------------------------------------------
	//------------------------------------------ функции, используемые при инициализации сцены:


	//------------------------------------------
	// правильные параметры для значка перехода по сценам
	function setTransition(idTransition, toScene) {
		$(idTransition).attr('class', 'sceneObj');
		$(idTransition).addClass('transition');
		$(idTransition).addClass(toScene);
	}


	//------------------------------------------
	// инициализация фона, скрытие ненужных объектов сцены, присвоение div-у сцены соответствующего класса, обнуление прогресса в рамках сцены:
	function initScene(bgFile, sceneClass, sceneNameText, sceneLeft) {

		// название сцены:
		$('#scene').data('sceneText', sceneNameText);

		// скрыли ненужные объекты сцены:
		$('#scene .sceneObj').hide();

		// изображение для фонового слоя сцены:
		$('#scene').css('background-image', 'url('+bgFile+')');

		// позиционирование фонового слоя:
		let rpgWidth = $('#rpg').width();
		let bgImgWidth = $('#scene').width();
		let sceneBgLeft = sceneLeft;

		$('#scene').css( 'left', sceneBgLeft );
		$('#scene').addClass(sceneClass);

		// показатели прогресса игры в целом и текущей сцены:
		// обнуляем показатели сцены:
		$('#rpg').data('sceneScore', 0);
		$('#rpg').data('personScore', 0);
		$('#rpg').data('toolsScore', 0);

	}; 	// initScene()

	//------------------------------------------
	// инициализация объектов сцены
	function initSceneObjects() {
		$('#scene .sceneObject').hide();
		$('#scene .person').data('state', 'wait');
	}		// initSceneObjects()

	//------------------------------------------
	// инициализация конкретного объекта сцены:
	function initSceneObject(params) {

		let objectId = params.objectId;
		let leftPos = params.leftPos;
		let topPos = params.topPos;
		let value = params.value;

		let sceneObject = $('#' + objectId);

		sceneObject.fadeIn(30).css('left', leftPos+'px').css('top', topPos+'px');
		sceneObject.data('value', value);
		sceneObject.attr('title', sceneObject.attr('name'));
	};  	// initSceneObject()

})	// $(document).ready  
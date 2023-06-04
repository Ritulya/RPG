$(document).ready ( function() {

    let imgDir = 'img/';

    initGame();
    initHero();
    initToolsPanel();

    //-------
    function initGame() {
        $('#rpg').data('rpgScore', 0);	// наращивается от сцены к сцене
        $('#rpg').data('sceneScore', 0);	// изменяется в рамках сцены при действиях с персонажами и инструментами
        $('#rpg').data('toolsScore', 0);	// изменяется в рамках сцены при действиях с инструментами
        $('#rpg').data('personScore', 0); // изменяется в рамках сцены при действиях с персонажами
    }

    //-------
    function initHero() {
        let rpgWidth = $('#rpg').width();
        let position = 0 + 'px';
        $('#hero').css('left', position);
    }

    //-------
    function initDialogMarks() {
        $('#scene .person').append(`<img class="dialogMark" src="${imgDir}icons/dialod-mark.png" />`);
    }

    //-------
    function initToolsPanel() {
        /*	$('#toolsPanel .tool').each ( function() {

            });*/
    }


})	// $(document).ready  
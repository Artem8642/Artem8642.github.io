let level = ''
let gameCrosser = 0
let under
let game = prompt('В какую игру ты играешь?', 'название игры');
if (game == 'CS:GO' || game == 'кс го' || game == 'кс' || game == 'контр страйк' || game == 'counter strike' || game == 'cs:go' || game == 'CS GO' || game == 'cs go'){
    level = confirm(' Твое звание выше чем silver?');
    if (level == true){
       alert (' Ты хорошо играешь в CS:GO');
    }
    else {
        alert('Старайся лучше играть');
    }
}
if (game == 'Minecraft' || game == 'minecraft' || game == 'майнкрафт'){
	gameCrosser = confirm('Ты добывал больше 32 алмазов?');
    if (gameCrosser == true){
		gameCrosser = confirm('Ты играешь больше года?');
	   if (gameCrosser == true){
		   gameCrosser = confirm('Использовал(а) читы?');
	   if (gameCrosser == true){
       alert ('Очень нехороший поступок! Исправляйся!');
    }
	else {
        alert('Ты очень хороший игрок!');
	}
	   }
	   else {
		   gameCrosser = confirm('Использовал(а) читы?');
		if (gameCrosser == true){
       alert (' Пока не поздно, удаляй читы!');
		}
		else {
        alert('Да ты везуч(ая)!');
    }
	
	   }
	} 
    else {
        alert('копайся на 11 и меньше высоте');
    }
}
if (game == 'Undertale' || game == 'undertale' || game == 'андертейл' || game == 'Андертейл'){
     under = confirm('ты проходил(а) игру Undertale?');
	   if (under == true){
    let undertale0 = prompt('На какую концовку?(писать по русски маленькими буквами)');
	if (undertale0 == 'пафицист'){
       alert ('Видно мирность - это твоя заслуга!');
    }
	else {
		if (undertale0 == 'геноцид'){
			
        alert('БЕЗУМИЕ');
		
		}
		else {
		if (undertale0 == 'натурал'){
			alert ('Это просто стандартное прохождение игры');
		}
	}
	   }
	   }
    else {
        alert('Удачи в прохождении!');
    }
}
import React from "react";
import './app-info.css';

function AppInfo({data}){

    let partyArr = [];
    data.forEach(item => {
        if(item.party){
            partyArr.push(item.name);
        }
    });

    let partyCharacters = "";
    if(partyArr.length > 4){
        alert("Отряд не может содержать более 4 персонажей!");
    }
    if(partyArr.length){
        partyCharacters = partyArr.join(', ');
    } else {
        partyCharacters = 'пока никого нет';
    }

    return(
        <div className='app-info'>
            <h1 id="title">Мои персонажи в Genshin Impact</h1>
            <h4 id="character-number">Общее число персонажей: {data.length}</h4>
            <h4 id="character-party">Персонажи в отряде: {partyCharacters}</h4>
        </div>
    );
}

export default AppInfo;
import React from "react";
import './app-filter.css';

function AppFilter(props) {

    const buttonData = [
        {name: 'all', label: 'Все персонажи'},
        {name: 'krio', label: 'Крио'},
        {name: 'dendro', label: 'Дендро'},
        {name: 'anemo', label: 'Анемо'},
        {name: 'piro', label: 'Пиро'},
        {name: 'geo', label: 'Гео'},
        {name: 'gidro', label: 'Гидро'},
        {name: 'electro', label: 'Электро'}
    ];

    const buttons = buttonData.map(({name, label}) => {
        const active = props.value === name;
        const buttonClass = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                className={`btn ${buttonClass}`}
                type="button"
                key={name}
                onClick={() => props.onFilterCharacter(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );

}

export default AppFilter;
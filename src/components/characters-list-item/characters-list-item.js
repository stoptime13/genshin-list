import React from "react";
import './characters-list-item.css';
import DropdownMenu from "../dropdown-menu/dropdown-menu";

function CharactersListItem(props)  {

    const {name, value, party, onDelete, partyBandOn} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (party) {
        classNames += ' party';
    }


    return (
        <li className={classNames}>
            <span className="list-group-item-label">{name}</span>
            <DropdownMenu value={value}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <button type="button"
                        className="btn-star btn-sm "
                        onClick={partyBandOn}>
                    <i  className="fa-solid fa-meteor"></i>
                </button>
            </div>
        </li>
    );

}

export default CharactersListItem;
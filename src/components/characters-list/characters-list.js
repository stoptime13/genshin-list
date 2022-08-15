import React from "react";
import CharactersListItem from "../characters-list-item/characters-list-item";
import EmptyList from "../empty-list/empty-list";
import "./characters-list.css";

function CharactersList({data, onDelete, partyBandOn}){
    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <CharactersListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                partyBandOn={() => partyBandOn(id)}/>
        );
    });

    return(
        <ul className="app-list list-group">
            {data.length === 0 ? <EmptyList/> : elements}
        </ul>
    );
}

export default CharactersList;
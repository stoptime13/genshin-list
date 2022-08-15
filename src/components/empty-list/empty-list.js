import React from "react";
import './empty-list.css';


function EmptyList() {
    return (
        <li>
            <div className='list-group-item-empty'>
                <h4>Список персонажей пуст!</h4>
            </div>
        </li>
    );
}

export default EmptyList;
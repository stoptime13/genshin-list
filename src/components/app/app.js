import React, {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import CharactersList from "../characters-list/characters-list";
import CharactersAddForm from "../characters-add-form/characters-add-form";

import './app.css';


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Кэ Цин', value: 'electro', party: false, id: 1},
                {name: 'Син Цю', value: 'gidro', party: false, id: 2},
                {name: 'Сахароза', value: 'anemo', party: false, id: 3},
                {name: 'Чжун Ли', value: 'geo', party: false, id: 4 }
            ],
            findStr: '',
            value: 'all'
        }
        this.maxId = 5;
    }

    deleteCharacter = (id) => {
        this.setState(({data}) => {
            console.log(data.filter(item => item.id !== id));
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addCharacter = (name, value) => {
        const newCharacter = {
            name: name,
            value: value,
            party: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            return{
                data: [...data, newCharacter]
            }
        })
    }

    partyBandOn = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const newItem = {...data[index], party: !data[index].party};
            const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)];

            return{
                data: newArr
            }
        })
    }

    searchCharacters = (items, findStr) => {
        if(findStr.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(findStr) > -1;
        })
    }

    onUpdateSearch = (findStr) => {
        this.setState({findStr});
    }

    filterCharacter = (items, value) => {
        if(value !== 'all'){
            return items.filter(item => item.value === value);
        }
        else {
            return items;
        }
    }

    onFilterCharacter = (value) => {
        this.setState({value});
    }

    render() {
        const {data, findStr, value} = this.state;
        const filterData = this.filterCharacter(this.searchCharacters(data, findStr), value);

        return (
            <div className='app'>
                <AppInfo data={data}/>

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        value={value}
                        onFilterCharacter={this.onFilterCharacter}/>
                </div>

                <CharactersList
                    data={filterData}
                    onDelete={this.deleteCharacter}
                    partyBandOn={this.partyBandOn}/>
                <CharactersAddForm
                    addCharacter={this.addCharacter}/>
            </div>
        );
    }
}

export default App;
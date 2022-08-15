import React, {Component} from "react";
import "./characters-add-form.css";
import DropdownMenu from "../dropdown-menu/dropdown-menu";

class CharactersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: ''
        }
    }

    addNewCharacter = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitCharacter = (event) => {
        event.preventDefault();
        console.log(this.state.value);
        const {name, value} = this.state;

        if(name === ''){
            alert('Пожалуйста, введите имя персонажа!');
        } else if(value === ''){
            alert('Пожалуйста, выберите Глаз Бога!');
        }else{
            this.props.addCharacter(name, value);
        }

        this.setState({
            name: '',
            value: ''
        });

    }

    dropdownValue = (event) => {
        this.setState({
            value: event.target.value
        });
    }


    render() {
        const {name, value} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового персонажа</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.submitCharacter}>

                    <input
                        type="text"
                        className="form-control new-post-label"
                        name="name"
                        value={name}
                        placeholder="Имя персонажа"
                        onChange={this.addNewCharacter}/>

                    <div className="input-group mb-3">
                        <select
                            className="custom-select"
                            id="inputGroupSelect01"
                            value={value}
                            onChange={this.dropdownValue}>
                            <option disabled hidden value="">Глаз бога</option>
                            <option value="electro">Электро</option>
                            <option value="piro">Пиро</option>
                            <option value="gidro">Гидро</option>
                            <option value="geo">Гео</option>
                            <option value="dendro">Дендро</option>
                            <option value="anemo">Анемо</option>
                            <option value="krio">Крио</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-light">Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default CharactersAddForm;
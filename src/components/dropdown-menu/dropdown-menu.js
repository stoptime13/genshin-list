import React, {Component} from "react";
import "./dropdown-menu.css";

class DropdownMenu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    dropdownValue = (event) => {
        this.setState({
            value: event.target.value
        });
    }


    render() {
        const {value} = this.state;

        return (
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
        );
    }
}

export default DropdownMenu;
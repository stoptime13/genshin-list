import React, {Component} from "react";
import './search-panel.css';

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            findStr: ''
        }
    }

    onUpdateSearch = (event) => {
        const findStr = event.target.value;
        this.setState({findStr});

        this.props.onUpdateSearch(findStr);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти персонажа"
                value={this.state.findStr}
                onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;
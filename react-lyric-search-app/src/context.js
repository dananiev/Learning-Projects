import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        track_list: [],
        heading: 'Top 5 Tracks'
    };

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1&apikey=69a223326cc31d042b1f84ddcc35f7da`)
            .then(res => {
                // console.log(res.data)
                this.setState({ track_list: res.data.message.body.track_list });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    };
}

export const Consumer = Context.Consumer;

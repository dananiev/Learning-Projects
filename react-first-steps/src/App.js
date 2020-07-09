import React from 'react';
import { render } from 'react-dom';
// import UserInfo from './UserInfo';
// import LogInButton from './LogInButton';
// import LogOutButton from './LogOutButton';
// import Greeting from './Greeting';
// import BoilingVerdict from './BoilingVerdict';
// import TemperatureInput from './TemperatureInput';

// // COMPOSING COMPONENTS
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }
// export default Welcome;



// function formatDate(date) {
//     return date.toLocaleDateString();
// }

// function Comment(props) {
//     return (
//         <div className='Comment'>
//             <UserInfo user={props.author} />
//             <div class='Comment-text'>{props.text}</div>
//             <div class='Comment-date'>{formatDate(props.date)}</div>
//         </div>
//     );
// }
// export default Comment;



// //STATE AND LIFECYCLE
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(), 
//             1000
//         )
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID)
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Big Ben</h1>
//                 <h2>{this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }
// }
// export default Clock



// HANDLING EVENTS
// function ActionLink() {
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('The link was clicked');
//     }

//     return (
//         <a href='#' onClick={handleClick}>Click me</a>
//     );
// }
// export default ActionLink;



// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};

//         // This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(state => ({
//             isToggleOn: !state.isToggleOn
//         }));
//     }

//     render() {
//         return(
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
// export default Toggle;



// class LogInControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLogInClick = this.handleLogInClick.bind(this);
//         this.handleLogOutClick = this.handleLogInClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }

//     handleLogInClick() {
//         this.setState({isLoggedIn: true});
//     }

//     handleLogOutClick() {
//         this.setState({isLoggedIn: false});
//     }

//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;

//         if (isLoggedIn) {
//             button = <LogOutButton onClick={this.handleLogOutClick} />;
//         } else {
//             button = <LogInButton onClick={this.handleLogInClick} />
//         }

//         return(
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         );
//     }
// }
// export default LogInControl;



// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello</h1>
//             { unreadMessages.length > 0 && 
//                 <h2>
//                     {unreadMessages.length} unread messages.
//                 </h2>
//             }
//         </div>
//     );
// }
// export default Mailbox


// function WarningBanner(props) {
//     if (!props.warn) {
//         return null
//     }

//     return (
//         <div className='warning'>Warning</div>
//     )
// }
// export default WarningBanner;


// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => 
//         <li key={number.toString()}>
//             {number}
//         </li>
//     );

//     return (
//         <ul>{listItems}</ul>
//     );
// }
// export default NumberList;


// function Blog(props) {
//     const sidebar = (
//         <ul>
//             {props.posts.map((post) => 
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             )};
//         </ul>
//     );

//     const content = props.posts.map((post) => 
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );

//     return (
//         <div>
//             {sidebar}
//             <hr />
//             {content}
//         </div>
//     );
// }
// export default Blog


// FORMS
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }
  
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type='text' value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type='submit' value='Submit' />
//             </form>
//         );
//     }
// }
// export default NameForm;


// class EssayForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'Please write an essay about your favorite DOM element.'};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }


//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert('An essay was submitted: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Essay:
//                     <textarea value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type='submit' value='Submit' />
//             </form>

//         );
//     }
// }
// export default EssayForm;


// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'coconut'};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert('Your favourite flavor is: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Favorite flavor
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value='grapefruit'>Grapefruit</option>
//                         <option value='lime'>Lime</option>
//                         <option value='coconut'>Coconut</option>
//                         <option value='mango'>Mango</option>
//                     </select>
//                 </label>
//                 <input type='submit' value='Submit' />
//             </form>
//         );
//     }
// }
// export default FlavorForm;

// class Reservation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2
//         }
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.name === 'isGoing' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         });
//     }

//     render() {
//         return (
//             <form>
//                 <label>
//                     Is going:
//                     <input name='isGoing' type='checkbox' checked={this.state.isGoing} onChange={this.handleInputChange} />
//                 </label>
//                 <br />
//                 <label>
//                     Number of guests:
//                     <input name='numberOfGuests' type='number' value={this.state.numberOfGuests} onChange={this.handleInputChange} />
//                 </label>
//             </form>
//         );
//     }
// }
// export default Reservation;



// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) return '';
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }


// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//         this.state = {temperature: '', scale: 'c'};
//     }

//     handleCelsiusChange(temperature) {
//         this.setState({scale: 'c', temperature});
//     }

//     handleFahrenheitChange(temperature) {
//         this.setState({scale: 'f', temperature});
//     }

//     render() {
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//         const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//         return (
//             <div>
//                 <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
//                 <TemperatureInput scale='f' temperatue={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
//                 <BoilingVerdict celsius={parseFloat(celsius)} />
//             </div>
//         );
//     }
// }
// export default Calculator;



// COMPOSITION VS INHERITANCE
// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//     );
// }
// export default FancyBorder;

// function SplitPane(props) {
//     return(
//         <div className='SplitPane'>
//             <div classname='SplitPane-left'>
//                 {props.left}
//             </div> 
//             <div className='SplitPane-right'>
//                 {props.right}
//             </div>
//         </div>
//     );
// }
// export default SplitPane;
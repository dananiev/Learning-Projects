import React from 'react';
import ReactDOM from 'react-dom';
// import Welcome from './App';
// import Comment from './App';
// import Clock from './App';
// import ActionLink from './App';
// import Toggle from './App';
// import LogInControl from './App';
// import Mailbox from './App';
// import WarningBanner from './App';
// import NumberList from './App';
// import Blog from './App';
// import NameForm from './App';
// import EssayForm from './App';
// import FlavorForm from './App';
// import Reservation from './App';
// import Calculator from './App';
// import FancyBorder from './App';
// import SplitScreen from './SplitScreen';
import Dialog from './Dialog';
import './style.css';

// // COMPOSING COMPONENTS
// function App() {
//   return (
//       <div>
//           <Welcome name='Daniel' />
//           <Welcome name='Scott' />
//           <Welcome name='Daria' />
//       </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//       name: 'Hello Kitty',
//       avatarUrl: 'https://placekitten.com/g/64/64'
//   }
// };

// ReactDOM.render(
//   <Comment 
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
//   document.getElementById('root')
// );


// //STATE AND LIFECYCLE
// function Experiment() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ReactDOM.render(
//   <Experiment />,
//   document.getElementById('root')
// );



// HANDLING EVENTS
// ReactDOM.render(
//   <ActionLink />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );


// const messages = ['React', 'Re: React', 'Re:Re: React']; 
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );



// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true};
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState(state => ({
//       showWarning: !state.showWarning
//     }));
//   }

//   render() {
//     return (
//       <div>
//           <WarningBanner warn={this.state.showWarning} />
//           <button onClick={this.handleToggleClick}>
//               {this.state.showWarning ? 'Hide' : 'Show'}
//           </button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// );


// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );


// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm'}
// ];
// ReactDOM.render(
//     <Blog posts={posts} />,
//     document.getElementById('root')
// );


// FORMS
// ReactDOM.render(
//     <EssayForm />,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <FlavorForm />,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <Reservation />,
//     document.getElementById('root)
// );

// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('root')
// )


// COMPOSITION VS INHERITANCE
// function WelcomeDialog() {
//     return (
//         <Dialog title='Welcome' message='Please take a seat' />
//     );
// }

// ReactDOM.render(
//     <WelcomeDialog />,
//     document.getElementById('root')
// );


// ReactDOM.render(
//     <SplitScreen />,
//     document.getElementById('root')
// );
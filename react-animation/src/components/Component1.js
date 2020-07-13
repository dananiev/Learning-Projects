import React from 'react';
import {useSpring, animated} from 'react-spring';

export default function Component1() {
    const props = useSpring({ opacity: 1, from: {opacity: 0}}, { marginTop: 0, from: {marginTop: -500}});

    return (
        <animated.div style={props}>
            <div className='c1Style'>
                <h1>Component 1</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </animated.div>
    );
}
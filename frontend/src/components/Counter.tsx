import React from 'react';

interface IProps {
    initial?: number;
}

export const Counter: React.FC<IProps> = ({ initial = 0 }) => {
    const [counter, setCounter] = React.useState(initial);

    return (
        <>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Up</button>
        </>
    );
};

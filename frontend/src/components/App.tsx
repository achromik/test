import React from 'react';
import { Header } from 'Components/Header';
import { Counter } from 'Components/Counter';

const App: React.FC = () => {
    return (
        <div>
            <Header title="test" />
            Test
            <Counter />
            <Counter initial={100} />
        </div>
    );
};

export default App;

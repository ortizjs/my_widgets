import React from 'react';
import ReactDOM from 'react-dom';

// import 
class Root extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}
{/* <Root>

</Root> */}

document.addEventListener('DOMContentLoaded', function() {
    // const root = document.querySelector('#root');
    const root = document.getElementById('main')
    ReactDOM.render(<Root />, root);
});

//Stuff to be added here for Saturday 
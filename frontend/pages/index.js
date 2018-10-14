
// next.js will import
// import React from 'react';

// full react component
/*
class Home extends React.Component {
    render() {
        return <p>hey!</p>
    }
}
*/

// stateless functional component

const Home = props => (
    <div>
        <p>Hey</p>
    </div>
);

export default Home;
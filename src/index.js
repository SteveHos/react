import React from 'react'; 
import ReactDOM from 'react-dom';
import './styles/styles.css'

import Header from './componets/header'
import NewsList from './componets/news_list'

const App = () => {
    return(
        <>
            <Header />
            <NewsList />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
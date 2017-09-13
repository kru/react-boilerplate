import React , { Component } from 'react';
import ReactDOM from 'react-dom';

import styles  from './style.scss';

class App extends Component {
    render() {
        return(
            <div styleName={styles.app}>
                <p styleName={styles.div}>Hello world</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
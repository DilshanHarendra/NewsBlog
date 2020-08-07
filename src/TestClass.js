import React, {Component} from 'react';

class TestClass extends Component {
    componentDidMount() {
        console.log("test Class")
    }

    render() {
        return (
            <div>
                Test class
            </div>
        );
    }
}

export default TestClass;
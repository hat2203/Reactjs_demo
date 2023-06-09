import React from "react";

export default class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age:18
        }
        this.incrementAge = this.incrementAge.bind(this);
        this.incrementAgeDown = this.incrementAgeDown.bind(this);
    }

    incrementAge() {
        const age = this.state.age;
        this.setState({
            age: age + 1
        })
    }

    incrementAgeDown() {
        const age = this.state.age;
        this.setState({
            age: age -1
        })
    }


    render() {
        const student_name = this.props.name;
        const mark = this.props.mark;
        const tts = this.props.telephone;
        const age = this.state.age;
        return (
            <div>
                <h1>{student_name}</h1>
                <h2>Mark: {mark}</h2>
                <h3><button onclick={this.incrementAgeDown}>-</button> Age: {age} <button onclick={this.incrementAge}>+</button></h3>
                <h3>Danh sach so dien thoai</h3>
                <ul>
                    {
                        tts.map((v, k) => {
                            return (<li key={k}>{v}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}
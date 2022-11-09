import React, { Component } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Bo',
            toSmokeItems: [
                { action: 'Your cigars', done: false },
            ],
            newToSmoke: '',
        };
    }

    updateValue = (event) => {
        this.setState({ newToSmoke: event.target.value });
    };

    newToSmoke = () => {
        this.setState({
            toSmokeItems: [
                ...this.state.toSmokeItems,
                { action: this.state.newToSmoke, done: false}
            ]
        });
    };

    toggleDone = (toSmoke) =>
        this.setState({
            toSmokeItems: this.state.toSmokeItems.map((item) =>
                item.action === toSmoke.action ? { ...item, done: !item.done } : item
                ),
        });

    // removeSmoke = (toRemove) =>
    //     this.setState({
    //         toSmokeItems: this.state.toSmokeItems.filter((item) => item.action !== toRemove.action)
    //     })

    toSmokeRows = () => 
        this.state.toSmokeItems.map((item) => (
            <tr className='row justify-content-center' key={item.action}>
                <td className='col-7'>
                    {item.action}
                </td>
                <td className='col-2'>
                    <input type='checkbox' checked={item.done} onChange={() => this.toggleDone(item)} /> Smoked?
                </td>
                <td className='col-1'>
                    <button className="">Remove</button>   {/* onClick={this.removeSmoke(item)}  Removed from button for display purposes, need to work on this */}
                </td>
            </tr>
        ));

    render() {
        return (
        <div className='py-4 text-dark'>
            <h2 className='bg-white text-center'>
                {this.state.username}'s To Smoke List
            </h2>
            <div className='row justify-content-center'>
                <div className='col-6 p-2'>
                    <input className='form-control' value={this.state.newToSmoke} onChange={this.updateValue} placeholder='Add Cigars to Smoke Here' />
                    <button className='btn btn-dark border-light m-2' onClick={this.newToSmoke}>Add</button>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-6 bg-white'>
                    <table className='table'>
                        <thead className='text-center'>
                            <tr>
                                <th>
                                    <h4>
                                        Cigar
                                    </h4>
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            <h5>
                                {this.toSmokeRows()}
                            </h5>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}

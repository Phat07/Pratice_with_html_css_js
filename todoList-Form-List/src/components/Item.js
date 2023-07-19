import React, { Component } from "react";

class Item extends Component {
    constructor(props) {
        super(props);

        this.handleDelete=this.handleDelete.bind(this)
        this.handleEdit=this.handleEdit.bind(this)
    }
    setElmLevel(level){
        let elmLevel = <span className="label label-default">Small</span>
        if (level === 1) {
            elmLevel = <span className="label label-info">Medium</span>
        }
        if (level === 2) {
            elmLevel = <span className="label label-danger">High</span>
        }
        return elmLevel;
    }
    handleDelete(id){
        // console.log(id)
        this.props.onClickDelete(id);
    }
    handleEdit(item){
        // console.log(item)
        this.props.onClickEdit(item)
    }
    render() {
        const item = this.props.item
        // console.log(item)
        

        return (
            <tr>
                <td className="text-center">{this.props.index + 1}</td>
                <td>
                    {item.name}
                </td>
                <td className="text-center">
                    {this.setElmLevel(item.level)}
                </td>
                <td>
                    <button onClick={()=>this.handleEdit(item)} type="button" className="btn btn-warning">
                        Edit
                    </button>
                    <button onClick={()=>this.handleDelete(item.id)} type="button" className="btn btn-danger">
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default Item;

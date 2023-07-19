import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state= {
            task_id:'',
            task_name: '',
            task_level:0,
        }
        
        
        this.handleCancel=this.handleCancel.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.componentWillMount=this.componentWillMount.bind(this)
        this.UNSAFE_componentWillReceiveProps=this.UNSAFE_componentWillReceiveProps.bind(this)
        // console.log(this.props.itemSelected)
    }
    
    
    
    handleChange(event){
        const target=event.target
        const value= target.type==="checkbox"?target.checked:target.value
        const name=target.name// name này gồm 2 cái là task_name và task_level nên khi setState mình phải bỏ name vào mảng để cập nhật giá trị
        // console.log(target.value)
        // console.log(target.name)
        this.setState({
            [name] :value
        })
    }
    handleCancel(){
        this.props.closeForm()
    }
    handleSubmit(event){
        console.log(this.state)
        let item={
            id: this.state.task_id,
            name: this.state.task_name,
            level:this.state.task_level
        }
        // console.log(item)
        // this.props.handleAdd(item.state)
        this.props.handleAdd(item)
        event.preventDefault();
        
    }
    componentWillMount(){
        let item=this.props.itemSelected;
        if(item !== null){
            this.setState({
                task_id: item.id,
                task_name: item.name,
                task_level: item.level
            })
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        let item=nextProps.itemSelected;
        console.log(item.id)
        if(nextProps !== null){
            this.setState({
                task_id: item.id,
                task_name: item.name,
                task_level: item.level
            })
        }
    }
    render() {
        
        return (
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form onSubmit={this.handleSubmit} action="" method="POST" className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="">
                                label
                            </label>
                            <input
                                value={this.state.task_name}   onChange={this.handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Task Name"
                                name="task_name"
                            />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="">
                                label
                            </label>
                            <select
                            value={this.state.task_level}   onChange={this.handleChange}
                                name="task_level"
                                id="inputDs"
                                className="form-control"
                                required="required"
                            >
                                Small
                                <option value={0}>Small</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <button onClick={this.handleCancel} type="button" className="btn btn-default">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;
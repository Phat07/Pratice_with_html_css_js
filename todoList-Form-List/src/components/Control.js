import React, {Component} from "react";
import Search from "./Search";
import Sort from "./Sort";
class Control extends Component{
    constructor(props) {
        super(props);
        this.handleAdd=this.handleAdd.bind(this)
    }
    handleAdd(){
        this.props.onClickAdd()
    }
    render(){
        let orderBy=this.props.orderBy
        let orderDiv=this.props.orderDiv

        let elmButtom=null;
        // console.log(this.props.isShowForm)
        if(this.props.isShowForm){
            elmButtom=<button onClick={this.handleAdd} type="button" className="btn btn-success btn-block">
            Close Task
        </button>
        }else{
            elmButtom=<button onClick={this.handleAdd} type="button" className="btn btn-info btn-block">
            Add Task
        </button>
        }
        return(
            <div className="row">
                        {/* SEARCH : START */}
                        <Search  onClickGo={this.props.onClickSearchGo}/>
                        {/* SEARCH : END */}
                        {/* SORT : START */}
                        <Sort  onClickSort={this.props.onClickSort} orderBy={orderBy} orderDiv={orderDiv}/>
                        {/* SORT : END */}
                        {/* ADD : START */}
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            {elmButtom}                            
                        </div>
                        {/* ADD : END */}
                    </div>
        )
    }
    
}

export default Control;
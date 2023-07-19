import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form'
import List from './components/List';
import items from './mocks/tasks';
import { orderBy as funcOrderBy, remove, filter, includes } from 'lodash';

import { v4 as uuidv4 } from 'uuid';


// App ->  List ->Item


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: items,
            itemSelected: null,
            isShowForm: false,
            strSearch: '',
            orderBy: 'name',
            orderDiv: 'asc'
        };
        this.handleToogleForm = this.handleToogleForm.bind(this)
        this.closeForm = this.closeForm.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSort = this.handleSort.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    componentWillMount(){
        let items=JSON.parse(localStorage.getItem('task'))
        this.setState({
            items : items,
        })
    }

    handleSort(orderBy, orderDiv) {
        this.setState({
            orderBy: orderBy,
            orderDiv: orderDiv
        })

    }
    handleToogleForm() {
        this.setState({
            isShowForm: !this.state.isShowForm,
        })
    }
    closeForm() {
        this.setState({
            isShowForm: !this.state.isShowForm
        })
    }
    handleSearch(value) {
        this.setState({
            strSearch: value
        })
    }

    handleDelete(id) {
        let item = remove(this.state.items, (items) => {
            return items.id === id;
        })
        console.log(item)
        this.setState({
            items: this.state.items
        })
        localStorage.setItem("task", JSON.stringify(items))

    }

    handleAdd(item) {
        console.log(item.id)
        let { items } = this.state;
        if (item.id !== '') {//edit
            items.forEach((elm,key)=>{
                if(elm.id===item.id){
                    items[key].name=item.name
                    items[key].level=item.level
                }
            })
        } else {//add
            console.log(items)
            items.push({
                id: uuidv4(),
                name: item.name,
                level: +item.level
            })
        }

        
        this.setState({
            items: items
        })
        console.log(items)
        localStorage.setItem("task", JSON.stringify(items))
    }
    handleEdit(item) {
        console.log(item)
        this.setState({
            itemSelected: item,
            isShowForm: true,
        })
    }

    render() {
        // console.log("strSearch:", this.state.strSearch)
        let orderBy = this.state.orderBy;
        let orderDiv = this.state.orderDiv;

        // console.log(orderBy + "-" + orderDiv)
        // console.log(this.state.items)
        let itemsOrigin = this.state.items;
        let items = [];
        let search = this.state.strSearch;

        let itemSelected = this.state.itemSelected;
        // console.log(search)
        // itemsOrigin.forEach((item)=>{
        //     if(item.name.toLowerCase().indexOf(this.state.strSearch.toLowerCase())!==-1){
        //         items.push(item)
        //     }
        // })
        items = filter(itemsOrigin, (item) => {
            return includes(item.name, search)
        })
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        // console.log(this.viewAgain(items)) về sorttttttttttttttt
        items = funcOrderBy(items, [orderBy], [orderDiv])
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------

        let isShowForm = this.state.isShowForm;
        let elmForm = null
        if (isShowForm) {
            elmForm = <Form itemSelected={itemSelected} handleAdd={this.handleAdd} closeForm={this.closeForm} />
        }
        return (
            <div className="row">
                {/* TITLE : START */}
                <Title />
                {/* TITLE : END */}
                {/* CONTROL (SEARCH + SORT + ADD) : START */}
                <Control
                    onClickSort={this.handleSort}
                    orderBy={orderBy}
                    orderDiv={orderDiv}
                    onClickSearchGo={this.handleSearch}
                    onClickAdd={this.handleToogleForm}
                    isShowForm={isShowForm} strSearch={this.state.strSearch}
                />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}
                {/* FORM : START */}
                {elmForm}
                {/* FORM : END */}
                {/* LIST : START */}
                <List
                    onClickEdit={this.handleEdit}
                    onClickDelete={this.handleDelete} items={items} />

            </div>
        );
    }
}

export default App;

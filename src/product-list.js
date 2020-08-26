import React from 'react'
import { withRouter } from 'react-router'
import Product from './product'
import axios from 'axios'
import { connect } from "react-redux";
import {getProduct}  from '../src/action/product-action';



class productList extends React.Component {
    constructor (props) {
      super(props)
        
      
    }
    componentDidMount(){
        this.props.getProduct();
    }
    render () {
        return(
            <div className='container'>{
               this.props.products && this.props.products.map(i => <Product item ={i}/>)
            }</div>
            
        )
    }
}

function mapState(state) {
	const { products } = state.product;
	return { products }
}

const actionCreators = {
	getProduct: getProduct
}

export default connect(mapState, actionCreators)(productList)
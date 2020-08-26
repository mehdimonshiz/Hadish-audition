import React from 'react'
import { withRouter } from 'react-router'
import Product from './product'
import axios from 'axios'
import { connect } from "react-redux";
import {getProducts}  from './action/product-action';



class productList extends React.Component {
    constructor (props) {
      super(props)
        
      
    }
    componentDidMount(){
        axios.get('https://run.mocky.io/v3/af969961-f71f-442b-89ee-409c28fc6d05')
        .then((response) => {
        this.props.dispatch(getProducts(response.data.products));
      })    

    }
    render () {
        return(
            <div className='container'>{
               this.props.products && this.props.products.map(i => i!==null && <Product item ={i}/>)
            }</div>
            
        )
    }
}

function mapState(state) {
	const { products } = state.product;
	return { products }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
  })

export default connect(mapState, mapDispatchToProps)(productList)
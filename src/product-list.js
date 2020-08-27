import React from 'react'
import { withRouter, Router, Route } from 'react-router'
import { Link } from 'react-router-dom'
import Product from './product'
import axios from 'axios'
import { connect } from 'react-redux';
import { Button } from '@material-ui/core'
import { getProducts } from './action/product-action';



class productList extends React.Component {
    constructor(props) {
        super(props)


    }

    componentDidMount() {
        if (this.props.products && this.props.products.length) return;
        axios.get('https://run.mocky.io/v3/af969961-f71f-442b-89ee-409c28fc6d05')
            .then((response) => {
                this.props.dispatch(getProducts(response.data.products));
            })

    }
    render() {
        console.log(this.props.products)
        return (
            <div className='container'>{
                this.props.products && this.props.products.map(i => i !== null && <Product item={i} />)
            }
                <div>
                    <Button className='addNewProduct' >

                        <Link to="/control"  >Add new product</Link>

                    </Button>
                </div>


            </div>

        )
    }
}

function mapState(state) {
    return { products: state.product.products }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(mapState, mapDispatchToProps)(productList)
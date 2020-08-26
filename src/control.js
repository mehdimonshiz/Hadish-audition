import React from 'react'
import {addProduct as addProductAction }from './action/product-action'
import { connect } from "react-redux";
import { withRouter, } from 'react-router';
import { Button, Fab, Input, Link} from '@material-ui/core';
class control extends React.Component {
    constructor (props) {
      super(props)
        this.state ={
                name:''
        }
    }
    render () {
        return(
            <div className='container'>
                <div className='control'>
                    <Input  type='text'
                     name='newProductName:'
                     placeholder="Add product:"
                     value={this.state.name}
                     onChange={(e)=>{this.setState({name:e.target.value})}}
                     >
                     </Input>

                     
                     <Button
                      onClick={()=>{this.props.addProduct(this.state.name);
                      this.props.history.push('/')}}
                      >
                        ADD PRODUCT
                     </Button>

                     <Button>SUBMIT</Button>  {/* this button does nothing actually ,cuz we don't have post API! */}
                    
                </div>
            </div>
        )
    }
}
// export default connect(mapDispatchToProps)(control)
const mapDispatchToProps = (dispatch) => ({
    addProduct: (name)=> dispatch(addProductAction(name))
  })
export default connect(()=>{return{}},mapDispatchToProps)(withRouter(control))

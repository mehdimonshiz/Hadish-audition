import React from 'react'
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { Button, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
// import ProductContainer from './container/ProductContainer';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { increaseProduct, decreaseProduct, resetProduct } from './action/product-action';
class product extends React.Component {
    constructor (props) {
      super(props)
  
    //   this.state = {
    //     fields: {
    //       name: '',
    //       count: ''
        
    //     }
    //   }
    } 

    handleIncrease() {
        this.props.dispatch(increaseProduct(this.props.item.id))
        console.log(' you clicked on +' )

    }
    handleDecrease(){
        this.props.dispatch(decreaseProduct(this.props.item.id))
        console.log(' you clicked on -' )
    }
    handlereset(){
        this.props.dispatch(resetProduct(this.props.item.id))
    }

    componentDidMount() {
        console.log('products:::', this.props.products)
    }
    
    render () {
        return(
            <div>
                {/* <div> 
                    <div className='product'>"first-product" </div>
                </div> */}
                
                
                <div className='product'>

                    <div className='p-clear' onClick={()=>this.handlereset()}>
                        <Fab aria-label="sub" color="secondary" size="small">  <DeleteForeverIcon />   </Fab>
                    </div>

                    <div className='product-name'>{this.props.item.name}

                    </div>
                        
                    <div className='p-decrease' onClick={()=>this.handleDecrease()}>
                         <Fab  aria-label="sub">  
                                <RemoveIcon />
                         </Fab>
                    </div>

                    <div className='p-count'>{this.props.item.count}
                    </div>

                    <div className='p-increase' onClick={()=>this.handleIncrease()}>
                        <Fab aria-label="add"   >
                        <AddIcon  />
                        </Fab>
                    </div>
                    
                        
                </div>
                
                   
                    
            </div>
            
            
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
  })

export default connect(mapDispatchToProps)(product)
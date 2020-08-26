import { connect } from 'react-redux'
import product from '../product'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(product)

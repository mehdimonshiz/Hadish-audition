import { connect } from 'react-redux'
import product from '../product'
import control from '../control'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(product)
export default connect(mapDispatchToProps)(control)


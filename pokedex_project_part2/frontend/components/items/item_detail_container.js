import {connect} from 'react-redux';
import ItemDetail from './item_detail';

const mSTP = (state, ownProps) => ({
    item: state.entities.items[ownProps.match.params.itemId]
})

export default connect(mSTP)(ItemDetail);
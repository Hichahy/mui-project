import Landing from './Landing'
import { connect } from 'react-redux'
import { IStore } from '../../types/IStore'
import { loadMeal } from '../../actions/Restaurant'

const mapStateToProps = (state: IStore) => ({
  meal: state.restaurant.meal,
  filteredItems: state.restaurant.filteredItems,
})

export default connect(mapStateToProps, { loadMeal })(Landing as any)
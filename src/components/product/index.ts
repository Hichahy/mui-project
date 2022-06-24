import Product from "./Product";
import { connect } from "react-redux";
import { IStore } from "../../types/IStore";
import { loadMeal, addProductToBasket } from "../../actions/Restaurant";

const mapStateToProps = (state: IStore) => ({
  meal: state.restaurant.meal,
});

export default connect(mapStateToProps, { loadMeal, addProductToBasket })(
  Product as any
);

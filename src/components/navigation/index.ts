import Navigation from "./Navigation";
import { connect } from "react-redux";
import { IStore } from "../../types/IStore";
import {
  addProductToBasket,
  removeProductFromBasket,
  deleteProductFromBasket,
} from "../../actions/Restaurant";

const mapStateToProps = (state: IStore) => ({
  amountBasket: state.restaurant.amountBasket,
  basket: state.restaurant.basket,
});

export default connect(mapStateToProps, {
  addProductToBasket,
  removeProductFromBasket,
  deleteProductFromBasket,
})(Navigation as any);

import Navigation from "./Navigation";
import { connect } from "react-redux";
import { IStore } from "../../types/IStore";
import { loadMeal } from "../../actions/Restaurant";

const mapStateToProps = (state: IStore) => ({

});

export default connect(mapStateToProps, {})(Navigation as any);

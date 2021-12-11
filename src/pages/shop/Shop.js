import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { Switch, Route} from 'react-router-dom';
import CollectionPage from "../CollectionPage/CollectionPage";



const ShopPage = ({ match }) => {
    console.log("Shoppage Match", match)
    return (
        <div className="shop-page">
            <Switch>
                <Route exact path={`${match.path}`} component={CollectionsOverview} /> 
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
            </Switch>
            
        </div>
     )
}

        
    
export default ShopPage
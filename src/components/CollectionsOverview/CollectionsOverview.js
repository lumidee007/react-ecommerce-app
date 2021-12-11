import './collectionsOverview.styles.scss'
import CollectionPreview from "../CollectionsPreview/CollectionPreview";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
import { selectCollectionsForPreview} from "../../redux/shop/shopSelector";

const CollectionsOverview = ({collections}) => (
    <div className="collection-overview">
        {collections.map(({id, ...restprops}) => (
                   <CollectionPreview key={id} {...restprops}/>
               ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})
 
export default connect(mapStateToProps)(CollectionsOverview);
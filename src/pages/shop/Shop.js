import React, {Component} from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from '../../components/CollectionsPreview/CollectionPreview'


class ShopPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collections : SHOP_DATA
        }
    }


    render () {
        const {collections} = this.state

        return (
           <div>
               {collections.map(({id, ...restprops}) => (
                   <CollectionPreview key={id} {...restprops}/>
               ))}
           </div>
        )
    }
}


export default ShopPage
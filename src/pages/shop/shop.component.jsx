import { Component } from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import './shop.style.scss';

class ShopPage extends Component {
    render() {
        return (
            <div className="shop-page">
                <CollectionsOverview/>
            </div>
        );
    }
}

export default ShopPage;
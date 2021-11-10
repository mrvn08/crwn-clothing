import { Component } from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.style.scss';

class ShopPage extends Component {
    render() {
        const { shop } = this.props;
        return (
            <div className="shop-page">
                {
                    shop.map(({id, ...otherCollectionProps }) => (
                        <CollectionPreview key = {id} {...otherCollectionProps}></CollectionPreview>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = ({shop}) => ({shop});

export default connect(mapStateToProps)(ShopPage);
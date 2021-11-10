import React from "react";
import { connect } from 'react-redux';

import CollectionPreview from "../collection-preview/collection-preview.component";

import './collections-overview.styles.scss';

const CollectionsOverview = ({shop}) => (
    <div className="collections-overview">
        {
            shop.map(({id, ...otherCollectionProps }) => (
                <CollectionPreview key = {id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </div>
)

const mapStateToProps = ({shop}) => ({shop});

export default connect(mapStateToProps)(CollectionsOverview);
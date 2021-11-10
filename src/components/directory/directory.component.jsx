import React from 'react';
import { connect } from 'react-redux';

class Directory extends React.Component{
    render(){
        const DirectoryItem = this.props.directoryItem;
        const directory = this.props.directory;

        return (
            <div className="directory-menu">
                {
                    directory.map(({id, ...otherSectionProps}) => 
                        <DirectoryItem key={id} {...otherSectionProps} />
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    directory: state.directory.sections
})

export default connect(mapStateToProps)(Directory);
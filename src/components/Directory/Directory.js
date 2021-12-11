import React, { Component } from 'react'
import { selectDirectorySections } from '../../redux/directory/directorySelector';
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';
import "./directory.styles.scss"


const Directory = ({sections}) =>
        (
            <div className = "directory-menu">
                {sections.map(({id, ...restProps}) => (
                    <MenuItem key={id} {...restProps}/>
                )) }
            </div>
        )
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory)        

import React, {Component} from 'react';
import './FeatureOption.css';

class FeatureOption extends Component {
    render() {
        const selectedClass = this.props.option.name === this.props.selected[this.props.feature].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return (
            <li key={this.props.feature} className="feature__item">
                <div className={featureClass} onClick={e => this.props.handleUpdateFeature(this.props.feature, this.props.option)}>
                    {this.props.option.name}
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(this.props.option.cost) })
                </div>
            </li>
        ) 
    }
}

export default FeatureOption
import React, {Component} from 'react';
import './Feature.css';
import FeatureOption from '../FeatureOption/FeatureOption'

class Feature extends Component {
    render() {
        const options = this.props.features[this.props.keyName].map((item, index) => {
            return (
                <FeatureOption
                    key={index}
                    feature={this.props.keyName}
                    option={item}
                    selected={this.props.selected}
                    handleUpdateFeature={this.props.handleUpdateFeature}
                />
            )
        });
        return (
            <div className="feature" key={this.props.keyName}>
                <div className="feature__name">{this.props.keyName}</div>
                <ul className="feature__list">
                    {options}
                </ul>
            </div>
        )
    }
}

export default Feature
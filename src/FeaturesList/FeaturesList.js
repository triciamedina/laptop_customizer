import React, {Component} from 'react';
import './FeaturesList.css';
import Feature from '../Feature/Feature';

class FeaturesList extends Component {
    render() {
        const features = Object.keys(this.props.features)
            .map(key => {
                return (
                    <Feature
                        key={key}
                        keyName={key} 
                        features={this.props.features}
                        selected={this.props.selected}
                        handleUpdateFeature={this.props.handleUpdateFeature}
                    />
                ) 
            }
        );
        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}
            </section>
        );
    }
}

FeaturesList.defaultProps = {
        features: {}
    }

export default FeaturesList
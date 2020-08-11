import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image

} from 'react-native';
import PropTypes from 'prop-types'


export default class Button extends Component {

    static propTypes = {
        onPress: PropTypes.func,
        text: PropTypes.string,
        textStyle: Text.propTypes.style,
        image: Image.propTypes.source,
        imageStyle: Image.propTypes.style,
        imageIsFirst: PropTypes.bool
    }

    static defaultProps = {
        imageIsFirst: true
    }


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    renderText() {
        let text = this.props.text;
        let textStyle = this.props.textStyle || {};
        if (text) {
            return (
                <Text style={textStyle}>{text}</Text>
            )
        } else {
            return null;
        }

    }

    renderImage() {
        let image = this.props.image;
        let imageStyle = this.props.imageStyle || {};
        if (image) {
            return (
                <Image
                    source={image}
                    style={imageStyle}/>
            )
        } else {
            return null;
        }
    }

    render() {


        let style = this.props.style || {};

        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={[{justifyContent: 'center', alignItems: 'center'}, style]}
                activeOpacity={0.5}>

                {this.props.imageIsFirst && this.renderImage()}
                {this.renderText()}
                {!this.props.imageIsFirst && this.renderImage()}

            </TouchableOpacity>
        )
    }
}

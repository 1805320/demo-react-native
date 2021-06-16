import React from 'react';
import {View} from 'react-native';
import ProductScreen from './ProductScreen';

const ProductDetail = () => {
    return(
        <View>
            <ProductScreen title="One" img={require('./../../assets/demo.jpg')}/>
            <ProductScreen title="Two" img = {require('./../../assets/demo.jpg')}/>
            <ProductScreen title="Three" img = {require('./../../assets/demo.jpg')}/>
        </View>
    )
}

export default ProductDetail;
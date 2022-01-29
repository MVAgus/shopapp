import {
   Button,
   SafeAreaView,
   Text,
   View
} from 'react-native';

import React from 'react';
import styles from './styles';
import { useSelector } from 'react-redux';

const ProductDetail = ({navigation, route}) => {
   const bread = useSelector(state => state.breads.selected);
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.container}>
         <Text>{bread.name}</Text>
         <Text>{bread.description}</Text>
         <Text>{bread.weight}</Text>
         <Text>$ {bread.price}</Text>
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default ProductDetail;
 
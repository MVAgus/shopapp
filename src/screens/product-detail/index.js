import {
   Button,
   SafeAreaView,
   Text,
   View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { addItem } from '../../store/actions/cart.action';
import styles from './styles';

const ProductDetail = ({navigation, route}) => {
   const dispatch = useDispatch();
   const bread = useSelector(state => state.breads.selected);
   const handleAddItemCart = () => dispatch(addItem(bread));
   
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.container}>
         <Text>{bread.name}</Text>
         <Text>{bread.description}</Text>
         <Text>{bread.weight}</Text>
         <Text>$ {bread.price}</Text>
       </View>
       <View style = {styles.addToCart}>
         <Button onPress={() => handleAddItemCart()} title="Agregar al carrito"/>
         </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default ProductDetail;
 
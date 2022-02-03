import {
   FlatList,
   SafeAreaView,
   View,
} from 'react-native';

import { BREADS } from '../../utils/data/breads';
import ProductItem from '../../components/products-item/index';
import React from 'react';
import styles from './styles';

const Products = ({navigation, route}) => {
  const breads = BREADS.filter(bread => bread.category === route.params.categoryId)
  
  const handleSelectedProduct = (item) => {
    
    navigation.navigate('ProductDetail', 
      {
        name: item.name,
      }
    );
  }

  const renderProducts= ({item}) => {
    return (
      <ProductItem item={item} onSelected={handleSelectedProduct} />
    )
  }

  
   return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <FlatList
         data={breads}
         renderItem={renderProducts}
         keyExtractor={item => item.id}
       />
    </View>
  </SafeAreaView>
   );
 };
 
 export default Products;
 
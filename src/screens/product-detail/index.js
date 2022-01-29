import {
   Button,
   SafeAreaView,
   Text,
   View
} from 'react-native';

import React from 'react';
import styles from './styles';

const ProductDetail = ({navigation}) => {
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.container}>
         <Text>Product Detail</Text>
        <Button title = "Pop to Top" onPress={()=> navigation.popToTop()}/>
        {/*el pop to top lo que hace es llevarte a la primera vista que se encuentra dentro del stack de navegacion */}
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default ProductDetail;
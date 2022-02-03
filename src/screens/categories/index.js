import {
  FlatList,
  SafeAreaView,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CategoryItem from '../../components/categories-item';
import React from 'react';
import styles from './styles';

const Categories = ({navigation}) => {

  const dispatch = useDispatch();
{/*es recomendable tener varios use selector que tener uno solo global para todos
los estados*/}
  const categoryBreads = useSelector(state => state.breads.filteredBread);
  const category = useSelector(state => state.categories.selected)


  const handleSelectedCategory = (item) => {
   
    navigation.navigate('Products', 
      {
        color: item.color,
        name: item.title
      }
    );
  }
  const renderCategories = ({item}) => {
    return (
      <CategoryItem item={item} onSelected={handleSelectedCategory} />
    )
  }


   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.container}>
       <FlatList
            data={categoryBreads}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
          />
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default Categories;
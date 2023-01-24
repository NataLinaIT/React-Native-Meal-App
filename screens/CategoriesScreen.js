import {FlatList} from 'react-native'
import {CATEGORIES} from '../data'
import CategoryGridTitle from '../components/CategoryGridTitle'


const CategoriesScreen = ({navigation}) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview");
    }
  
    return <CategoryGridTitle
              title={itemData.item.title}
              color={itemData.item.color}
              onPress={pressHandler}
            />
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen
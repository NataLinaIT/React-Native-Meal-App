import { FlatList, Text, View } from 'react-native'
import { MEALS } from '../data/index'

import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryID;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData) => {
    const props = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    }

    return <MealItem {...props}/>
  }

  return (
    <View>
      <FlatList 
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen
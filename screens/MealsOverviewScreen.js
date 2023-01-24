import { FlatList, Text, View } from 'react-native'
import { MEALS } from '../data/index'

import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryID;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData) => {
    return <MealItem title={itemData.item.title}/>
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
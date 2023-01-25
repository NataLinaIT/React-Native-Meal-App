import { View, Image, Text, StyleSheet, ScrollView } from 'react-native'
import { MEALS } from '../data';

import List from '../components/MealDetail/List'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'

const MealDetailScreen = ({route}) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((m) => m.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{uri: selectedMeal.imageUrl}}
        style={styles.image}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients}/>

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
  width: '100%',
  height: 350
  },
  title: {
  fontWeight: 'bold',
  fontSize: 24,
  margin: 8,
  textAlign: 'center',
  color: 'white'
  },
  detailText: {
  color: 'white'
  },
  listOuterContainer: {
  alignItems: 'center'
  },
  listContainer: {
  width: '80%'
  }
});

import { View, Text, Image, StyleSheet, Pressable, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MealDetails from './MealDetails'

const MealItem = ({id, title, imageUrl, duration, complexity, affordability}) => {
  const navigation = useNavigation();

  const selectMealItem = () => {
    navigation.navigate('MealDetail', {
      mealId: id
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Pressable
          android_ripple={{color: '#ccc'}}
          style={({pressed}) => pressed ? styles.buttonPressed : null}
          onPress={selectMealItem}
        >
          <View>
            <Image source={{url: imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </Pressable>
      </View>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
   container: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 16,
    overflow: Platform.OS === 'android'? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  buttonPressed: {
    opacity: 0.5
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  }
});

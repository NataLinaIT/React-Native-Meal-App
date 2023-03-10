import { Pressable, Text, View, StyleSheet, Platform } from 'react-native'

const CategoryGridTitle = ({title, color, onPress}) => {
  return (
    <View style={[styles.item]}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed? styles.buttonPressed : null
        ]}
        android_ripple={{color: '#cccccc'}}
        onPress={onPress}
      >
        <View style={[
          styles.inner, 
          {backgroundColor: color}
        ]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android'? 'hidden' : 'visible',
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  inner: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
});

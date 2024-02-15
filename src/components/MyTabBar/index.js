import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {IcHome, IcMessage, IcPlush, IcUser} from '../../assets/icons'

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const Icon = ()=>{
          if(label === 'Home') return <IcHome/>
          if(label === 'Profile') return <IcUser/>
          if(label === 'Setting') return <IcMessage/>
          return <IcPlush/>
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
            <Icon/>
            {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
           
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar

const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20
  }
})
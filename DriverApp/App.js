import * as React from 'react';
import { useState, Component } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
class app extends Component{
  
}



function Home({ navigation }) {
  
  
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>Selected Route:</Text>
      <Text style={styles.selectedRoute}>{"1"}</Text>
      
      <Button
        title="Select Route"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        
        />
    </View>
    </SafeAreaView>
  );
}



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Route 1"
        onPress={() => 
          
          props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />

    </Drawer.Navigator>
  );
}

export default function App() {

  
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title:{
    textAlign: 'center',
    fontSize: '24'

  },
  selectedRoute:{
    textAlign: 'center',
    fontSize: '16',
    marginVertical: 8
  }

})
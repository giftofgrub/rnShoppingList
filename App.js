import React, {useState} from 'react';
import Header from 'components/Header';
import ListItem from 'components/ListItem';
import AddItem from 'components/AddItem';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {v4 as uuid} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter some text', {text: 'Ok'});
    } else {
      setItems((prevItems) => [...prevItems, {id: uuid(), text}]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    paddingTop: 60,
  },
});

export default App;

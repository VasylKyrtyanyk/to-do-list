import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import TodoApp from './src/TodoApp'
import store from './src/store'
import { Provider } from 'react-redux'
export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
         <Provider store={store}>
          <TodoApp />
        </Provider>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778899',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
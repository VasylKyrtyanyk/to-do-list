import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from "react-native";

const TodoList = ({ todos, toggleTodo }) => (
    <View style={{ padding: 20 }} >
        {todos.map(todo =>
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <Text style={{
                    fontSize: 24,
                    textDecorationLine: todo.completed ? 'line-through' : 'none',
                    color:'#ffffff'
                }} clearButtonMode='always' >{todo.text}</Text>
            </TouchableOpacity>
        )}
    </View>

    

)
export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


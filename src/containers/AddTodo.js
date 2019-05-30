import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
class AddTodo extends Component {

    state = {
        text: ''
    }

    addTodo = (text) => {
        
        if(text!='')
        {
            this.props.dispatch({ type: 'ADD_TODO', text })
            this.setState({ text: '' })
        }
        else
        {
            Alert.alert("Field is empty","Please fill in the field")
        }
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Study React-native every day"
                    style={styles.InputTask}
                />
                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                    <View style={styles.buttonAdd}>
                        <Ionicons name="ios-add" size={30} style={{ color: '#de9595', padding: 10 }} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    InputTask:{
        borderWidth: 1, 
        borderColor: '#f2f2e1',
         backgroundColor: '#eaeaea', 
         height: 50, 
         flex: 1, 
         padding: 5 ,
         borderRadius: 20
    },
    buttonAdd:{
        height: 50, 
        backgroundColor: '#8b0000',
        alignItems: 'center', 
        justifyContent: 'center' ,
        borderRadius:20
    }
});
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from "react-native";
import { COLORS } from "./assets/theme";
import Constants from "expo-constants";
import ToDo from "./components/ToDo";

export default function App() {
    const [currentToDo, setCurrentToDo] = useState("");
    const [toDoList, setToDoList] = useState([]);
    const [addToDoError, setAddToDoError] = useState(false);

    const addToDo = () => {
        if (currentToDo === "") {
            setAddToDoError(true);
            return;
        } else {
            setAddToDoError(false);
        }
        const newList = [currentToDo, ...toDoList];
        setToDoList(newList);
        setCurrentToDo("");
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={COLORS.secondary} />
            {/* Heading */}
            <Text style={styles.heading}>To-Do List</Text>
            {/* To Do List */}
            {/* No To Do Text */}
            {toDoList.length === 0 && (
                <View style={styles.noToDoTextContainer}>
                    <Text style={styles.noToDoText}>All Done!</Text>
                </View>
            )}
            {/* Display To Dos */}
            <View style={styles.toDoListContainer}>
                <FlatList
                    data={toDoList}
                    keyExtractor={(toDo, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <ToDo toDo={item} index={index} toDoListState={{ toDoList, setToDoList }} />
                    )}
                    contentContainerStyle={{ width: "100%", alignItems: "center" }}
                />
            </View>

            {/* Add To Do List */}
            <View style={styles.addToDoContainer}>
                {addToDoError && <Text style={{ color: "red" }}>Enter a To-Do to add!</Text>}
                {/* Input */}
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Enter To-Do"
                        placeholderTextColor={COLORS.darkGrey}
                        style={styles.input}
                        value={currentToDo}
                        onChangeText={(value) => setCurrentToDo(value)}
                    />
                </View>
                {/* Add Button */}
                <Pressable
                    style={styles.button}
                    android_ripple={{ color: COLORS.lightGrey }}
                    onPress={() => addToDo()}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    addToDoContainer: {
        width: "100%",
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 30,
    },
    button: {
        width: "85%",
        height: 50,
        marginTop: 10,
        borderRadius: 25,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        fontSize: 40,
        fontWeight: "bold",
        color: COLORS.primary,
        marginTop: Constants.statusBarHeight + 20,
    },
    input: {
        height: 50,
        width: "85%",
        fontSize: 22,
    },
    inputContainer: {
        width: "85%",
        backgroundColor: COLORS.lightBlue,
        alignItems: "center",
        borderRadius: 10,
    },
    noToDoTextContainer: {
        flex: 1,
        justifyContent: "center",
    },
    noToDoText: {
        fontSize: 25,
        color: COLORS.secondary,
        fontWeight: "bold",
        // marginBottom: 250,
        // position: "absolute",
        // top: Constants.statusBarHeight + 130,
    },
    toDoListContainer: {
        marginTop: 50,
        width: "100%",
        alignItems: "center",
    },
});

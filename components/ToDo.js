import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { COLORS } from "../assets/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const ToDo = ({ toDo, index, toDoListState }) => {
    const deleteToDo = () => {
        const updatedToDoList = toDoListState.toDoList.filter((listToDo) => listToDo !== toDo);
        toDoListState.setToDoList(updatedToDoList);
    };

    return (
        <View key={index.toString()} style={styles.container}>
            <View
                style={{
                    marginLeft: 20,
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                }}
            >
                <Text style={styles.toDoSerial}>{index + 1}. </Text>
                <Text style={styles.toDoText}>{toDo}</Text>
                <Pressable
                    style={styles.deleteIcon}
                    onPress={() => deleteToDo()}
                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                >
                    <MaterialCommunityIcons
                        name="trash-can-outline"
                        size={28}
                        color={COLORS.darkerGrey}
                        // style={{ justifyContent: "flex-end" }}
                    />
                </Pressable>
            </View>
        </View>
    );
};

export default ToDo;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 40,
        width: "85%",
        borderRadius: 10,
        backgroundColor: COLORS.lightSecondary,
        marginBottom: 10,
        // justifyContent: "center",
        alignItems: "center",
    },
    deleteIcon: {
        alignItems: "flex-end",
        flex: 1,
        marginRight: 10,
    },
    toDoSerial: {
        fontSize: 20,
        fontWeight: "bold",
    },
    toDoText: {
        fontSize: 20,
        marginLeft: 10,
    },
});

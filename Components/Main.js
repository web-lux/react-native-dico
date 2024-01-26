import { StyleSheet, View, Text } from "react-native";

export default function Main() {
    return (
        <View style={styles.mainWrapper}>
            <Text>Lorem Ipsum</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor: "#F4F4FC",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20
    },
});
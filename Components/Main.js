import { StyleSheet, View, Text, FlatList } from "react-native";
import { placeholder } from "../assets/placeholder";

export default function Main() {
	return (
		<View style={styles.mainWrapper}>
			<Text>Lorem Ipsum</Text>
			<Text>{placeholder.category}</Text>

			<FlatList
				data={placeholder.definitions}
				renderItem={(definition) => (
					<View>
						<Text>
							{definition.index + 1}. {definition.item.value}
						</Text>
						{definition.item.examples.length !== 0 && (
							<Text>{definition.item.examples}</Text>
						)}
					</View>
				)}></FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	mainWrapper: {
		flex: 1,
		backgroundColor: "#F4F4FC",
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
	},
});

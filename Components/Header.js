import React from "react";
import {
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
	Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../Styles/global";

export default function Header() {
	return (
		<View style={styles.header}>
			<View style={styles.inputContainer}>
				<Ionicons name="search" size={12} color="black" />
				<TextInput placeholder="Rechercher..." />
				<TouchableOpacity style={[styles.headerBtn, globalStyles.primaryBtn]}>
					<Text style={globalStyles.primaryBtnText}>Envoyer</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 45,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	inputContainer: {
		backgroundColor: "#F4F4FC",
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		height: 25,
		width: 240,
		borderRadius: 50,
		paddingLeft: 10,
	},
	headerBtn: {
		marginLeft: "auto",
	},
});

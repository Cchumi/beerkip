import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import {
	Button,
	Text,
	Icon,
	ListItem,
	Thumbnail,
	Left,
	Body,
	Right,
	Container,
	Content,
} from "native-base";
import { connect } from "react-redux";
import COLORS from "../../utils/colors";

class BeersList extends Component {
	/**
	 * When we click on the "Add a beer" button
	 */
	handleAddBeerButtonPress = () => {
		this.props.navigation.navigate("BeerAdd");
	};

	render() {
		return (
			<Container>
				<Content>
					{this.props.beers && (
						<FlatList
							data={[
								...this.props.beers,
								...this.props.beers,
								...this.props.beers,
								...this.props.beers,
							]}
							keyExtractor={(beer, index) =>
								`${beer.uid}-${index}`
							}
							renderItem={({ item }) => (
								<ListItem
									thumbnail
									key={item.uid}
									button
									onPress={() => {}}
								>
									<Left>
										<Thumbnail square source={item.photo} />
									</Left>
									<Body>
										<Text>{item.name}</Text>
										<Text note numberOfLines={1}>
											{item.comment}
										</Text>
									</Body>
									<Right>
										<View style={styles.beerRating}>
											<Text style={styles.beerRatingText}>
												{item.rating}
											</Text>
										</View>
									</Right>
								</ListItem>
							)}
						/>
					)}
				</Content>

				<Button
					rounded
					primary
					iconLeft
					onPress={this.handleAddBeerButtonPress}
					style={styles.addButton}
				>
					<Icon name="add" />
					<Text>Add beer</Text>
				</Button>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	addButton: {
		position: "absolute",
		bottom: 30,
		right: 30,
	},
	beerRating: {
		backgroundColor: COLORS.gray,
		borderRadius: 50,
		width: 30,
	},
	beerRatingText: {
		fontSize: 9,
		textAlign: "center",
		paddingVertical: 9,
	},
});

const mapStateToProps = state => ({
	beers: state.beers,
});

export default connect(mapStateToProps)(BeersList);

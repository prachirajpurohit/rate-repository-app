import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function RepositoryItem({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) {
  return (
    <View>
      <Image
        source={{
          uri: ownerAvatarUrl,
        }}
        style={{
          height: 50,
          width: 50,
        }}
      />
      <Text>Full Name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../theme";

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
    <View style={{ marginBottom: 12, backgroundColor: "#ffffff" }}>
      <View style={{ flexDirection: "row", gap: 12, margin: 12 }}>
        <Image
          source={{
            uri: ownerAvatarUrl,
          }}
          style={{
            height: "50",
            width: "50",
            borderRadius: 4,
          }}
        />
        <View
          style={{
            flexShrink: 1,
            marginLeft: 12,
            gap: 12,
          }}
        >
          <Text
            style={{
              color: theme.colors.textPrimary,
              fontWeight: theme.fontWeights.bold,
              fontSize: theme.fontSizes.body,
            }}
          >
            {fullName}
          </Text>
          <Text
            style={{
              color: theme.colors.textSecondary,
              fontWeight: theme.fontWeights.normal,
              fontSize: theme.fontSizes.body,
            }}
          >
            {description}
          </Text>
          <Text
            style={{
              padding: 4,
              backgroundColor: theme.colors.primary,
              color: "white",
              alignSelf: "flex-start",
              borderRadius: 4,
            }}
          >
            {language}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          justifyContent: "space-evenly",
          marginBottom: 12,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: theme.colors.textPrimary,
              fontWeight: theme.fontWeights.bold,
            }}
          >
            {stargazersCount}
          </Text>
          <Text style={{ color: theme.colors.textSecondary }}>Stars</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: theme.colors.textPrimary,
              fontWeight: theme.fontWeights.bold,
            }}
          >
            {forksCount}
          </Text>
          <Text style={{ color: theme.colors.textSecondary }}>Forks</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: theme.colors.textPrimary,
              fontWeight: theme.fontWeights.bold,
            }}
          >
            {reviewCount}
          </Text>
          <Text style={{ color: theme.colors.textSecondary }}>Reviews</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: theme.colors.textPrimary,
              fontWeight: theme.fontWeights.bold,
            }}
          >
            {ratingAverage}
          </Text>
          <Text style={{ color: theme.colors.textSecondary }}>Rating</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

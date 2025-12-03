import { Movie, movies } from "@/data/movieList";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [movieSearch, movieSearchState] = useState("");

  function renderMovie({ item }: ListRenderItemInfo<Movie>) {
    return (
      <View style={styles.movieItem}>
        <Link href={`./movies/${item.id}`}>
          <Image source={item.poster} style={styles.img} />
          <View style={styles.viewTitle}>
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        </Link>
      </View>
    );
  }

  function searchMovie(movies: Movie[], movieSearch: string) {
    const movieSearchMin = movieSearch.toLocaleLowerCase();

    return movies.filter((movies) => {
      const movieTitleMin = movies.title.toLocaleLowerCase();
      return movieTitleMin.includes(movieSearchMin);
    });
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <LinearGradient
          colors={["#0A0C26", "#1A1040", "#0A0C26"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Lista de Filmes</Text>
            <View style={styles.search}>
              <Text style={styles.titleInputSearch}>Procurando por algo?</Text>
              <TextInput
                style={styles.inputSearch}
                placeholder="Procurar por um filme..."
                placeholderTextColor={"#d9d9d982"}
                onChangeText={movieSearchState}
              />
            </View>
            <FlatList
              data={searchMovie(movies, movieSearch)}
              renderItem={renderMovie}
              numColumns={2}
              contentContainerStyle={styles.flatListContent}
              style={styles.flatList}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "black",
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    width: "100%",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  search: {
    width: "100%",
    alignContent: "flex-start",
    paddingHorizontal: 14,
  },
  titleInputSearch: {
    width: "100%",
    fontSize: 20,
    color: "white",
    fontWeight: "medium",
    paddingVertical: 10,
  },
  inputSearch: {
    backgroundColor: "#1d114fff",
    color: "#d9d9d982",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#4A1259",
    marginBottom: 32,
  },
  movieItem: {
    width: "48%",
    margin: "1%",
    marginLeft: 8,
    marginBottom: 30,
    alignItems: "center",
  },
  viewTitle: {
    width: "100%",
    alignItems: "center",
    paddingTop: 8,
  },
  movieUnicItem: {
    width: "100%",
    marginHorizontal: 6,
    marginBottom: 30,
  },
  movieTitle: {
    color: "white",
  },
  img: {
    width: 160,
    height: 230,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#8C8C8C",
  },
  flatList: {
    width: "100%",
  },
  flatListContent: {
    justifyContent: "space-evenly",
    paddingHorizontal: 5,
  },
});

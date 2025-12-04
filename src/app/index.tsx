import { Movie, movies } from "@/data/movieList";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { useState, useMemo } from "react";
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [movieSearch, setMovieSearch] = useState("");

  // MELHORIA: useMemo para evitar re-cálculos desnecessários
  const filteredMovies = useMemo(() => {
    const searchLower = movieSearch.toLowerCase();
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchLower)
    );
  }, [movieSearch]);

  function renderMovie({ item }: ListRenderItemInfo<Movie>) {
    return (
      <Link href={`./movies/${item.id}`} asChild>
        <TouchableOpacity style={styles.movieItem}>
          <Image source={item.poster} style={styles.img} />
          <View style={styles.viewTitle}>
            <Text style={styles.movieTitle} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      </Link>
    );
  }

  return (
    <LinearGradient
      colors={["#0A0C26", "#1A1040", "#0A0C26"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Text style={styles.title}>Lista de Filmes</Text>

          <View style={styles.search}>
            <Text style={styles.titleInputSearch}>Procurando por algo?</Text>
            <TextInput
              style={styles.inputSearch}
              placeholder="Procurar por um filme..."
              placeholderTextColor={"#d9d9d982"}
              onChangeText={setMovieSearch}
              value={movieSearch}
              autoCorrect={false}
            />
          </View>

          <FlatList
            data={filteredMovies}
            renderItem={renderMovie}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={styles.flatListContent}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
  },
  search: {
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  titleInputSearch: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
    marginBottom: 10,
  },
  inputSearch: {
    backgroundColor: "#1d114fff",
    color: "white",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#4A1259",
    padding: 12,
    fontSize: 16,
  },
  movieItem: {
    width: "47%",
    marginBottom: 24,
    alignItems: "center",
  },
  viewTitle: {
    width: "100%",
    alignItems: "center",
    minHeight: 40,
    marginTop: 8,
  },
  movieTitle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  img: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#8C8C8C",
    resizeMode: "contain",
  },
  flatListContent: {
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
});

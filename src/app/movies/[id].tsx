import { movies } from "@/data/movieList";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import {
  Alert,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MovieDetail() {
  const { id } = useLocalSearchParams();

  const movie = movies.find((item) => item.id === Number(id));

  if (!movie) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "white" }}>Filme não encontrado.</Text>
      </View>
    );
  }

  async function handleTrailer() {
    if (movie?.trailerUrl) {
      const supported = await Linking.canOpenURL(movie.trailerUrl);
      if (supported) {
        await Linking.openURL(movie.trailerUrl);
      } else {
        Alert.alert("Erro", "Não foi possível abrir o trailer.");
      }
    } else {
      Alert.alert("Aviso", "Trailer indisponível.");
    }
  }

  return (
    <LinearGradient
      colors={["#0A0C26", "#1A1040", "#0A0C26"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={movie.background}
          style={styles.background}
          resizeMode="cover"
        />

        <View style={styles.container}>
          <View style={styles.contentText}>
            <Text style={styles.movieTitle}>{movie.title}</Text>

            <Text style={styles.movieInfo}>
              {movie.year} • {movie.genre} • {movie.timeInMin} mins
            </Text>

            <View style={styles.section}>
              <Text style={styles.label}>Dirigido por</Text>
              <Text style={styles.value}>{movie.directedBy}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>Sinopse</Text>
              <Text style={styles.value}>{movie.sinopse}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleTrailer}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Assista ao trailer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A0C26",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  background: {
    width: "100%",
    height: 250,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentText: {
    alignItems: "flex-start",
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    color: "white",
  },
  movieInfo: {
    color: "#8C8C8C",
    fontSize: 14,
    marginTop: 4,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    color: "#D9D9D9",
    fontWeight: "800",
    fontSize: 16,
    marginBottom: 4,
  },
  value: {
    color: "#D9D9D9",
    fontWeight: "normal",
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#0A0C26",
    paddingVertical: 16,
    borderRadius: 8,
    borderColor: "#d9d9d93b",
    borderWidth: 2,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#d9d9d9ff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

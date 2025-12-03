import { movies } from "@/data/movieList";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function movieDetail() {
  const { id } = useLocalSearchParams();

  const findMovie = movies.find((movie) => movie.id === Number(id));
  const findMovieURL = findMovie?.trailerUrl;

  function handleTrailer() {
    const handlePress = async () => {
      if (findMovieURL) {
        const supported = await Linking.canOpenURL(findMovieURL);

        if (supported) {
          await Linking.openURL(findMovieURL);
        } else {
          Alert.alert("Não foi possível abrir o trailer.");
        }
      }
    };
    handlePress();
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
            <Image source={findMovie?.background} style={styles.background} />
            <View style={styles.contentText}>
              <Text style={styles.movieTitle}>{findMovie?.title}</Text>
              <Text style={styles.movieInfo}>
                {findMovie?.year} • {findMovie?.genre} • {findMovie?.timeInMin}{" "}
                mins
              </Text>
              <Text style={styles.directedBy}>
                Dirigido por {"\n"}{" "}
                <Text style={styles.directorName}>{findMovie?.directedBy}</Text>
              </Text>
              <Text style={styles.sinopse}>
                Sinopse {"\n"}{" "}
                <Text style={styles.sinopseText}>{findMovie?.sinopse}</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleTrailer}>
              <Text style={styles.buttonText}>Assista ao trailer</Text>
            </TouchableOpacity>
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
  },
  background: {
    width: 396,
    height: 200,
  },
  contentText: {
    paddingHorizontal: 12,
    alignItems: "center",
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 14,
    paddingBottom: 4,
    color: "white",
  },
  movieInfo: {
    color: "#8C8C8C",
    fontSize: 12,
  },
  directedBy: {
    alignSelf: "flex-start",
    textAlign: "justify",
    fontWeight: "800",
    color: "#D9D9D9",
    width: "100%",
    marginTop: 36,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  directorName: {
    fontWeight: "medium",
  },
  sinopse: {
    alignSelf: "flex-start",
    textAlign: "justify",
    color: "#D9D9D9",
    fontWeight: "800",
    width: "100%",
    paddingTop: 12,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    marginBottom: 36,
  },
  sinopseText: {
    fontWeight: "medium",
    marginTop: 12,
  },
  button: {
    backgroundColor: "#0A0C26",
    padding: 20,
    marginHorizontal: 12,
    borderRadius: 8,
    borderColor: "#d9d9d93b",
    borderWidth: 2,
  },
  buttonText: {
    color: "#d9d9d9ff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

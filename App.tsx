import { View, StyleSheet } from "react-native";
import ShoppingListScreen from "./screens/ShoppingListScreen";


export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListScreen />
    </View>
  );
}


const styles = StyleSheet.create({
  container: 
  {
    flex: 1, 
    backgroundColor: "#fff"
    
  },
});
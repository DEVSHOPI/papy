import { View, Text, StyleSheet } from 'react-native';

export default function TrackScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Track Order</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.message}>No active orders</Text>
        <Text style={styles.submessage}>Your delivery status will appear here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1B4965',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTitle: {
    fontFamily: 'Pacifico_400Regular',
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#1B4965',
    marginBottom: 8,
  },
  submessage: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#666',
  },
});

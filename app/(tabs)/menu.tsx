import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { MENU_CATEGORIES } from '@/data/menu';

export default function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Menu</Text>
      </View>

      {MENU_CATEGORIES.map((category, index) => (
        <View key={index} style={styles.categorySection}>
          <Text style={styles.categoryTitle}>{category.category}</Text>
          
          {category.items.map((item) => (
            <Link href={`/product/${item.id}`} key={item.id} asChild>
              <TouchableOpacity style={styles.menuItem}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                  <Text style={styles.itemPrice}>${item.price}</Text>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      ))}
    </ScrollView>
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
  categorySection: {
    padding: 20,
  },
  categoryTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#1B4965',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemInfo: {
    flex: 1,
    padding: 12,
  },
  itemName: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#1B4965',
    marginBottom: 4,
  },
  itemDescription: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  itemPrice: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#5FA8D3',
  },
});

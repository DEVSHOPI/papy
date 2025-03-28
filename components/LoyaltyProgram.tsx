import { View, Text, StyleSheet, Image } from 'react-native';
import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';

interface LoyaltyProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  pointsRequired: number;
}

const LOYALTY_PRODUCTS: LoyaltyProduct[] = [
  {
    id: 'free-ice-cream',
    name: 'Free Ice Cream',
    description: 'Get a free ice cream cone',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80',
    pointsRequired: 100,
  },
  {
    id: 'free-crepe',
    name: 'Free Crêpe',
    description: 'Get a free crêpe',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80',
    pointsRequired: 200,
  },
  {
    id: 'free-waffle',
    name: 'Free Waffle',
    description: 'Get a free waffle',
    image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&q=80',
    pointsRequired: 300,
  },
];

export default function LoyaltyProgram() {
  const { state } = useCart();
  const [points, setPoints] = useState(state.points || 0);

  useEffect(() => {
    setPoints(state.points || 0);
  }, [state.points]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loyalty Program</Text>
      <Text style={styles.subtitle}>Earn points to get free products!</Text>
      <View style={styles.pointsContainer}>
        {LOYALTY_PRODUCTS.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <Text style={styles.pointsRequired}>{product.pointsRequired} points required</Text>
            <View style={styles.progressBarContainer}>
              <View
                style={[
                  styles.progressBar,
                  { width: `${(points / product.pointsRequired) * 100}%` },
                ]}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 20,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#1B4965',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  pointsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#1B4965',
    marginBottom: 4,
  },
  productDescription: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  pointsRequired: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#FF9F1C',
    marginBottom: 8,
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FF9F1C',
  },
});

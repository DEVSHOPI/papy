import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ChevronLeft, Plus, Minus } from 'lucide-react-native';
import { useState } from 'react';
import { MENU_CATEGORIES } from '@/data/menu';
import { useCart } from '@/context/CartContext';

const findProduct = (id: string) => {
  for (const category of MENU_CATEGORIES) {
    const product = category.items.find(item => item.id === id);
    if (product) return product;
  }
  return null;
};

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();
  
  const product = findProduct(id as string);
  
  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
      },
    });
    router.back();
  };
  
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}>
        <ChevronLeft color="#fff" size={24} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={decrementQuantity}>
            <Minus size={20} color="#1B4965" />
          </TouchableOpacity>
          
          <Text style={styles.quantity}>{quantity}</Text>
          
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={incrementQuantity}>
            <Plus size={20} color="#1B4965" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.addButton}
          onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>
            Add to Cart - ${(parseFloat(product.price) * quantity).toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  name: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#1B4965',
    marginBottom: 8,
  },
  description: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    lineHeight: 24,
  },
  price: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#5FA8D3',
    marginBottom: 24,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    marginHorizontal: 20,
    color: '#1B4965',
  },
  addButton: {
    backgroundColor: '#1B4965',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

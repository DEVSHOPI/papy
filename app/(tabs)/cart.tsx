import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function CartScreen() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const handleCheckout = () => {
    // TODO: Implement checkout logic
    console.log('Proceeding to checkout with items:', state.items);
  };

  if (state.items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your cart is empty</Text>
        <TouchableOpacity
          style={styles.shopButton}
          onPress={() => router.push('/(tabs)/menu')}>
          <Text style={styles.shopButtonText}>Browse Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1B4965', '#5FA8D3']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}>
        <Text style={styles.headerTitle}>Your Cart</Text>
        <Text style={styles.itemCount}>{state.items.length} items</Text>
      </LinearGradient>

      <ScrollView style={styles.itemList}>
        {state.items.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80' }}
              style={styles.itemImage}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
              
              <View style={styles.quantityControls}>
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, item.quantity - 1)}
                  style={styles.quantityButton}>
                  <Minus size={20} color="#1B4965" />
                </TouchableOpacity>
                
                <Text style={styles.quantity}>{item.quantity}</Text>
                
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, item.quantity + 1)}
                  style={styles.quantityButton}>
                  <Plus size={20} color="#1B4965" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  style={styles.removeButton}>
                  <Trash2 size={20} color="#dc2626" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>${state.total.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTitle: {
    fontFamily: 'Pacifico_400Regular',
    fontSize: 32,
    color: '#fff',
    marginBottom: 4,
  },
  itemCount: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  itemList: {
    flex: 1,
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemDetails: {
    flex: 1,
    padding: 15,
  },
  itemName: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#1B4965',
    marginBottom: 4,
  },
  itemPrice: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#5FA8D3',
    marginBottom: 8,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 36,
    height: 36,
    backgroundColor: '#f0f0f0',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    marginHorizontal: 15,
    color: '#1B4965',
  },
  removeButton: {
    marginLeft: 'auto',
    width: 36,
    height: 36,
    backgroundColor: '#fee2e2',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalLabel: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    color: '#1B4965',
  },
  totalAmount: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#1B4965',
  },
  checkoutButton: {
    backgroundColor: '#1B4965',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#1B4965',
    marginBottom: 20,
  },
  shopButton: {
    backgroundColor: '#1B4965',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  shopButtonText: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
});

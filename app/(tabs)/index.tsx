import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import LoyaltyProgram from '@/components/LoyaltyProgram';
import ProductCarousel from '@/components/ProductCarousel';
import { MENU_CATEGORIES, LOYALTY_PRODUCTS } from '@/data/menu';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;

const FEATURED_ITEMS = [
  {
    id: 'crepes',
    title: 'Crêpes Artisanales',
    description: 'Découvrez nos crêpes traditionnelles',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80',
    price: '6.99',
  },
  {
    id: 'ice-cream',
    title: 'Glaces Maison',
    description: 'Saveurs uniques et rafraîchissantes',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80',
    price: '5.99',
  },
  {
    id: 'waffles',
    title: 'Gaufres Belges',
    description: 'Croustillantes et délicieuses',
    image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&q=80',
    price: '7.99',
  },
];

const CATEGORIES = [
  {
    id: 'ice-cream',
    name: 'Glaces',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80',
  },
  {
    id: 'crepes',
    name: 'Crêpes',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80',
  },
  {
    id: 'waffles',
    name: 'Gaufres',
    image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&q=80',
  },
  {
    id: 'rolls',
    name: 'Ice Rolls',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80',
  },
];

const TRUST_ITEMS = [
  {
    id: 'trust1',
    title: 'Qualité Garantie',
    description: 'Nos produits sont fabriqués avec les meilleurs ingrédients.',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80',
  },
  {
    id: 'trust2',
    title: 'Livraison Rapide',
    description: 'Commandez et recevez rapidement vos desserts.',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80',
  },
  {
    id: 'trust3',
    title: 'Service Client',
    description: 'Notre équipe est là pour vous aider 24/7.',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80',
  },
];

const TRENDING_ITEMS = [
  {
    id: 'trend1',
    name: 'Vanilla Dream',
    description: 'Pure Madagascar vanilla beans',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80',
  },
  {
    id: 'trend2',
    name: 'Dark Chocolate',
    description: 'Rich Belgian chocolate',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80',
  },
  {
    id: 'trend3',
    name: 'Nutella Dream',
    description: 'Classic crêpe with Nutella and whipped cream',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#1B4965', '#5FA8D3']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}>
        <Text style={styles.brandName}>Papybranché</Text>
        <Text style={styles.tagline}>Artisanal Ice Cream Delivery</Text>
      </LinearGradient>

      <LoyaltyProgram />

      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Catégories</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.categoriesScroll}>
          {CATEGORIES.map((category, index) => (
            <Animated.View 
              key={category.id}
              entering={FadeInDown.delay(index * 100)}>
              <TouchableOpacity style={styles.categoryCard}>
                <Image source={{ uri: category.image }} style={styles.categoryImage} />
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.8)']}
                  style={styles.categoryGradient}>
                  <Text style={styles.categoryName}>{category.name}</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.featuredContainer}>
        <Text style={styles.sectionTitle}>Nos Spécialités</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          snapToInterval={CARD_WIDTH + 20}
          decelerationRate="fast"
          contentContainerStyle={styles.featuredScroll}>
          {FEATURED_ITEMS.map((item, index) => (
            <Animated.View 
              key={item.id}
              entering={FadeInDown.delay(index * 100)}>
              <TouchableOpacity style={[styles.featuredCard, { width: CARD_WIDTH }]}>
                <Image source={{ uri: item.image }} style={styles.featuredImage} />
                <LinearGradient
                  colors={['#1B4965', '#FF9F1C']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.featuredContent}>
                  <Text style={styles.featuredTitle}>{item.title}</Text>
                  <Text style={styles.featuredDescription}>{item.description}</Text>
                  <Text style={styles.featuredPrice}>${item.price}</Text>
                  <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderButtonText}>Commander</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.trustContainer}>
        <Text style={styles.sectionTitle}>Nous Faites Confiance</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.trustScroll}>
          {TRUST_ITEMS.map((item, index) => (
            <Animated.View 
              key={item.id}
              entering={FadeInDown.delay(index * 100)}>
              <View style={styles.trustCard}>
                <Image source={{ uri: item.image }} style={styles.trustImage} />
                <Text style={styles.trustTitle}>{item.title}</Text>
                <Text style={styles.trustDescription}>{item.description}</Text>
              </View>
            </Animated.View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.trendsContainer}>
        <Text style={styles.sectionTitle}>Nos Tendances</Text>
        <ProductCarousel products={TRENDING_ITEMS} />
      </View>

      <LinearGradient
        colors={['#FF9F1C', '#F17105']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.promoSection}>
        <Text style={styles.promoTitle}>Offre Spéciale</Text>
        <Text style={styles.promoText}>-20% sur toutes les crêpes</Text>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>En profiter</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  brandName: {
    fontFamily: 'Pacifico_400Regular',
    fontSize: 36,
    color: '#fff',
    marginBottom: 8,
  },
  tagline: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  categoriesContainer: {
    padding: 20,
  },
  categoriesScroll: {
    paddingRight: 20,
  },
  sectionTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#1B4965',
    marginBottom: 16,
  },
  categoryCard: {
    width: 120,
    height: 160,
    marginLeft: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    justifyContent: 'flex-end',
    padding: 10,
  },
  categoryName: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#fff',
    fontSize: 14,
  },
  featuredContainer: {
    padding: 20,
  },
  featuredScroll: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  featuredCard: {
    height: 400,
    marginRight: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  featuredImage: {
    width: '100%',
    height: 250,
  },
  featuredContent: {
    padding: 20,
    flex: 1,
  },
  featuredTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#fff',
    marginBottom: 8,
  },
  featuredDescription: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 12,
  },
  featuredPrice: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#fff',
    marginBottom: 16,
  },
  orderButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  orderButtonText: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#1B4965',
    fontSize: 16,
  },
  trustContainer: {
    padding: 20,
  },
  trustScroll: {
    paddingRight: 20,
  },
  trustCard: {
    width: 120,
    height: 160,
    marginLeft: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#fff',
  },
  trustImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  trustTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#1B4965',
    marginVertical: 8,
    textAlign: 'center',
  },
  trustDescription: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  trendsContainer: {
    padding: 20,
  },
  promoSection: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  promoTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#fff',
    marginBottom: 8,
  },
  promoText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    color: '#fff',
    marginBottom: 16,
  },
  promoButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  promoButtonText: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#FF9F1C',
    fontSize: 16,
  },
});

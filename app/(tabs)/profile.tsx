import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Settings, CreditCard, Clock, Heart, LogOut } from 'lucide-react-native';
import LoyaltyProgram from '@/components/LoyaltyProgram';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.profileInfo}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <Settings size={24} color="#1B4965" />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <CreditCard size={24} color="#1B4965" />
          <Text style={styles.menuText}>Payment Methods</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Clock size={24} color="#1B4965" />
          <Text style={styles.menuText}>Order History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Heart size={24} color="#1B4965" />
          <Text style={styles.menuText}>Favorites</Text>
        </TouchableOpacity>
      </View>

      <LoyaltyProgram />

      <TouchableOpacity style={styles.logoutButton}>
        <LogOut size={24} color="#fff" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
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
  profileInfo: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#5FA8D3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#fff',
  },
  name: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#1B4965',
    marginBottom: 4,
  },
  email: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#666',
  },
  menuSection: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#1B4965',
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B4965',
    margin: 20,
    padding: 16,
    borderRadius: 12,
  },
  logoutText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#fff',
    marginLeft: 8,
  },
});

import { View } from 'react-native';
import { Link } from 'expo-router';


export default function Page() {
  return (
    <View>
      <Link href="/sandwich">Sandwich</Link>
      {/* ...other links */}
      <Link href="/user/bacon">View user</Link>
    </View>
  );
}

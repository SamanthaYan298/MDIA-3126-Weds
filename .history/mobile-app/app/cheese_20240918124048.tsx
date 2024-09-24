import { Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
        <Text>This page is a Page about cheese. 🐭 🧀</Text>;
        <Pressable>
            <Text>Index </Text>
        </Pressable>
    </View>
    )
}

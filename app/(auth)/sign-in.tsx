import { Link } from 'expo-router'
import { Text, View } from 'react-native'

function SignIn() {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-in">Create account</Link>
    </View>

  )
}

export default SignIn

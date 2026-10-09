import { Link } from 'expo-router'
import { Text, View } from 'react-native'

function SignUp() {
    return (
        <View>
            <Text>sign-up</Text>
            <Link href="/(auth)/sign-up">Sign in</Link>
        </View>

    )
}

export default SignUp

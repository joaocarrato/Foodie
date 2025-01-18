import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '../routes/AuthStack';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: AuthStackParamList['SuccessScreen']) {
    navigation.reset({
      index: 2,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }

  return { reset };
}

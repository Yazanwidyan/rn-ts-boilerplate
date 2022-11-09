import React, {useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// components
import {
  Typography,
  Lang,
  Toast,
  Microloader,
  Button,
  ScreensContainer,
  SignatureSkeleton,
} from '@APPNAME/components';
import {
  backgroundDark,
  backgroundLight,
  black,
  black_50,
  white_50,
} from '@APPNAME/constants';

// services
import {getExampleApi} from '@APPNAME/services';

// redux
import {showLoading} from '@APPNAME/redux/loading.reducer';
import {login, setDarkMode} from '@APPNAME/redux/account.reducers';
import {
  getIsDarkMode,
  getUserInfo,
} from '@APPNAME/redux/selectors/account.selectors';
import {getIsLoading} from '@APPNAME/redux/selectors/loading,selectors';

// style
import styles from './Home.style';

const Home = () => {
  const loading = useSelector(getIsLoading);
  const userData = useSelector(getUserInfo);
  const isDarkMode = useSelector(getIsDarkMode);

  const toastRef = useRef<any>(null);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setDarkMode(!isDarkMode));
  };

  const getData = async () => {
    dispatch(showLoading(true));
    const data = await getExampleApi();
    if (data?.status === 200) dispatch(login(data.data));
    else toastRef.current?.show(`${data}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ScreensContainer>
        {loading ? (
          <Microloader color="red" size="small" />
        ) : (
          <>
            <Typography variant="wide" value={`${'home'}`} lineHeight={18} />
            <Lang />
            <Button title="toggle theme" onPress={toggleTheme} />
            {/* <SignatureSkeleton /> */}
          </>
        )}
      </ScreensContainer>
    </>
  );
};

export default Home;

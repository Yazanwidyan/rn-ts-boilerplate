import React, {useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// components
import {Typography, Lang, Toast, Microloader} from '@APPNAME/components';
import {black} from '@APPNAME/constants';

// services
import {getExampleApi} from '@APPNAME/services';

// redux
import {showLoading} from '@APPNAME/redux/loading.reducer';
import {login} from '@APPNAME/redux/account.reducers';
import {getUserInfo} from '@APPNAME/redux/selectors/account.selectors';
import {getIsLoading} from '@APPNAME/redux/selectors/loading,selectors';

// style
import styles from './Home.style';

const Home = () => {
  const loading = useSelector(getIsLoading);
  const userData = useSelector(getUserInfo);

  const toastRef = useRef<any>(null);

  const dispatch = useDispatch();

  const getData = async () => {
    dispatch(showLoading(true));
    const data = await getExampleApi();
    if (data?.status === 200) dispatch(login(data.data));
    else toastRef.current?.show(`${data}`);
  };

  console.log(userData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {loading ? (
          <Microloader color="red" size="small" />
        ) : (
          <>
            <Typography
              variant="wide"
              color={black}
              value={`${'home'}`}
              lineHeight={18}
            />
            <Lang />
          </>
        )}
      </SafeAreaView>
      <Toast controlRef={toastRef} />
    </>
  );
};

export default Home;

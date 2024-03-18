import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import UserInfo from '../../components/user-info';
import useSelector from '../../hooks/use-selector';
import HeaderAuth from '../../containers/header-auth';
import Head from '../../components/head';
import Navigation from '../../containers/navigation';
import LocaleSelect from '../../containers/locale-select';
import useTranslate from '../../hooks/use-translate';
import useInit from "../../hooks/use-init";
import useStore from '../../hooks/use-store';

function Profile() {
  const { t } = useTranslate();
  const store = useStore();
  const navigate = useNavigate();

  const select = useSelector(state => ({
    user: state.user.data,
    isAuth: state.user.isAuth
  }));

  useEffect(() => {
    if (!select.isAuth) {
      navigate('/login');
    }
  }, [select.isAuth]);

  return (
    <PageLayout>
      <HeaderAuth />
      <Head title={t('title')}>
        <LocaleSelect />
      </Head>
      <Navigation />
      <UserInfo user={select.user} />
    </PageLayout>
  );
}

export default memo(Profile);

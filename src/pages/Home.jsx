import { Affix, Layout } from 'antd';
import HeaderBar from '../components/HeaderBar/HeaderBar.jsx';
import HeroHome from '../components/home/heroHome.jsx';
import AboutHome from '../components/home/aboutHome.jsx';
import FeatureHome from '../components/home/featureHome.jsx';

import './Home.css';

const { Header, Content, Footer } = Layout;
export default function Home() 
{
  return (
    <Layout style={{
    }}>
      <Affix>
        <Header style={{
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr 1fr', 
          backgroundColor: 'white',
          alignItems: 'center',
          boxShadow: '0px #000000',
        }}>
          <HeaderBar />
        </Header>
      </Affix>
      <Content style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
        <HeroHome />
        <AboutHome />
        <FeatureHome />
      </Content>
      <Footer>

      </Footer>
    </Layout>
  )
}
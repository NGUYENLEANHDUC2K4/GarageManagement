import { Anchor, Button, Flex, ConfigProvider, Space, Image} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./HeaderBar.css";

const { Link } = Anchor;

export default function HeaderBar() { 
  return (
    <>
      <Flex vertical={false} className="left-header" align="center">
          <div className="left-logo">VAR</div>
          <div className="right-logo">GARA</div>
      </Flex>
      <ConfigProvider theme={{
        token: {
          'colorPrimary': 'af6b00',
          'colorSplit': 'none',
          'motionDurationSlow': '0.2s',
          'colorText': 'black',
        },
        components: {
          Anchor: {
            linkPaddingInlineStart: '30px',
          }
        }
      }}>
        <Anchor className="menu-list" direction="horizontal" targetOffset={65}>
          <Link href="#home" title="Trang chủ"/>
          <Link href="#about" title="Giới thiệu" />
          <Link href="#feature" title="Tính năng" />
          <Link href="#service" title="Dịch vụ" />
          <Link href="#contact" title="Thông tin liên hệ" />
        </Anchor>
        <Flex vertical={false} className='right-header' align="center" justify='flex-end'>
          <Space size={'middle'}>
            <Button type='primary' style={{
              'backgroundColor': 'af6b00',
              'boxShadow': '0px #000000'
            }} shape='circle' icon={<SearchOutlined />} />
            <Button type='primary' style={{
              'backgroundColor': 'af6b00',
              'boxShadow': '0px #000000'
              }}>Đăng nhập</Button>
          </Space>
        </Flex>
      </ConfigProvider>
    </>
  )
}
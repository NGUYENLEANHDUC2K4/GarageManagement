import { Image, Typography } from "antd";
import aboutHome from '../../assets/aboutHome.jpg'
import './aboutHome.css';

const { Text } = Typography;

function AboutHome() {
  return (
    <div id='about' className='aboutHome-container'>
      <div className="aboutHome-content">
        <Image className='aboutHome-img' src={aboutHome} alt="parkingLot" width={'400px'}/>
      </div>
      <div className="aboutHome-content">
        <Text style={{fontSize: '20px', color:"black"}}>
          <b>Phần mềm quản lý gara</b> là giải pháp tối ưu cho các chủ gara ô tô và xe máy, giúp nâng cao hiệu quả hoạt động và cải thiện dịch vụ khách hàng. Với các tính năng vượt trội như quản lý thông tin khách hàng, theo dõi lịch sử dịch vụ, quản lý kho phụ tùng, và lập báo cáo tài chính, phần mềm này mang lại cái nhìn tổng quan về hoạt động kinh doanh. Giao diện thân thiện và dễ sử dụng giúp người dùng nhanh chóng làm quen và tối ưu hóa quy trình làm việc. Nhờ đó, phần mềm quản lý gara không chỉ tiết kiệm thời gian và công sức mà còn nâng cao sự chuyên nghiệp và uy tín của gara trong mắt khách hàng.
        </Text>
      </div>
    </div>
  )
}

export default AboutHome
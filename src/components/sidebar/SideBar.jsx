import cls from './sidebar.module.css'
import Stalker from '../../assets/stalker.svg'
import Cloud from '../../assets/176 179 293 299 353.png'
import kompo from'../../assets/kompo.svg'

const SideBar = () => {
  return (
    <div className={cls.sidebar}>
      <div>
        <img src={Stalker} alt="" />
        <img src={Cloud} alt="" />
        <img src={kompo} alt="" />
      

      </div>
    </div>
  )
}

export default SideBar
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar'
import './SharedLayout.css';

export default function SharedLayout() {
  return (
    <div className="SharedLayout">
      {/* <NavBar/> */}
      <Outlet/>
    </div>
  )
}

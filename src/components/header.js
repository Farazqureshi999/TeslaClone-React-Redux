import React,{ useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
    const [burgerStatus,setBurgerStatus] = useState(false); 
    const cars = useSelector(selectCars);
    return (
       <Container>
           <a>
               <img src="/images/logo.svg"/>
           </a>
           <Menu>
               {cars && cars.map((car,index) => <a key={index} href='#'>{car}</a>)}
           </Menu>
           <RightMenu>
                <a href='#'>Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=> setBurgerStatus(true)}>
                <MenuIcon></MenuIcon>
                </CustomMenu>
                
           </RightMenu>
           
           <BurgerNav show={burgerStatus}>
           {cars && cars.map((car,index) =>  <li key={index}><a href="#">{car}</a></li>)}
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Used Inventory</a></li>
               <li><a href="#">Trade-in</a></li>
               <li><a href="#">CyberTruck</a></li>
               <li><a href="#">Roadster</a></li>
               <CustomClose onClick={()=> setBurgerStatus(false)}>
               <CloseIcon></CloseIcon>
               </CustomClose>
               
           </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
      min-height:60px;
      position:fixed;
      display:flex;
      align-items:center;
      padding: 0 20px;
      left:0;
      top:0;
      right:0;
      z-index:1;
      @media (max-width:767px){
        justify-content:space-between;
      }
`

const Menu = styled.div`
     display:flex;
     align-items:center;
     flex:1;
     justify-content:center;
     a{
         font-weight:600;
         text-transform:uppercase;
         padding:0 10px;
         flex-wrap:nowrap;
     }

     @media (max-width:767px){
         display:none;
        
     }
`

const RightMenu = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
}
`

const CustomMenu = styled(MenuIcon)`
        cursor:pointer;
`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:#fff;
    width:300px;
    z-index:999;
    list-style:none;
    padding:30px 20px;
    display:flex;
    flex-direction:column;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition:transform 0.2s ease-in-out;
    li{
        padding:20px 0;
        border-bottom:1px solid rgba(0,0,0,0.2);
        a{
            font-weight:600;

        }
    }
`

const CustomClose = styled(CloseIcon)`
      position:absolute;
      top:15px;
      right:15px;
      cursor:pointer;
`
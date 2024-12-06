import Item from "./item";
import {  COMPANY } from "../../constants/index";
import logo from "../../assets/logo.jpg"


const ItemsContainer = () => {
  return (
    <div className=" sm:px-8 px-5 py-16">
   
      <Item Links={COMPANY} logo={logo} />
  
    </div>
  );
};

export default ItemsContainer;
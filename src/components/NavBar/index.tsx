import { HeaderStyle } from "./style";
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart";
import { ContextUser } from "../../contexts/User";

const NavBar = () => {
  const [cartIsVisible, setIsVisible] = useState<boolean>(false);
  const inputSearch = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const submitSearch = () => {
    const valueFormat = inputSearch?.current?.value.trim();
    if (valueFormat?.length === 0) {
      toast.error("Valor de pesquisa inválido");
      return
    }
    navigate(`/game/${valueFormat}`);
  }

  const event = (e: any) => {
    if(e.keyCode === 13) submitSearch()
  }

  const openCart = () => setIsVisible(!cartIsVisible)

  return (
    <>
      <Cart isVisible={cartIsVisible} setIsVisible={setIsVisible} />
      <HeaderStyle>
        <h1 className="logo" onClick={() => navigate("/")}>Search Games</h1>

        <div>
          <button onClick={openCart} className="Cart"><BsFillCartFill color="black"/></button>
          <div className="boxSearch">
            <input onKeyDown={event} ref={inputSearch} type="text" placeholder="Digite sua pesquisa" />
            <button onClick={submitSearch} ><BsSearch color="black" size={20} /></button>
          </div>
        </div>
      </HeaderStyle>
    </>
  )
}

export default NavBar
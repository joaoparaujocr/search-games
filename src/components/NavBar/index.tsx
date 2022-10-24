import { HeaderStyle } from "./style";
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart";

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
      <HeaderStyle>
        <h1 className="logo" onClick={() => navigate("/")}>Search Games</h1>

        <div data-testid="element-box-controller">
          <button data-testid="button-cart" onClick={openCart} className="Cart"><BsFillCartFill color="black"/></button>
          <div className="boxSearch">
            <input onKeyDown={event} ref={inputSearch} type="text" placeholder="Digite sua pesquisa" />
            <button data-testid="button-search" onClick={submitSearch} ><BsSearch color="black" size={20} /></button>
          </div>
        </div>
      </HeaderStyle>
      <Cart isVisible={cartIsVisible} setIsVisible={setIsVisible} />
    </>
  )
}

export default NavBar
import { Component, useState } from 'react';
import { FiPlusSquare } from 'react-icons/fi';

import { Container } from './styles';
import Logo from '../../assets/logo.svg';

export function Header(openModal: boolean) {
  const [isOpenedModal, setIsOpenedModal] = useState(openModal);

  function handleOpenModal() {
    setIsOpenedModal(!isOpenedModal)
  }
  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button
              type="button"
              onClick={handleOpenModal}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
}
import React from 'react';
import { FiMenu, FiUser, FiShoppingCart, FiSearch } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import { Container, ContentHeader } from './styles';

const Header: React.FC = () => (
  <Container>
    <ContentHeader>
      <div className="content-left">
        <span className="navigation">
          <FiMenu size={30} />
        </span>

        <img src={logoImg} alt="Allugator" />

        <span className="cart">
          <FiShoppingCart size={24} />
        </span>
      </div>

      <div className="content-right">
        <div className="search">
          <FiSearch size={20} />
          <input type="text" placeholder="Buscar" />
        </div>

        <button type="button">Ganhe até R$ 1.000 de crédito</button>

        <span className="avatar">
          <FiUser size={20} />
        </span>

        <span className="cart-right">
          <FiShoppingCart size={24} />
        </span>
      </div>
    </ContentHeader>
  </Container>
);

export default Header;

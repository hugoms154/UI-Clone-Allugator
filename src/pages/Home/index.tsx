import React from 'react';

import {
  FiChevronRight,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from 'react-icons/fi';

// import ReactFloaterJs from 'react-floaterjs';

import {
  FreeSubscription,
  NeverBuy,
  Number,
  SmartConsumption,
  FreeSubscriptionList,
  Iframe,
  StepsTitle,
  Footer,
  Slide,
  Item,
  SignIn,
  Input,
  Button,
  ContainerSlide,
} from './styles';

import homeImg from '../../assets/images/homepicture.png';
import dateImg from '../../assets/images/undraw_date_picker_gorr.png';

import notebooksImg from '../../assets/images/categoria_notebooks.png';
import samsungImg from '../../assets/images/samsung-smartphones.jpg';
import appleImg from '../../assets/images/categoria_apple.png';
import gamesImg from '../../assets/images/categoria_games.png';
import productsImg from '../../assets/images/products.png';

import Header from '../../components/Header';

const Home: React.FC = () => (
  <>
    <Header />

    <Slide>
      <ContainerSlide>
        <Item time="0.2s">
          <img src={samsungImg} alt="" />
          <div>
            Samsung
            <span>Smartphones e acessórios</span>
          </div>
        </Item>

        <Item time="0.4s">
          <img src={appleImg} alt="" />
          <div>
            Iphone
            <span>Smartphones e acessórios</span>
          </div>
        </Item>

        <Item time="0.6s">
          <img src={notebooksImg} alt="" />
          <div>
            Notebooks
            <span>Notebooks</span>
          </div>
        </Item>

        <Item time="0.8s">
          <img src={gamesImg} alt="" />
          <div>
            Games
            <span>Consoles e acessórios</span>
          </div>
        </Item>

        <Item time="1s">
          <img src={productsImg} alt="" />
          <div>
            Todos
            <span>Catálogo Allugator</span>
          </div>
        </Item>
      </ContainerSlide>
    </Slide>

    <NeverBuy className="container">
      <h1>Você nunca mais vai precisar comprar nada.</h1>
      <div className="content">
        <img src={dateImg} alt="Choose a period" />
        <div className="steps">
          <StepsTitle>
            <Number>1</Number>
            <h2>Escolha o produto</h2>
          </StepsTitle>
          <p>
            Encontre o produto que você deseja. Temos o que você precisa para
            viver uma experiência incrível em qualquer ocasião.
          </p>
          <StepsTitle>
            <Number>2</Number>
            <h2>Selecione as datas</h2>
          </StepsTitle>
          <p>
            Quantos meses você quer ficar com o produto? Quanto maior o período
            do aluguel, mais você economiza! Tenha o que você quiser pelo tempo
            que quiser.
          </p>
          <StepsTitle>
            <Number>3</Number>
            <h2>Defina a entrega</h2>
          </StepsTitle>
          <p>
            Você pode buscar ou nós iremos levar pra você. Ter o que você quiser
            pelo tempo que quiser nunca foi tão fácil!
          </p>
        </div>
      </div>
    </NeverBuy>
    <SmartConsumption>
      <div className="container">
        <h1>Você acaba de entrar no mundo do consumo inteligente</h1>
        <div className="content">
          <ul>
            <li>
              <span>
                <FiChevronRight />
              </span>
              <p>Gastar MUITO menos</p>
            </li>
            <li>
              <span>
                <FiChevronRight />
              </span>
              <p>Ter os melhores celulares ou eletrônicos do mercado</p>
            </li>
            <li>
              <span>
                <FiChevronRight />
              </span>
              <p>
                Não ter qualquer preocupação com compra e revenda dos itens
                border:
              </p>
            </li>
            <li>
              <span>
                <FiChevronRight />
              </span>
              <p>E além de tudo ter o modelo novo do item TODO ANO</p>
            </li>
          </ul>

          <Iframe
            title="Video"
            src="https://www.youtube.com/embed/6oD-ci17sLk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </SmartConsumption>

    <FreeSubscription className="container">
      <h1>E quando acabar o período da assinatura você está LIVRE para:</h1>
      <FreeSubscriptionList>
        <img src={homeImg} alt="Carinha" />
        <ul>
          <li>
            <span>
              <FiChevronRight />
            </span>
            <p>Renovar o seu plano pagando menos…</p>
          </li>
          <li>
            <span>
              <FiChevronRight />
            </span>
            <p>Trocar de aparelho para um ainda melhor</p>
          </li>
          <li>
            <span>
              <FiChevronRight />
            </span>
            <p>Ou mesmo devolver o item e encerrar o vínculo</p>
          </li>
          <li>
            <span>
              <FiChevronRight />
            </span>
            <p>Se quiser saber mais, acesse nossos Termos De Uso </p>
          </li>
        </ul>
      </FreeSubscriptionList>
    </FreeSubscription>

    <SignIn>
      <div className="container">
        <h1>Cadastre-se!</h1>

        <div className="socialButtons">
          <Button backgroundColor="#4267B2" type="button">
            Continuar com Facebook
          </Button>
          <Button backgroundColor="#ea4335" type="button">
            Continuar com Google
          </Button>
        </div>

        <form>
          <div>
            <div>
              <label htmlFor="name">Nome</label>
              <Input id="name" placeholder="Nome" />
            </div>

            <div>
              <label htmlFor="name">Sobrenome</label>
              <Input name="surname" placeholder="Sobrenome" />
            </div>
          </div>

          <label htmlFor="name">Endereço de Email</label>
          <Input name="email" placeholder="Email" />

          <label htmlFor="name">Celular</label>
          <Input name="cellphone" placeholder="(00) 00000-0000" />

          <label htmlFor="name">Senha</label>
          <Input name="password" type="password" placeholder="Senha" />

          <Button className="register" backgroundColor="#10BB77" type="submit">
            Cadastrar
          </Button>
          <p>
            Ao entrar, você concorda com os <a href="/">Termos de Uso</a> e a{' '}
            <a href="/">Política de Privacidade</a> do Allugator.
          </p>
        </form>
      </div>
    </SignIn>
    <Footer>
      <div className="container">
        <div className="top_footer">
          <h1>Um Pouco sobre nós</h1>
          <div className="footer_text">
            <p>
              Idealizado e fundado por empreendedores mineiros, o Allugator
              nasceu para te dar acesso a tudo aquilo que você quiser.
              Acreditamos que as pessoas podem usar seu dinheiro de forma mais
              inteligente, viver de forma mais leve e ter tudo aquilo que
              quiserem gastando bem menos. Mais que um serviço, somos uma
              ferramenta de liberdade.
            </p>
            <p>
              Você também acredita que o consumismo não faz sentido? Vem com a
              gente! Chama os amigos e vamos todos juntos. A construção de um
              mundo mais leve, inteligente e sustentável está só começando.
            </p>
          </div>
        </div>
        <div className="bottom_footer">
          <h1>Quer falar com a gente?</h1>
          <h1>É só chamar!</h1>
          <div className="social">
            <a href="https://www.facebook.com/allugatordotcom">
              <FiFacebook size={40} />
            </a>
            <a href="https://www.instagram.com/allugatordotcom">
              <FiInstagram size={40} />
            </a>
            <a href="https://www.twitter.com/allugatordotcom">
              <FiTwitter size={40} />
            </a>
          </div>
          <span>contato@allugator.com</span>
        </div>
      </div>

      <div className="terms container">
        <p>&copy; Allugator, 2018 Todos os direitos reservados</p>
        <div>
          <a href="https://allugator.com/institucional/termos-de-uso-lite">
            <p>Termos de uso</p>
          </a>
          <p>-</p>
          <a href="https://allugator.com/institucional/politica-de-privacidade">
            <p>Política de privacidade</p>
          </a>
        </div>
      </div>
    </Footer>
  </>
);

export default Home;

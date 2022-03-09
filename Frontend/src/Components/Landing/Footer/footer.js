import styled from 'styled-components';

export const FooterStyles = styled.div`
  .underMobile{
    display: flex;
    justify-content: center; 

  }
  #logo-buscafe{
    width: 10%;
    height: 10%;
    margin-top: 80px;
  } 

  #buttonTop{
    margin-top: 36px;

    width: 49%;
    text-align: center;

    font-weight: 500;
    font-size: 20px;
    color: #F5B726;
  }

  .FooterTxt{
    display: flex;
    justify-content: center;
    margin-top: 2px;
    margin-bottom: 10px;
  }

  #buttonTop{
    font-weight: bold;
  }

  .buttonLocation{
    display: flex;
    justify-content: center;
  }

  .btnLocaliza{
    background-color: #F5B726;
    color: #Fff;

    text-transform: capitalize;
    font-size: 45px;
    text-align: center;
    padding: 10px 50px;

    border-radius: 50px 10px 50px 10px;
    border-color: white;
  }
    

  .footerFinal{
    
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    /* align-items: top; */

    background-color: var(--primary-color-dark);
    color: #BC8D1E;

    h1 {
      font-size: 5rem;
    }
    
    div{
      margin-left: 2%;
      margin-right: 2%;
    }

    h3{
      color: white;
      text-align: center;
    }

    p{
      color: white;
      text-align: center;
    }
    
    li{
      text-align: center;
    }
  }

  .footerStyled{
    margin-top: 2%;
    margin-bottom: 2%;
    
    a{
      font-weight: bold; 
    }
  }


`
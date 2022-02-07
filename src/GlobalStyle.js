import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --purple-primary: #554DDE;
  --accent-pink: #F44E77;
  --neutral-light: #F2F6FF;
  --lavender-secondary: #6A6D9E; /*Primary Font Color*/
  --dark-primary: #16194F;
  --border-colour: #CAD6F1;
  
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
  text-decoration: none;
}
body{
  background-color: var(--neutral-light);
  color: white;
  font-size: 1.2rem;
}
a{
  color: inherit;
}
p{
  color: var(--lavender-secondary);
  line-height: 1.9rem;
}
.secondary-heading{
  font-size: 3rem;
  color: var(--purple-primary);

  @media screen and (max-width: 1035px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
}


.small-heading{
  font-size: 2.5rem;
  color: var(--purple-primary);
  text-align: center;
  @media screen and (max-width: 820px) {
    font-size: 2rem;
  }
}
span{
  color: var(--accent-pink);
}

.center-paragraph{
  text-align: center;
}
`;

export default GlobalStyle;

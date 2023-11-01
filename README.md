<p align="center">
<img src="public/link.png" alt="logo" width="100">
</p>

# Links - Site

Bem-vindo ao repositório do projeto Links - Site. Este projeto é onde todas as informações cadastradas no site [Links - Dashboard](https://github.com/xulioguimaraes/dashboard-links) são exibidas com o objetivo de fornecer uma página única (ou mesmo landing page) onde quaisquer pessoas ou empresas possam disponibilizar seus diversos links, seja para suas redes sociais ou qualquer outro endereço de destino. Este projeto foi inspirado no site [Linktree](https://linktr.ee/) e não tem fins lucrativos.

## Principais Tecnologias Utilizadas

- [React 18](https://react.dev/)
- [Next 14](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Firebase](https://firebase.google.com/?hl=pt)

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado o seguinte:

- [Node.js](https://nodejs.org/en/download/current) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) (gerenciador de pacotes do Node.js)

## Configução das variveis ambientes

Crie um arquivo `.env` na raiz do projeto e adicione as variaveis do seu firebase:

```
VITE_API_API_KEY=
VITE_API_AUTH_DOMAIN=
VITE_API_DATABASE_URL=
VITE_API_PROJECT_ID=
VITE_API_STORAGE_BUCKET=
VITE_API_MESSAGING_SENDER_ID=
VITE_API_APP_ID=
VITE_API_MEASURENT_ID=
VITE_API_SITE_URL=
```

## Instalação

Siga os passos abaixo para instalar as dependências e executar o projeto:

1. Clone este repositório em sua máquina local.
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Navegue até o diretório do projeto.
   ```bash
   cd nome-do-repositorio
   ```
3. Instale as dependências do projeto.
   ```bash
   npm install
   ```
4. Inicie o projeto.
   ```bash
   npm run dev
   ```
5. Acesse a aplicação em seu navegador, através do endereço http://localhost:3002/slug.

> Necessário ressaltar que este projeto possui apenas uma página, na qual são listadas as informações cadastradas dentro do [Links - Dashboard](https://github.com/xulioguimaraes/dashboard-links).

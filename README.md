Kevin Chat
Kevin Chat é um aplicativo de chat em tempo real desenvolvido com Vite, React, Firebase e Tailwind CSS.

Funcionalidades Esperadas
Cadastro e autenticação de usuários: Implementa um sistema que permite que os usuários criem uma conta e façam login no aplicativo.
Criação e gestão de salas de chat: Os usuários podem criar novas salas de chat e se juntar a salas existentes. A gestão das salas inclui funcionalidades como dar nome à sala, definir uma descrição e restringir o acesso por meio de convites.
Envio e recebimento de mensagens em tempo real: Apesar do foco no front-end, o aplicativo simula a comunicação em tempo real. Isso é feito usando mocks ou estados locais para simular a interação entre usuários em diferentes instâncias do aplicativo.
Instalação
Para executar o aplicativo localmente, siga estas etapas:

Clone este repositório.
Navegue até o diretório do projeto.
Execute o seguinte comando para instalar as dependências:
bash
Copy code
npm install
Após a instalação das dependências, inicie o servidor de desenvolvimento:
bash
Copy code
npm run dev
Isso abrirá o aplicativo em seu navegador padrão.

Tecnologias Utilizadas
Vite: Build tool rápida e configurável para projetos web modernos.
React: Biblioteca JavaScript para a construção de interfaces de usuário.
Firebase: Plataforma de desenvolvimento de aplicativos móveis e web.
Tailwind CSS: Framework de CSS utility-first para criar designs personalizados sem sair do HTML.
Dependências
email-validator: Utilizado para validar endereços de e-mail.
firebase: SDK oficial do Firebase para JavaScript.
react: Biblioteca React.
react-dom: Pacote de ligação do React para manipulação do DOM.
react-firebase-hooks: Hooks personalizados para facilitar o uso do Firebase com React.
react-icons: Pacote de ícones para React.
Dependências de Desenvolvimento
@types/react: Pacotes de tipos TypeScript para React.
@types/react-dom: Pacotes de tipos TypeScript para react-dom.
@vitejs/plugin-react: Plugin para integrar React com Vite.
autoprefixer: Plugin PostCSS para adicionar prefixos de navegador automaticamente.
eslint: Ferramenta de linting para identificar e relatar padrões de código.
eslint-plugin-react: Plugin ESLint para regras específicas do React.
eslint-plugin-react-hooks: Plugin ESLint para regras específicas dos Hooks do React.
eslint-plugin-react-refresh: Plugin ESLint para regras específicas do React Refresh.
postcss: Ferramenta de pós-processamento de CSS.
tailwindcss: Framework CSS utility-first.
vite: Build tool para projetos web modernos.

# 📱 Portfólio - App Mobile

Um aplicativo de portfólio profissional desenvolvido com React Native e Expo, apresentando projetos, habilidades e redes sociais de forma elegante e interativa.

## ✨ Características

- **Navegação em Tabs**: Interface intuitiva com navegação por abas
- **Barra de abas com Blur**: Tab bar flutuante com efeito blur translúcido
- **Animações Suaves**: Expansão de cards com `Animated`
- **Design Moderno**: UI/UX elegante e responsiva
- **Páginas Principais**:
  - **Início**: Apresentação pessoal, habilidades e estatísticas
  - **Projetos**: Galeria de projetos com detalhes e tecnologias
  - **Redes Sociais**: Links para todas as redes sociais profissionais

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework principal
- **Expo** - Plataforma de desenvolvimento
- **Expo Router** - Navegação baseada em arquivos
- **React Navigation** - Sistema de navegação
- **TypeScript** - Tipagem estática
- **Ionicons** - Ícones vetoriais
- **expo-blur** - Efeito blur na barra de abas
- **react-native-reanimated / Animated** - Animações e transições suaves
- **react-native-safe-area-context** - Tratamento de áreas seguras

## 📱 Estrutura do Projeto

```
Portifolio/
├── app/
│   ├── _layout.tsx          # Layout principal com tabs
│   ├── index.tsx            # Página inicial
│   ├── projetos.tsx         # Página de projetos
│   └── redes-sociais.tsx    # Página de redes sociais
├── assets/
│   ├── bg.jpg               # Imagem de fundo
│   ├── profile.png          # Foto de perfil
│   └── vsocial.png          # Capa de projeto
├── components/              # Componentes reutilizáveis (opcional)
└── package.json
```

## 🆕 Novidades

- **Tab bar com efeito blur e estilo flutuante** (usando `expo-blur`)
- **Cards de projetos expansíveis** com botão "Ver Mais/Ver Menos" e animação
- **Indicador de status do projeto** com cores e ícones dinâmicos
- **Grade de redes sociais em 2 colunas** com abertura de links via `Linking`
- **Seção de contato** com botões de Email, Telefone e Compartilhar

## 🎨 Funcionalidades

### Página Inicial
- Perfil profissional com foto e informações
- Seção "Sobre Mim" com descrição pessoal
- Localização com ícone integrado (Ionicons)
- Habilidades técnicas em tags coloridas
- Imagem de fundo temática com `ImageBackground`
- Estatísticas rápidas (projetos, experiência, satisfação)

### Página de Projetos
- Cards de projetos com emojis representativos
- Cards expansíveis com animação (`Animated`) e botão "Ver Mais/Ver Menos"
- Status dos projetos (Concluído/Em Desenvolvimento) com cor e ícone
- Tecnologias utilizadas em cada projeto em forma de tags
- Estatísticas de projetos (total, concluídos, em andamento)

### Página de Redes Sociais
- Cards interativos para cada rede social em grade 2 colunas
- Estatísticas de seguidores e publicações
- Abertura de links via `Linking` com verificação de suporte e feedback por `Alert`
- Seção de contato (Email, Telefone, Compartilhar)

## 🛠️ Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI

### Instalação

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd Portifolio
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**
```bash
npm start
# ou
yarn start
```

4. **Escaneie o QR Code** com o app Expo Go no seu dispositivo móvel

### Plataformas Suportadas
- 📱 iOS (iPhone/iPad)
- 🤖 Android
- 🌐 Web

## 🎯 Personalização

### Alterando Informações Pessoais
1. **Página Inicial** (`app/index.tsx`):
   - Altere o nome, título e localização
   - Modifique a descrição "Sobre Mim"
   - Atualize as habilidades técnicas
   - Ajuste as estatísticas

2. **Página de Projetos** (`app/projetos.tsx`):
   - Adicione/remova projetos no array `projects`
   - Personalize títulos, descrições e tecnologias
   - Altere os emojis representativos

3. **Página de Redes Sociais** (`app/redes-sociais.tsx`):
   - Atualize os links das redes sociais
   - Modifique usernames e descrições
   - Ajuste as estatísticas de seguidores

### Customizando Cores
O tema principal usa a cor `#007AFF` (azul iOS). Para alterar:
1. Substitua todas as ocorrências de `#007AFF` pela cor desejada
2. Ajuste as cores de fundo e texto conforme necessário

## 📦 Scripts Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento
npm run android    # Executa no Android
npm run ios        # Executa no iOS
npm run web        # Executa na web
npm run lint       # Executa o linter
npm run reset-project # Restaura o template base do projeto
```

## 🔧 Configuração Avançada

### Adicionando Novas Páginas
1. Crie um novo arquivo `.tsx` na pasta `app/`
2. Adicione a nova tab no `app/_layout.tsx`
3. Configure o ícone e título da tab

### Implementando Funcionalidades
- **Compartilhamento**: Use `expo-sharing` para compartilhar o portfólio
- **Notificações**: Implemente `expo-notifications` para newsletter
- **Analytics**: Adicione `expo-analytics` para métricas
- **Links Externos**: Utilize `Linking` para abrir perfis e URLs com validação

## 📄 Licença

Este projeto está sob a licença MIT.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

## 📞 Suporte

Para dúvidas ou suporte:
- Abra uma issue no GitHub
- Entre em contato através das redes sociais

---

**Desenvolvido com ❤️ usando React Native e Expo**

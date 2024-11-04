# MediSudo
## Agenda Médica
Aplicação mobile para agendamento e gerenciamento de consultas médicas, desenvolvida em React Native e Expo, com backend em Node.js e banco de dados SQLite. O objetivo é proporcionar uma plataforma prática para médicos e pacientes organizarem suas consultas de maneira fácil e intuitiva.

## Descrição
A Agenda Médica é uma aplicação mobile que facilita o agendamento e o gerenciamento de consultas médicas. Esta ferramenta visa otimizar a comunicação entre médicos e pacientes, fornecendo funcionalidades como visualização de horários disponíveis, agendamentos rápidos e organização de consultas já realizadas ou futuras.

## Funcionalidades
Agendamento de Consultas: Interface intuitiva para pacientes agendarem consultas com seus médicos.
Visualização de Horários Disponíveis: Exibição de horários disponíveis para facilitar a escolha.
Gestão de Consultas: Médicos e pacientes podem visualizar, cancelar ou reprogramar consultas.
Notificações: Lembretes automáticos de consultas agendadas.
Histórico de Consultas: Visualização do histórico de consultas anteriores.

## Tecnologias Utilizadas
### Frontend:
React Native
Expo para desenvolvimento rápido e fácil de interfaces.
SQLite como banco de dados local para armazenar dados no dispositivo.
### Backend:
Node.js para API e servidor.
Express para gerenciamento das rotas e lógica de negócios.
SQLite como banco de dados para o backend.

## Instalação e Configuração
### Pré-requisitos
Node.js e npm instalados
Expo CLI instalada globalmente (npm install -g expo-cli)
### Passo a Passo
Clone este repositório:

bash
Copy code
git clone https://github.com/SudoMaster7/AgendaMedica.git
cd AgendaMedica
Configuração do Backend:

#### Navegue até a pasta do backend e instale as dependências:

bash
Copy code
cd backend
npm install
Configure o banco de dados SQLite (certifique-se de que o arquivo .db está configurado corretamente na pasta do backend).

#### Inicie o servidor backend:

bash
Copy code
npm start
Configuração do Frontend:

#### Navegue para a pasta do frontend e instale as dependências:

bash
Copy code
cd frontend
npm install
Inicie o aplicativo Expo:

bash
Copy code
expo start
Conexão com o Backend:

### Certifique-se de que o frontend está configurado para se conectar ao endereço correto do backend.
Uso

## Para acessar a aplicação:

Abra o Expo Go no seu dispositivo (ou utilize um emulador).
Escaneie o QR code fornecido no terminal ou na página do Expo.
Acesse as funcionalidades de acordo com o perfil de usuário (paciente ou médico) e explore o agendamento e gerenciamento de consultas.

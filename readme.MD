# 🏄 Surf Conditions API

API REST para consultar condições de surfe em qualquer praia do mundo, com previsão de 7 dias e score por hora.

## 🔗 Links

- **API em produção:** https://api-surfe.onrender.com
- **Documentação interativa (Swagger):** https://api-surfe.onrender.com/docs

---

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- Axios
- Swagger (swagger-jsdoc + swagger-ui-express)

---

## 📁 Estrutura do projeto

```
src/
  server.ts           # Ponto de entrada, configuração do servidor
  routes/
    surfRoutes.ts     # Definição das rotas
  controllers/
    surfController.ts # Lógica das requisições
  services/
    openMeteo.ts      # Integração com a Open-Meteo Marine API
  utils/
    formatConditions.ts # Formatação dos dados e cálculo do score
  config/
    swagger.ts        # Configuração da documentação
```

---

## 📡 Endpoints

### `GET /surf/conditions`

Retorna as condições de surfe hora a hora para os próximos 7 dias.

**Query Parameters:**

| Parâmetro | Tipo   | Obrigatório | Descrição                |
| --------- | ------ | ----------- | ------------------------ |
| `lat`     | number | ✅          | Latitude da localização  |
| `lng`     | number | ✅          | Longitude da localização |

**Exemplo de requisição:**

```
GET /surf/conditions?lat=-27.6&lng=-48.4
```

**Exemplo de resposta:**

```json
[
  {
    "time": "2024-01-01T00:00",
    "wave_height": 1.2,
    "wave_period": 10,
    "wave_direction": 180,
    "wind_wave_height": 0.3,
    "score": 8
  }
]
```

---

## 📊 Como o score é calculado

O score vai de 0 a 10 e é calculado com base em 3 critérios:

**Altura da onda** (até 4 pontos):

- Entre 1m e 2.5m → 4 pontos
- Entre 0.5m e 1m ou entre 2.5m e 4m → 2 pontos

**Período da onda** (até 3 pontos):

- 12s ou mais → 3 pontos
- 8s a 12s → 2 pontos
- 5s a 8s → 1 ponto

**Ondas de vento** (até 3 pontos):

- Até 0.5m → 3 pontos
- Até 1m → 1 ponto

---

## ⚙️ Como rodar localmente

**1. Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/surf-api.git
cd surf-api
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Rode o servidor em modo desenvolvimento:**

```bash
npm run dev
```

O servidor vai estar disponível em `http://localhost:3333`.

---

## 🌐 Fonte dos dados

Os dados de ondas e vento são fornecidos pela [Open-Meteo Marine API](https://open-meteo.com/en/docs/marine-weather-api), que é gratuita e não requer chave de API.

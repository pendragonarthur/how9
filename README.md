# 🌊 Monitor de Praias — Balneário Camboriú e Região

Aplicação web para consulta em tempo real da **balneabilidade das praias** de Balneário Camboriú e região, com clima atual, filtros e sistema de avaliação.

---

## ✨ Funcionalidades

- **Consulta de balneabilidade** — visualize quais praias estão próprias ou impróprias para banho
- **Filtros de status** — filtre por Todas, Próprias ou Impróprias
- **Busca por nome** — encontre rapidamente uma praia específica
- **Ordenação por avaliações** — ordene as praias por quantidade ou média de avaliações
- **Sistema de avaliação** — avalie praias com notas de 1 a 5 (persistido via localStorage)
- **Clima em tempo real** — temperatura e condição atual de Balneário Camboriú via [Open-Meteo](https://open-meteo.com/) (sem API key)
- **Data da última atualização** — sempre visível no hero da página

---

## 🛠 Stack

| Tecnologia | Uso |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework React com App Router |
| [React 19](https://react.dev/) | Biblioteca de UI |
| [TypeScript 5](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilização utilitária |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes de UI acessíveis (Radix UI) |
| [Motion](https://motion.dev/) | Animações |
| [Lucide React](https://lucide.dev/) | Ícones |
| [Open-Meteo API](https://open-meteo.com/) | Clima em tempo real (gratuito, sem key) |
| `localStorage` | Persistência local das avaliações |

---

## 🚀 Como rodar localmente

**Pré-requisitos:** Node.js 18+

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/how9.git
cd how9

# 2. Instale as dependências
npm install

# 3. Rode em modo de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Inicia o build de produção
npm run lint     # Verifica problemas de lint
```

---

## 📁 Estrutura do projeto

```
how9/
├── app/
│   ├── page.tsx          # Página principal (Home)
│   └── layout.tsx        # Layout global
├── components/
│   ├── PraiaCard.tsx     # Card de cada praia
│   ├── Dropdown.tsx      # Seletor de ordenação
│   └── ui/               # Componentes shadcn/ui
├── hooks/
│   └── useWeather.ts     # Hook para buscar clima via Open-Meteo
├── data/
│   └── praias.ts         # Dados estáticos das praias
├── public/
│   └── bc.jpg            # Imagem de fundo do hero
└── ...
```

---

## 🌡️ Integração com clima (Open-Meteo)

A temperatura e condição atual são buscadas da [Open-Meteo API](https://open-meteo.com/) usando as coordenadas de Balneário Camboriú (`lat: -26.99, lng: -48.63`). A API é **gratuita e não requer cadastro ou API key**.

```
GET https://api.open-meteo.com/v1/forecast
  ?latitude=-26.99
  &longitude=-48.63
  &current=temperature_2m,weather_code
  &timezone=America/Sao_Paulo
```

---

## ⭐ Sistema de Avaliações

As avaliações dos usuários são salvas no **localStorage** do navegador — sem necessidade de backend. Ao avaliar uma praia, a nota é adicionada ao histórico, a média é recalculada e o estado é persistido automaticamente.

> ⚠️ Limpar o cache/localStorage do navegador apaga as avaliações salvas.

---

## 📄 Licença

Projeto de uso pessoal/educacional. Dados de balneabilidade são simulados — para informações oficiais consulte o [Instituto do Meio Ambiente de Santa Catarina (IMA)](https://www.ima.sc.gov.br/).

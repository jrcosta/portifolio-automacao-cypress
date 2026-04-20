# 🎯 Portfólio de Automação: Cypress E2E

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Allure Report](https://img.shields.io/badge/Allure_Report-ECAA1A?style=for-the-badge&logo=qgis&logoColor=white)

Este projeto é um laboratório focado em **Testes End-to-End (E2E)** utilizando [Cypress](https://www.cypress.io/). O repositório simula jornadas completas de usuário e valida o storefront (UI) utilizando a interface modelo: `https://sauce-demo.myshopify.com/`.

## 🛠️ Stack Tecnológica & Padrões

*   **Node.js**: Plataforma base para gestão de dependências.
*   **Cypress**: Framework ágil focado em interações diretas no DOM de forma confiável e visual.
*   **JavaScript ES6+**: Linguagem de script padrão para automação web.

### Padrões de Qualidade
*   **Isolamento de Estado**: Testes começam com o estado limpo e utilizam commands injetáveis quando necessário.
*   **Navegação Orientada a UX**: O `Smoke` navega pelos componentes renderizados visualmente, atestando de fato a experiência final na ponta.

---

## 🏗️ Estrutura do Projeto (Cypress)

A arquitetura organiza contextos em specs puras.

```text
cypress/
  ├── e2e/
  │   ├── storefront-smoke.cy.js  # Smoke: Valida home, título e carregamento base de UI 
  │   ├── product-page.cy.js      # Cenário de jornada: Seleção de produto visual e adição ao carrinho
  │   └── products-api.cy.js      # Integração: Bate num endpoint JSON pra garantir integridade do back
  └── support/
      ├── commands.js             # Funções de suporte reutilizáveis (login auth, se houver)
      └── e2e.js                  # Ponto de injeção global antes dos testes
```

---

## 🕹️ Como executar

1. Instale o Node.JS (v20+) e baixe as dependências:
   ```bash
   npm install
   ```

2. **Abrir a Interface Iterativa (Cypress App):**
   ```bash
   npm run cy:open
   ```

3. **Rodar Headless (Console):**
   ```bash
   npm run cy:run
   ```

## 📊 Relatórios Allure (CI/CD)

Este projeto utiliza o pacote oficial `allure-cypress` para coleta robusta do histórico de execução. Através das **GitHub Actions** (`ci-allure-pages.yml`), toda vez que há atualização na `main`, os testes rodam em background e geram um dashboard analítico publicado automaticamente no **GitHub Pages**.

## 🔗 Sobre o Monorepo

> [!NOTE] 
> O código original deste teste compõe uma parte acoplada do meu [Portfólio Interativo Web principal](https://github.com/jrcosta/portifolio-web). Foi modularizado via *Git Submodules* para provar independência e ao mesmo tempo integridade no ecossistema final.

🌐 Encontre-me no GitHub: [@jrcosta](https://github.com/jrcosta)

# Handoff do Projeto

## Contexto

Este documento resume o planejamento do projeto da atividade de Front-End para facilitar a continuidade em um novo workspace.

## Tema definido

- **Projeto:** concessionária de motos custom
- **Objetivo:** apresentar modelos, destacar diferenciais da marca e oferecer contato direto
- **Público-alvo:** pessoas interessadas em motos custom, estilo de vida sobre duas rodas e personalização automotiva

## Arquitetura do site

O website foi planejado com **quatro páginas interligadas**:

1. **Home**
   - banner principal com chamada de impacto
   - destaques da marca
   - chamada para o catálogo e contato

2. **Motos**
   - catálogo simplificado de motos
   - cards com imagem, nome, descrição e valor estimado
   - possibilidade de destaques interativos

3. **Sobre**
   - história da concessionária
   - missão, visão e valores
   - diferenciais da marca

4. **Contato**
   - formulário com validação em JavaScript
   - dados de contato
   - possibilidade de mapa ou localização

## Requisitos obrigatórios planejados

- layout responsivo adaptado a diferentes telas
- menu de navegação funcional em todas as páginas
- formulário de contato com validação via JavaScript
- pelo menos dois efeitos interativos com JavaScript/jQuery
- aplicação de SEO básico
- organização de código seguindo boas práticas

## Stack definida

- **HTML5** para estrutura semântica
- **CSS3** para estilo e responsividade
- **JavaScript** para lógica e interatividade
- **jQuery via CDN** para efeitos específicos e pontuais

## Direção visual

- estilo moderno, urbano e robusto
- cores principais: preto, grafite, cinza escuro e vermelho como destaque
- tipografia sem serifa com boa legibilidade
- cards com bordas suaves e alto contraste visual

## Organização prevista

```text
projeto/
├── index.html
├── motos.html
├── sobre.html
├── contato.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── banners/
│   ├── motos/
│   └── icons/
└── plans/
    └── relatorio-tecnico.md

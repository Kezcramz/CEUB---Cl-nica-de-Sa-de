# VittaCare — Clínica de Saúde

Landing page estática desenvolvida para o Projeto 01 da atividade de Desenvolvimento de Soluções para Clínica de Saúde.

## Sobre o projeto

A VittaCare apresenta uma clínica de saúde com uma experiência digital acolhedora, clara e responsiva. A página comunica os serviços oferecidos, apresenta uma equipe fictícia e direciona o visitante para um formulário estático de contato.

## Requisitos atendidos

- Título da aba: `VittaCare | Clínica de Saúde`.
- Imagens e descrições para acompanhamento médico, exames e diagnósticos e nutrição.
- Equipe fictícia com três integrantes, fotos e cargos.
- Cabeçalhos em múltiplos níveis para estruturar o conteúdo.
- Formulário estático com nome, e-mail, cidade e estado.
- Navegação por âncoras entre as seções.
- Layout responsivo para desktop, tablet e celular.
- Identidade visual com verde sálvia, terracota e tons de marfim.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Execução local

Pré-requisitos: Node.js 20 ou superior e pnpm.

```bash
pnpm install
pnpm dev
```

Depois, acesse o endereço local informado pelo Vite. Para validar o projeto antes da entrega, execute:

```bash
pnpm check
pnpm build
```

## Estrutura principal

- `client/src/pages/Home.tsx`: página principal e seções da landing page.
- `client/src/index.css`: tokens visuais, tipografia, animações e estilos globais.
- `client/index.html`: título, idioma e metadados da página.
- `server/`: estrutura de compatibilidade do template; o Projeto 01 não utiliza backend.

## Observação sobre o formulário

O formulário é propositalmente estático, conforme solicitado no enunciado. Ele não envia nem armazena informações após o preenchimento.

## Autor

Davi Schmarczek Beier Martins

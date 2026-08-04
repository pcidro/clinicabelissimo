# Design System — Clínica Bellissimo

> Versão 1.0 · fonte única de verdade visual e comportamental para o site institucional.
>
> Este documento define decisões de design; não representa uma implementação. Quando houver conflito entre uma tela e este arquivo, este arquivo prevalece até que a decisão seja revisada e registrada aqui.

## Estado da auditoria

O repositório foi auditado antes da criação deste documento. O projeto é um template inicial em Next.js 16.3, React 19, TypeScript e Tailwind CSS 4. A aplicação possui apenas `src/app`, sem `src/components` e sem `src/data`. Os estilos globais e a página atual ainda são os padrões do template. Geist e Geist Mono estão configuradas por `next/font`; Cormorant Garamond e Manrope não estão instaladas nem configuradas. Não existe configuração JavaScript de Tailwind: a integração atual é a abordagem CSS-first do Tailwind 4, por meio de `@import "tailwindcss"` e `@theme inline`.

Existe `public/images/brand` com sete PNGs oficiais: três logos horizontais, um símbolo isolado, um ícone quadrado, um badge quadrado e um logo circular. Os arquivos foram inspecionados visualmente e por amostragem de cor. Não existem `public/images/hero` ou `public/images/team`, nem imagem Open Graph. O `src/app/favicon.ico` ainda pertence ao template e não é um asset oficial Bellissimo.

Foram lidos integralmente `design-references/apple.md`, `design-references/ferrari.md` e `design-references/mastercard.md`. Eles orientam princípios, não elementos copiáveis.

---

## 1. Visão geral

A Clínica Bellissimo deve parecer uma instituição de saúde próxima, precisa e experiente. O sistema combina composição editorial, espaços bem calibrados, fotografia humana e uma assinatura vermelha disciplinada. Sofisticação nasce de proporção, tipografia, imagem, ritmo e acabamento — nunca de ostentação, dourado, efeitos pesados ou excesso de animação.

A experiência deve ser imediatamente compreensível. Cada seção tem uma ideia principal, uma hierarquia nítida e, no máximo, uma ação dominante. Superfícies abertas são o padrão; cards são utilizados apenas quando agrupamento, comparação ou repetição exigem um contêiner.

## 2. Objetivos do sistema

- Tornar todas as decisões visuais previsíveis e reutilizáveis.
- Comunicar confiança clínica sem frieza hospitalar.
- Equilibrar saúde, estética e acolhimento sem parecer salão de beleza.
- Orientar implementação mobile-first desde 320px até telas amplas.
- Garantir contraste WCAG AA, navegação por teclado e conteúdo sem dependência de movimento.
- Favorecer Server Components, pouco JavaScript e imagens responsivas.
- Preservar a identidade Bellissimo acima de qualquer referência externa.
- Impedir valores, cores, raios, sombras e padrões arbitrários em cada componente.

## 3. Princípios da marca

1. **Clareza antes de efeito.** O usuário deve reconhecer o propósito, o conteúdo e a próxima ação sem esforço.
2. **Cuidado visível.** Espaçamento, linguagem, estados e fotografia devem demonstrar atenção às pessoas.
3. **Precisão serena.** Alinhamentos, contraste e acabamento são rigorosos; a interface não é agressiva.
4. **Humano antes de decorativo.** Pessoas e ambientes reais têm prioridade sobre ilustração genérica e ornamento.
5. **Vermelho com intenção.** A cor identifica, orienta e ativa; não preenche indiscriminadamente a página.
6. **Editorial, não modular em excesso.** Alternar áreas abertas, imagem, texto e grids; evitar uma pilha de cards.
7. **Responsividade por composição.** Mobile não é desktop reduzido; ordem, corte, alinhamento e densidade mudam.
8. **Confiança sem manipulação.** Nada de promessas, medo, urgência artificial ou alegações não comprovadas.

## 4. Hierarquia das referências

Em qualquer conflito, seguir esta ordem:

1. Identidade real da Clínica Bellissimo e seus assets oficiais.
2. Clareza, acessibilidade e usabilidade.
3. Performance e responsividade.
4. Confiança e adequação ao setor de saúde.
5. Apple como referência estrutural.
6. Ferrari como referência de impacto e disciplina do vermelho.
7. Mastercard como referência de calor e proximidade.

A distribuição conceitual é Apple 45%, Ferrari 30% e Mastercard 25%. Ela orienta decisões, mas não é uma fórmula visual.

## 5. Papel de Apple, Ferrari e Mastercard

| Referência | Adotar como princípio | Rejeitar explicitamente |
|---|---|---|
| Apple | Hierarquia, silêncio visual, grids, imagens amplas, ritmo vertical, foco no conteúdo e consistência responsiva | Azul, SF Pro obrigatória, cards de eletrônicos, linguagem de loja ou aparência tecnológica |
| Ferrari | Presença de marca, vermelho controlado, contraste, Header marcante, fotografia editorial, áreas escuras pontuais e microinterações precisas | Estética automobilística, amarelo, excesso de preto, tipografia esportiva, agressividade e animação dramática |
| Mastercard | Superfícies quentes, proximidade, pessoas, formas suaves e transições delicadas | Laranja, círculos sobrepostos, estética financeira, pills em excesso e identidade de fintech |

O resultado não deve permitir reconhecer nenhuma dessas marcas. Não usar seus logotipos, cores distintivas, fontes proprietárias, motivos gráficos ou composições emblemáticas.

## 6. Personalidade e atributos da marca

**Atributos centrais:** confiável, acolhedora, precisa, humana, experiente, profissional, elegante, clara e individualizada.

**Tensão desejada:** refinada sem ser ostentatória; clínica sem ser hospitalar; estética sem vaidade artificial; calorosa sem infantilidade; segura sem autoritarismo.

**Não é:** fria, genérica, excessivamente feminina, romântica, esportiva, tecnológica, inacessível, carregada, exclusivamente luxuosa ou composta apenas por cards.

## 7. Sistema de cores

### 7.1 Origem e calibração do vermelho

Os assets usam mais de uma gradação de vermelho: o símbolo isolado concentra-se próximo de `#E62F47`, o logo horizontal vermelho próximo de `#EB1A3B`, o ícone quadrado próximo de `#EB1046` e badge/logo circular usam variações ao redor de `#E7344C`. Essas diferenças fazem parte dos próprios bitmaps e não devem ser “corrigidas” por filtro.

`brand-source` adota `#E62F47` como referência cromática central porque foi extraído do símbolo isolado e também representa bem badge e logo circular. Esse vermelho tem contraste aproximado de 4,32:1 com branco e, portanto, **não é seguro para texto branco normal em grandes superfícies**. Para Header, CTAs e componentes com texto branco, `brand` é a derivação de interface `#C71838`, tonalmente fiel e escurecida apenas o necessário para superar WCAG AA. A identidade continua ancorada nos assets reais; a adaptação existe por acessibilidade.

### 7.2 Tokens semânticos

| Token | Valor atual | Papel e regra |
|---|---:|---|
| `background` | `#F7F3EF` | Marfim principal; fundo predominante da página |
| `surface` | `#FFFDFC` | Branco quente para áreas internas e formulários |
| `surface-muted` | `#EFE7E2` | Alternância suave de seção, skeleton e agrupamentos |
| `surface-elevated` | `#FFFFFF` | Elementos realmente elevados; uso restrito |
| `foreground` | `#272324` | Grafite quente para texto principal |
| `foreground-muted` | `#6B625F` | Texto secundário; contraste aproximado de 5,38:1 sobre `background` |
| `brand-source` | `#E62F47` | Vermelho extraído do símbolo; logo, detalhes grandes e referência cromática, não fundo de texto branco normal |
| `brand` | `#C71838` | Derivação acessível para CTA e Header; branco atinge aproximadamente 5,81:1 |
| `brand-hover` | `#B21130` | Hover em superfícies apontáveis |
| `brand-active` | `#990D28` | Estado pressionado |
| `brand-soft` | `#FCECEF` | Destaques discretos, nunca texto longo sem contraste validado |
| `brand-foreground` | `#FFFFFF` | Texto e ícones sobre `brand` |
| `border` | `#DED3CD` | Divisores e contornos padrão |
| `border-strong` | `#BFAFA8` | Contorno de controle, selected e separação maior |
| `ring` | `#6A111D` | Foco externo de alto contraste, combinado com offset claro |
| `hero-background` | `#D8CEC4` | Base aprovada do Hero e área segura de texto |
| `dark-section` | `#3B2529` | Vinho profundo quente; Footer e uma seção de impacto por fluxo |
| `dark-section-foreground` | `#F9F5F1` | Texto sobre superfície escura; cerca de 13:1 |
| `success` | `#2F6B4F` | Confirmação; não substituir por `brand` |
| `warning` | `#8A5A16` | Atenção não destrutiva |
| `danger` | `#B42318` | Erro e ação destrutiva; semanticamente distinto de `brand` |

Valores de contraste citados são guardrails da paleta de interface. A implementação deve validar todas as combinações reais em ferramenta automatizada, incluindo texto pequeno, opacidade, imagens e estados. Se a clínica aprovar outro vermelho institucional, a mudança deve preservar a separação entre a cor literal do asset e a cor acessível de superfície.

### 7.3 Proporção e aplicação

- 65% a 75% de superfícies neutras claras.
- 10% a 20% de vermelho, incluindo Header, CTAs, links ativos e detalhes.
- 10% a 15% de vinho/grafite e contrastes escuros.
- O restante é reservado a bordas, estados e cores funcionais.

As proporções são orientativas. Não criar longas sequências de fundos vermelhos nem posicionar outra grande área vermelha imediatamente após o Header sem justificativa. Não usar vermelho em texto extenso, em todos os cards ou sobre tons semelhantes. Evitar branco com transparência abaixo do necessário sobre vermelho.

Não usar como identidade principal: dourado, azul hospitalar, verde-sálvia, roxo de startup, rosa romântico, `#FF0000`, neon, preto puro em áreas extensas ou gradientes coloridos. Gradiente só é permitido no Hero como recurso neutro de legibilidade e deve desaparecer antes do rosto.

## 8. Tipografia

### 8.1 Famílias e pesos

- `font-display`: **Cormorant Garamond**, pesos 500 e 600. Uso em títulos editoriais. Não está configurada no projeto; é a direção aprovada para implementação futura.
- `font-sans`: **Manrope**, pesos 400, 500, 600 e 700. Uso em texto, navegação, botões, campos e dados. Não está configurada no projeto.
- Fallback: Georgia para display; `system-ui`, Arial e sans-serif para interface.
- Geist e Geist Mono atuais pertencem ao template e não definem a identidade final. Mono não participa da interface pública.

Carregar apenas pesos realmente utilizados, preferencialmente por `next/font`. Não usar fonte manuscrita; o próprio logo já contém expressão decorativa. Números de telefone e horários podem usar algarismos tabulares da Manrope quando alinhados em listas.

### 8.2 Escala responsiva

| Estilo | Faixa fluida | Peso | Altura de linha | Tracking | Uso |
|---|---:|---:|---:|---:|---|
| `display` | 52–76px | 500 | 0,96–1,02 | `-0.02em` | Frase editorial rara, fora de páginas densas |
| `h1` | 42–64px | 500 | 1,00–1,06 | `-0.018em` | Um por página |
| `h2` | 34–48px | 500 | 1,05–1,12 | `-0.014em` | Título de seção |
| `h3` | 26–34px | 600 | 1,10–1,18 | `-0.01em` | Subseção ou destaque |
| `h4` | 21–26px | 600 | 1,18–1,25 | `-0.006em` | Título de componente |
| `body-large` | 18–20px | 400 | 1,55 | normal | Introduções e leads |
| `body` | 16–18px | 400 | 1,6 | normal | Leitura padrão; nunca abaixo de 16px |
| `body-small` | 14–15px | 400 | 1,55 | normal | Apoio e metadados não essenciais |
| `eyebrow` | 12–13px | 700 | 1,3 | `0.12em` | Caixa alta curta, até 3–4 palavras |
| `label` | 14–16px | 600 | 1,35 | normal | Campos e controles |
| `caption` | 12–14px | 500 | 1,45 | `0.01em` | Legendas e créditos; não para conteúdo central |
| `button` | 15–16px | 700 | 1,2 | `0.01em` | Ações |
| `navigation` | 14–15px | 600 | 1,2 | `0.005em` | Header e menus |

Aplicar escala fluida equivalente a `clamp()` entre 320px e aproximadamente 1280px, sem saltos bruscos. Limitar títulos a cerca de 10–14 palavras por bloco e texto corrido a 56–72 caracteres por linha. Evitar caixa alta em títulos; reservar caixa alta a eyebrows e labels curtas.

## 9. Grid e containers

- `container-main`: máximo de 1280px, centralizado.
- `container-wide`: máximo de 1360px para mídia e composições editoriais.
- `container-reading`: 640px ideal; máximo de 720px para texto corrido.
- Gutter mobile: 16px em 320px; 20px a partir de 375px.
- Gutter tablet: 24–32px.
- Gutter notebook: 40px.
- Gutter desktop: 48–64px, sem reduzir o conteúdo abaixo do mínimo útil.
- Grid: 4 colunas no mobile, 8 no tablet, 12 no desktop.
- Gap estrutural: 16px mobile, 24px tablet, 24–32px desktop.

Conteúdo pode escapar do container somente para mídia intencionalmente ampla, fundo de seção ou composição do Hero. Texto, controles e logos nunca encostam na borda da viewport.

## 10. Espaçamento

Escala estrutural: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112 e 128px. Valores intermediários só são permitidos para ajuste óptico documentado; não criar uma nova escala por componente.

- Entre seções, mínimo: 48px mobile / 64px desktop.
- Padrão: 64px mobile / 88–96px desktop.
- Editorial amplo: 80px mobile / 112–128px desktop.
- Interior de card: 20–24px mobile / 24–32px desktop.
- Formulários: 20–24px entre grupos; 8px entre label e controle; 6–8px entre controle e ajuda/erro.
- Componentes densos: 12–16px, sem reduzir alvo interativo.
- Título para lead: 16–24px; lead para ação: 24–32px.

Respiro deve revelar conteúdo, não atrasá-lo. Evitar seções com apenas uma frase e altura de viewport inteira. Em telas baixas, reduzir padding antes de reduzir tipografia ou esconder conteúdo.

## 11. Bordas, raios e sombras

### Bordas e divisores

- Padrão: 1px em `border`.
- Ênfase/selected: 1–2px em `border-strong` ou `brand`, sem alterar dimensões do elemento.
- Divisores devem alinhar com o conteúdo; evitar linhas de ponta a ponta sem necessidade.

### Raios

- `radius-sm`: 10px — controles pequenos e tags.
- `radius-md`: 14px — botões e inputs.
- `radius-lg`: 18px — cards médios.
- `radius-xl`: 24px — imagens e superfícies grandes.
- `radius-2xl`: 28px — composição editorial excepcional.
- `radius-full`: apenas avatar, badge circular ou icon button; não é o padrão de CTA.

Não usar o mesmo raio em tudo. Botões não devem parecer cápsulas infantis; cards de saúde não devem ter cantos totalmente retos e agressivos.

### Elevação

- `shadow-none`: padrão para áreas abertas e cards delimitados por superfície.
- `shadow-soft`: halo difuso de baixa opacidade para dropdown, Header em scroll e card realmente elevado.
- `shadow-modal`: um único nível mais perceptível para diálogo e overlay.

Sombras nunca devem ser pretas, duras ou decorativas. Glassmorphism não é linguagem do sistema. Blur só é permitido por função — por exemplo, suavizar conteúdo sob Header sticky — e sempre com fundo vermelho suficientemente opaco.

## 12. Fotografia

Priorizar profissionais, pessoas e ambientes reais da Bellissimo, com consentimento e contexto correto. A direção é luz natural ou difusa, temperatura levemente quente, pele real, sorriso espontâneo, enquadramento editorial, fundo limpo, profundidade de campo sutil e espaço negativo planejado para texto quando necessário.

Evitar stock genérico, dentes 3D, instrumentos ameaçadores, procedimento explícito, pose com prancheta, sorriso artificial, beauty filter, reconstrução de identidade, fundo falso e cortes na testa, queixo ou mãos.

### Padronização da equipe

- Definir uma proporção comum por contexto: retratos principais em 4:5; avatares apenas quando funcionalmente circulares.
- Usar preenchimento pelo contêiner e posição individual por pessoa; nunca aplicar uma posição global que corte rostos.
- Manter olhos aproximadamente na mesma linha em grids.
- Usar fundo neutro quente ou tratamento de superfície consistente, sem apagar características reais.
- Corrigir exposição, temperatura e contraste de modo leve; não alterar traços, pele ou dentes.
- Preservar margem visual ao redor de cabeça e ombros.
- Fotos reais têm prioridade mesmo quando a qualidade varia. Se necessário, reduzir a diferença por enquadramento e superfície, não por filtros agressivos.

Alt text descreve informação útil e contexto, não aparência subjetiva. Imagem decorativa usa alt vazio. Crédito e autorização devem ser rastreáveis fora do texto alternativo.

## 13. Uso da marca e dos logos

### 13.1 Inventário atual

| Categoria | Arquivo recomendado | Fundo e contexto | Mínimo visual provisório |
|---|---|---|---:|
| Logo horizontal claro | `public/images/brand/logos/bellissimo-logo-horizontal-light.png` | Header em `brand`, Footer em `dark-section` e superfícies escuras uniformes | 150px de largura da arte; 180px recomendado |
| Logo horizontal escuro | `public/images/brand/logos/bellissimo-logo-horizontal-dark.png` | `background`, `surface` e fundos claros sem ruído | 150px de largura da arte |
| Logo horizontal vermelho | `public/images/brand/logos/bellissimo-logo-horizontal-red.png` | Assinatura em fundo claro neutro; nunca sobre rosa/vermelho semelhante | 150px de largura da arte |
| Símbolo isolado do dente | `public/images/brand/icons/bellissimo-mark-tooth-red.png` | Marcador, detalhe editorial, loading e estado vazio em superfície clara | 28px; 40px recomendado |
| Ícone quadrado | `public/images/brand/icons/bellissimo-icon-square-tooth-red.png` | App icon, atalho ou avatar institucional quadrado; não usar como logo principal | 32px; validar em tamanho real |
| Badge da marca | `public/images/brand/logos/bellissimo-badge-square-red.png` | Selo institucional isolado em área clara e ampla | 128px |
| Logo circular | `public/images/brand/logos/bellissimo-logo-circle-red.png` | Selo, assinatura social ou detalhe institucional pontual | 128px |
| Favicon Bellissimo | Nenhum | O `src/app/favicon.ico` atual é do template; criar derivado simplificado aprovado | Pendente |
| Imagem Open Graph | Nenhuma | Produzir composição própria após receber fotografia autorizada | Pendente |

Todos os PNGs medem 1024×1024, exceto os horizontais, que medem 1536×1024. Eles possuem margens transparentes internas grandes e inconsistentes — especialmente os logos horizontais e o símbolo isolado. Por isso, “largura da arte” na tabela significa o conteúdo visível, não o canvas do arquivo. Antes da implementação, solicitar exports otimizados com canvas justo e respiro uniforme. Não compensar com recorte CSS, escala desigual ou dimensões arbitrárias por variante.

### 13.2 Regras obrigatórias de aplicação

- Usar o arquivo original mais adequado ao fundo; não aplicar filtro CSS, recolorir, redesenhar com texto ou trocar tipografia.
- Preservar proporção intrínseca; nunca comprimir, cortar, inclinar ou adicionar sombra.
- Área de respiro provisória: no mínimo 25% da altura visível do dente em todos os lados do logo horizontal; para selos, 12,5% do diâmetro. O manual oficial, se fornecido, prevalece.
- O subtítulo “CLÍNICA ODONTOLÓGICA” precisa continuar legível. Se ele desaparecer no tamanho necessário, não ampliar o Header de forma desproporcional: solicitar uma versão responsiva oficial do logo.
- Símbolo isolado: mínimo provisório de 28px em UI; favicon e microtamanhos exigem derivado simplificado próprio.
- Header desktop: logo horizontal claro com arte visível de 180–220px de largura; mobile, 150–176px. Nunca forçar largura ou altura separadamente.
- Footer: logo horizontal claro com arte visível de 200–240px, limitado pelo layout e pelo respiro.
- Fundo permitido depende da variante: claro/branco sobre `brand` ou `dark-section`; escuro/vermelho apenas sobre superfícies claras com contraste validado.
- Em mobile, reduzir até o guardrail e preservar respiro; se não couber, simplificar a navegação, não o logo.
- Não repetir logo completo em Hero, cards ou fundos. Símbolo pode aparecer uma única vez como detalhe discreto por composição.

Tamanhos acima são guardrails de interface, não normas oficiais de marca. Validar legibilidade nos exports finais e substituir pelas normas do manual oficial quando disponível.

## 14. Header

**Objetivo:** identificação imediata, acesso à navegação e ação principal sem competir com o conteúdo.

**Anatomia:** logo horizontal claro; navegação principal; estado ativo; CTA; no mobile, botão de menu e painel. Não incluir itens sem finalidade ou dados não confirmados.

- Fundo `brand` (`#C71838`, derivado acessível do vermelho extraído) desde o carregamento; nunca transparente ou branco durante scroll.
- Texto, links e ícones em `brand-foreground`; CTA branco com texto `brand`.
- Logo obrigatório: `public/images/brand/logos/bellissimo-logo-horizontal-light.png`. Não substituir pelo badge, logo circular ou ícone quadrado.
- Altura: 80px desktop; 72px tablet; 64px mobile. Área clicável de controles com no mínimo 44×44px.
- Conteúdo alinhado ao `container-main`; logo à esquerda, navegação com ritmo de 24–32px, CTA à direita.
- Sticky permitido. Em scroll, manter vermelho e adicionar apenas borda clara discreta ou `shadow-soft`; opacidade pode mudar sutilmente sem reduzir contraste.
- Ativo: sublinhado curto, indicador ou peso 700; nunca depender apenas da cor.
- Hover: leve mudança de opacidade ou sublinhado em 160ms. Active: feedback de cor, sem grande escala.
- `focus-visible`: anel claro de 2px com offset de 2px; no CTA branco, usar `ring` com offset branco.
- Mudar para menu mobile quando links + CTA não mantiverem áreas de toque e respiro; referência inicial entre 900 e 1024px, validada pelo conteúdo, não pelo dispositivo.
- Menu mobile mantém superfície vermelha, logo claro, links claros e CTA branco. Pode ocupar painel integral ou drawer amplo; deve prender foco, fechar por Escape e devolver foco ao disparador.

**Uso incorreto:** Header transparente sobre foto; transformação para branco no scroll; logo circular como principal; links comprimidos; fundo escuro agressivo; CTA vermelho sobre vermelho.

## 15. Hero

**Objetivo:** apresentar a Clínica Bellissimo como instituição humana e confiável, usando a Dra. Aline como representação da equipe — não como marca pessoal.

**Composição:** Header vermelho separado; Hero claro e contínuo; texto em área sólida; fotografia integrada ao fundo, sem card ou divisão rígida 50/50. Base `hero-background` (`#D8CEC4`). Uma transição tonal neutra pode unir texto e fotografia, mas deve desaparecer por completo antes do rosto e jamais lavar pele, cabelo ou roupa.

### Assets e art direction

Nenhum arquivo existe em `public/images/hero`. Antes da implementação, são necessários pelo menos um asset desktop e um mobile aprovados. O mobile deve ter enquadramento próprio, não ser mera redução do desktop. O componente deve priorizar somente o asset correspondente ao breakpoint e evitar baixar as duas versões. O rosto nunca pode ser coberto por texto, gradiente, Header, CTA ou controles.

### Hierarquia

Eyebrow opcional; `h1`; descrição curta; CTA principal vermelho; CTA secundário de menor peso. O logo não é repetido. O texto deve falar da clínica e do cuidado oferecido; nome ou credencial da profissional só aparece se confirmado nos dados oficiais.

### Proporções

- Desktop: altura recomendada de 640–760px ou cerca de 72–82svh, sem obrigação de tela cheia; conteúdo acima da dobra.
- Notebook/viewport baixo: 520–640px; reduzir espaços, não cortar conteúdo ou rosto.
- Tablet: 560–680px; permitir texto e fotografia em camadas/zonas adaptadas.
- Mobile: mínimo aproximado de 540px e até 76–88svh conforme crop; usar `svh` quando altura relativa for necessária e nunca ocultar conteúdo pela barra do navegador.
- Em 320px, CTAs empilham em largura útil, texto fica sobre área sólida e foto pode migrar para a zona inferior se o asset autorizar.

**Uso incorreto:** card de foto, recorte artificial, 50/50 rígido, texto sobre o rosto, logo duplicado, fundo vermelho contínuo após Header, carregamento simultâneo desnecessário de desktop e mobile.

## 16. Seções editoriais e faixa de confiança

### Faixa de confiança

Objetivo: reduzir incerteza com fatos verificáveis, não com slogans. Usar superfície aberta ou `surface`, divisores finos e no máximo 3–4 itens. Cada item contém ícone funcional opcional, dado confirmado e explicação breve. Em mobile, rolar verticalmente; não criar carrossel automático. Não inventar anos, quantidades, avaliações ou credenciais.

### Apresentação institucional

Usar composição assimétrica de texto e fotografia, com 5/7 ou 7/5 colunas no desktop e ordem narrativa no mobile. Título, 1–3 parágrafos, ação opcional e imagem real. Não envolver tudo em card. Manter texto em `container-reading` e imagem com `radius-xl` quando não for full-bleed.

### Experiência Bellissimo

Explicar o que diferencia a jornada de atendimento com sequência curta e verificável. Preferir composição editorial, passos numerados ou faixas abertas; card só quando cada etapa exige autonomia. Vermelho entra em número, marcador ou ação, não como fundo de todos os passos. Sem prometer ausência de dor ou resultado.

Em todas as seções: uma ideia principal, alternância moderada entre `background`, `surface-muted` e uma única área `dark-section`; padding conforme a escala; heading seguido de texto curto; responsividade por reordenação, não compressão.

## 17. Tratamentos

**Objetivo:** permitir descoberta e comparação sem transformar saúde em catálogo comercial.

**Anatomia do item:** nome confirmado, descrição factual de 2–3 linhas, indicação de navegação e imagem/ícone somente se informativo. Não inventar especialidades ou procedimentos.

- Grid: 1 coluna em 320–430px; 2 no tablet; 3 no desktop quando o texto couber confortavelmente.
- Card permitido porque os itens são repetíveis e navegáveis. Usar `surface`, `radius-lg`, borda fina e padding 24–32px; sombra apenas no hover e muito discreta.
- Alternativa preferível para listas longas: linhas editoriais com título, resumo e seta, evitando dezenas de caixas.
- Hover: borda `brand` e pequena mudança de fundo; não deslocar layout. Focus: anel visível. Todo card clicável deve ter um único destino e sem links aninhados conflitantes.
- Imagens devem ser reais ou contextuais; não usar dentes 3D ou procedimento explícito.
- Mobile: conteúdo completo, alvos 44px, sem depender de hover; limitar descrição antes de “Saiba mais” apenas se o conteúdo continuar acessível.

## 18. Equipe

**Objetivo:** criar proximidade e comprovar quem atende, usando apenas dados verdadeiros.

**Anatomia:** retrato 4:5, nome, função/especialidade e registro apenas quando fornecidos e verificados, resumo opcional e link de perfil. Não inventar CRO, formação ou especialidade.

- Retratos seguem as regras da seção 12 e `object-position` individual.
- Grid aberto preferencial: imagem, texto abaixo e bastante respiro; borda/card somente se necessário para equalizar fontes muito distintas.
- Desktop: 3–4 colunas conforme quantidade e legibilidade; tablet 2; mobile 1 ou 2 apenas se retrato e nome continuarem claros em 320px.
- Nome usa `h4`; metadados usam `body-small`; CTA é link, não botão dominante.
- Estados de carregamento preservam a proporção 4:5 para evitar layout shift.

## 19. Depoimentos

**Objetivo:** apresentar experiência real e autorizada, sem sugerir resultado clínico garantido.

**Anatomia:** citação curta, nome/identificação consentida, contexto opcional e origem verificável. Nunca inventar texto, paciente, nota ou foto.

- Usar lista ou grid de 1–3 itens, não carrossel pesado. Se houver mais conteúdo, paginação manual acessível.
- Aspas são detalhe tipográfico discreto; não usar estrelas sem fonte de avaliação real.
- Card em `surface` com borda e `radius-lg`, ou bloco aberto com divisor. Não usar fundo vermelho em todas as citações.
- Controles de carousel, se inevitáveis, têm nomes acessíveis, estado de posição e 44px; autoplay desativado.

## 20. FAQ

**Objetivo:** responder dúvidas reais e encaminhar questões clínicas individuais ao atendimento.

**Anatomia:** título, pergunta acionável, resposta, ícone de expansão e CTA contextual opcional. Um item aberto por padrão é aceitável, mas não obrigatório.

- Preferir accordion em superfície aberta, com divisores `border`; evitar card separado por pergunta.
- Cabeçalho inteiro é botão com mínimo 48px de altura; ícone indica estado e não é a única pista.
- Usar elemento semântico equivalente a botão com `aria-expanded` e relação com o painel.
- Transição de 200–240ms; conteúdo permanece acessível com redução de movimento.
- Respostas não diagnosticam, não prometem e não escondem ressalvas importantes.

## 21. CTA final

**Objetivo:** encerrar a narrativa com uma ação clara e não coercitiva.

Usar `dark-section` ou `brand-soft`, nunca reproduzir o Header como uma faixa vermelha extensa. Anatomia: eyebrow opcional, título direto, apoio curto, uma ação principal e uma secundária opcional. Padding editorial amplo; texto máximo de 640px. Em fundo escuro, botão branco com texto escuro ou vermelho com branco conforme a hierarquia e o contraste. Em mobile, botões empilham e ocupam largura útil. Evitar cronômetros, urgência, desconto, promessa ou repetição de três CTAs equivalentes.

## 22. Footer

**Objetivo:** encerrar com credibilidade, localização/navegação útil e acesso legal.

- Fundo `dark-section`; usar `public/images/brand/logos/bellissimo-logo-horizontal-light.png`; texto `dark-section-foreground`; detalhes em `brand-source` ou `brand` apenas se distinguíveis.
- Desktop: marca e resumo em área principal, seguidos por 2–4 grupos de links. Evitar excesso de colunas.
- Mobile: uma coluna; grupos podem ser accordions acessíveis se longos. Informações essenciais permanecem visíveis.
- Logo com guardrails da seção 13; logo circular nunca é a marca principal.
- Incluir apenas dados comerciais confirmados: endereço, contatos, horários, redes, política de privacidade e direitos autorais.
- Links em branco suave, hover sublinhado/clareado, foco de 2px. Ícones sociais com rótulo acessível e 44px.
- Divisor em branco com baixa opacidade apenas se ainda alcançar contraste de forma perceptível.
- Símbolo do dente pode aparecer uma vez como marca d'água discreta e decorativa, com leitura preservada e oculto de leitor de tela.

## 23. Botões e links

Todos os botões têm altura mínima de 48px no fluxo principal, 44px no mínimo absoluto, padding horizontal de 20–28px, `radius-md`, label Manrope 700 e foco visível. Loading preserva largura, mostra indicador e mantém label acessível. Disabled reduz contraste visual, mas permanece identificável; não recebe hover e não deve ser usado para esconder explicação.

| Variante | Aparência | Uso |
|---|---|---|
| `primary` | `brand` + branco; hover `brand-hover`; active `brand-active` | Uma ação dominante por região clara |
| `secondary` | transparente ou `surface`, texto `foreground`, borda `border-strong` | Ação alternativa |
| `ghost` | transparente, texto `brand`, sem borda inicial | Ação de baixa ênfase em área tranquila |
| `dark` | `foreground` + branco quente | Ação forte em superfície clara sem competir com `primary` |
| `light` | branco + texto `brand` ou `foreground` | CTA do Header e áreas escuras/vermelhas |
| `destructive` | `danger` + branco | Exclusivamente ação destrutiva com confirmação adequada |
| `icon-button` | quadrado/círculo de 44–48px, ícone central | Controles cujo ícone seja universal; sempre com nome acessível |

Não usar gradiente, sombra pesada, bounce, elasticidade ou crescimento grande. Active pode comprimir no máximo cerca de 1–2%, sem comprometer `prefers-reduced-motion`.

Links inline devem ser reconhecíveis por sublinhado persistente ou outra pista além da cor. Hover fortalece o sublinhado; focus usa `ring`. Links de navegação podem usar indicador de posição em vez de sublinhado constante.

## 24. Formulários

**Objetivo:** coleta simples, segura e transparente, com o mínimo de dados necessário.

**Anatomia:** label visível, controle, ajuda opcional, erro específico e indicação de obrigatório no texto. Placeholder é exemplo, nunca substitui label.

- Inputs, selects e textareas: `surface`, texto `foreground`, borda `border-strong`, `radius-md`, altura mínima 48px; textarea mínimo de 120px.
- Padding horizontal 14–16px; agrupamento vertical de 20–24px.
- Hover reforça borda; focus usa anel `ring` de 2px com offset; erro usa `danger`, ícone e texto; sucesso não deve aparecer prematuramente.
- Mensagem de erro fica junto ao campo e em resumo no topo quando o envio falhar. Mover foco ao resumo quando apropriado.
- Select mantém seta reconhecível. Não criar controle customizado se o nativo resolver com acessibilidade superior.
- Loading de envio bloqueia duplicidade, preserva dados e anuncia estado. Confirmação explica o próximo passo sem prometer prazo não validado.
- Privacidade e consentimento devem ser claros. Não solicitar informação clínica sensível sem necessidade, base e proteção adequadas.

## 25. Ícones e elementos decorativos

Lucide React já está instalado e deve ser a fonte preferencial de ícones funcionais. Usar o mesmo traço, geralmente 1,75–2px, tamanhos de 16, 20 ou 24px e alinhamento óptico consistente. Ícone nunca substitui label quando o significado não for universal.

O símbolo oficial Bellissimo, quando fornecido, pode aparecer em favicon, loading, pequenos marcadores, estados vazios, separadores ou assinatura institucional. Não repetir em todos os cards nem usar o logo completo como decoração. Elementos decorativos devem ser ignorados por leitores de tela.

- Badge: conteúdo curto, `surface-muted` ou `brand-soft`, `radius-full` somente por sua escala pequena, nunca como CTA.
- Tag: informativa ou filtrável; estado selected usa borda e ícone além de cor.
- Breadcrumb: somente em níveis internos; links + página atual, truncamento acessível no mobile.
- Estado vazio: ícone discreto, título, orientação e ação possível; nunca culpar o usuário.
- Loader: símbolo apenas se asset oficial simplificado existir; caso contrário spinner discreto. Movimento contínuo somente durante espera real.
- Skeleton: replica a geometria do conteúdo, usa `surface-muted`, pulso suave e não é anunciado repetidamente.
- Modal futuro: usar apenas para decisão focal; título, fechamento visível, foco preso, Escape, retorno de foco e scroll controlado.

## 26. Motion

Movimento é curto, funcional, discreto e previsível.

- Microinterações: 120–180ms.
- Transições padrão: 180–240ms.
- Entrada editorial excepcional: 300–420ms.
- Easing de entrada: desaceleração suave; saída ligeiramente mais rápida. Evitar elasticidade.
- Hover: cor, borda, sublinhado ou deslocamento de até 2px.
- Accordion/menu: transição curta sem bloquear leitura.
- Header: apenas fundo/opacidade, borda ou sombra discreta.
- Loading: pulse/fade suave; rotação somente para spinner funcional.

Respeitar `prefers-reduced-motion`: remover deslocamentos e entradas, manter mudanças instantâneas ou fades mínimos. Não usar parallax, scroll animation em todas as seções, bouncing, movimento constante, autoplay de vídeo ou carrossel automático. O conteúdo deve fazer sentido sem animação.

## 27. Responsividade

A estratégia é mobile-first, baseada em espaço disponível, não em modelos de aparelho.

| Faixa de validação | Comportamento esperado |
|---|---|
| 320px | Uma coluna, gutter 16px, título fluido, CTA em largura útil, zero scroll horizontal |
| 375px | Gutter 20px, conteúdo completo e controles de 44px |
| 390px | Validar cortes do Hero e nomes longos da equipe |
| 430px | Permitir pares apenas para itens muito simples; texto segue em uma coluna |
| Tablet vertical | 8 colunas, composições 4/4 ou 3/5, menu possivelmente compacto |
| Tablet horizontal | 8–12 colunas; grids 2–3 itens; validar toque, não presumir mouse |
| Notebook | 12 colunas, gutter 40px, Hero adaptado a viewport baixa |
| Desktop amplo | Conteúdo trava em 1280/1360px; margens absorvem o excedente |

Empilhar texto e imagem quando a largura de leitura cair; reorganizar imagem abaixo/depois do texto conforme narrativa; trocar assets do Hero; reduzir padding antes de fonte; esconder apenas decoração; converter grids em listas/colunas; alinhar texto à esquerda no mobile por padrão. Não ocultar conteúdo essencial, comprimir links, reduzir texto abaixo de 14px ou criar dependência de hover.

Testar também zoom de 200%, orientação, texto ampliado e viewport baixa. Quebra de linha em português deve ser considerada nos CTAs e títulos.

## 28. Acessibilidade

- WCAG 2.2 AA como mínimo para contraste, operação e estados.
- Skip link como primeiro controle focável, apontando ao conteúdo principal.
- Ordem de foco acompanha a leitura visual; nenhum `tabindex` positivo.
- `focus-visible` nunca removido sem substituto equivalente.
- Um `h1` por página; níveis seguintes sem saltos motivados apenas por estilo.
- Landmarks semânticos para Header, navegação, main e Footer.
- Labels persistentes, erros associados e anúncios de status com regiões apropriadas.
- Menus e accordions expõem estado; modais prendem e devolvem foco; Escape fecha quando seguro.
- Alt text factual; imagens decorativas ignoradas; vídeo futuro exige controles e alternativa apropriada.
- Alvos interativos de 44×44px em mobile sempre que possível; espaçamento suficiente entre alvos.
- Estado nunca indicado apenas por cor: combinar texto, ícone, sublinhado, borda ou posição.
- Não esconder conteúdo importante de leitor de tela por conveniência visual.
- Respeitar redução de movimento e preferências do sistema sem criar um tema escuro automático não projetado.

## 29. Performance

- Server Components por padrão; Client Components apenas quando interação exigir.
- JavaScript mínimo; acordeões, menu e formulários são os principais candidatos a cliente.
- Imagens em AVIF ou WebP quando compatíveis, sempre com dimensões reservadas para evitar layout shift.
- Usar `next/image`, `sizes` coerente com o grid, crop por contexto e art direction real para Hero.
- Prioridade/eager somente para o provável LCP; restante lazy. Não marcar todas as imagens como prioritárias.
- Evitar baixar assets desktop e mobile simultaneamente.
- Fontes por `next/font`, subsets necessários e poucos pesos; preload apenas do que participa da primeira dobra.
- Transições simples em CSS; nenhuma biblioteca de animação pesada sem caso comprovado.
- Sem vídeo automático, parallax, carrossel pesado ou imagens enormes sem compressão.
- Skeleton e placeholder devem reservar exatamente o espaço final.
- O visual premium deve continuar convincente em conexão lenta e sem JavaScript não essencial.

## 30. Tom de voz

O texto é acolhedor, claro, seguro, respeitoso, humano, profissional, elegante e direto. Explicar termos clínicos quando necessários. Preferir frases concretas e curtas. Falar com a pessoa, sem infantilizá-la e sem tratar aparência como problema.

Evitar linguagem excessivamente comercial, urgência, superlativos, jargão sem explicação, frases genéricas de luxo, diminutivos, “sorriso perfeito”, “resultado garantido”, “sem dor” e “a melhor clínica”.

CTAs recomendados: **Agendar avaliação**, **Falar com a clínica**, **Conhecer tratamentos**, **Conhecer a equipe**, **Saiba mais** e **Entrar em contato**. Usar “Agendar avaliação” somente se o fluxo realmente oferecer agendamento; caso apenas abra conversa, preferir “Falar com a clínica”.

## 31. Regras éticas para saúde

- Não prometer ou garantir resultado.
- Não inventar depoimento, paciente, CRO, formação, especialidade, dado ou certificação.
- Não publicar antes e depois sem autorização válida e adequação às regras aplicáveis.
- Não usar medo, vergonha, defeito estético ou urgência como persuasão.
- Não oferecer diagnóstico pelo site nem sugerir que conteúdo substitui avaliação profissional.
- Não usar fotografia constrangedora, invasiva ou de procedimento explícito como atração.
- Não esconder contraindicações, limites, termos ou avisos relevantes.
- Não alterar foto a ponto de produzir expectativa irreal.
- Distinguir informação institucional de orientação individual.
- Toda prova social e alegação devem ter fonte e aprovação registradas.

Confiança vem de clareza, pessoas reais, credenciais verificadas e boa experiência — não de manipulação.

## 32. Tokens e integração futura com Tailwind

### 32.1 Camadas de tokens

1. **Primitivos:** valores brutos de cor, espaço, raio, sombra e tipo. Ficam centralizados e não são consumidos diretamente por JSX.
2. **Semânticos:** `background`, `surface`, `foreground`, `brand`, `border`, `ring`, `success` e equivalentes. São a interface principal do tema.
3. **De componente:** somente quando um padrão possui papel estável que não cabe no nível semântico, como `header-background`, `hero-background` e `button-primary-background`.

### 32.2 Convenções

- Usar nomes técnicos em inglês e nomes baseados em função, não em aparência. Preferir `foreground-muted` a `gray-600` dentro dos componentes.
- Traduzir tokens em CSS variables e expô-los ao Tailwind 4 por sua configuração CSS-first futura.
- Componentes reutilizáveis consomem variantes semânticas: `primary`, `secondary`, `ghost`, `dark`, `light`, `destructive` e `icon-button`.
- Não repetir hex, shadow ou pixel arbitrário no JSX. Exceção temporária exige justificativa e posterior promoção a token se repetir.
- Nova variação precisa resolver um caso diferente, funcionar nos estados obrigatórios e ser documentada antes de entrar na biblioteca.
- Mudança de cor oficial deve ocorrer no mapeamento de token, não em busca e substituição por componente.
- Não criar classes como `red-button` ou `cream-card`; nomear pelo propósito.

### 32.3 Relação token–componente

| Padrão | Tokens principais |
|---|---|
| Header | `brand`, `brand-foreground`, `ring`, `shadow-soft` |
| Hero | `hero-background`, `foreground`, `brand`, `container-wide` |
| Card | `surface`, `border`, `radius-lg`, `shadow-soft` opcional |
| Form | `surface`, `foreground`, `border-strong`, `ring`, `danger` |
| Footer | `dark-section`, `dark-section-foreground`, `brand` |
| Feedback | `success`, `warning`, `danger`, cada um com texto/ícone apropriado |

Este documento não autoriza a implementação completa do Tailwind nesta etapa.

## 33. Do e Don't

### Fazer

- Usar áreas neutras amplas e ritmo editorial.
- Aplicar vermelho com estratégia e contraste.
- Priorizar pessoas, equipe e ambientes reais.
- Manter texto legível e comprimentos de linha controlados.
- Respeitar área segura, crop e identidade das pessoas.
- Alternar composição aberta, imagem, grid e card conforme a função.
- Tornar estados visíveis por mais de uma pista.
- Usar movimento apenas quando explica uma mudança.
- Validar em 320px, viewport baixa, teclado e redução de movimento.

### Não fazer

- Usar vermelho em tudo ou em fundos consecutivos.
- Repetir logos ou usar o logo circular como principal.
- Transformar todas as seções em cards.
- Usar stock genérico, dentes 3D ou imagens explícitas.
- Usar preto em excesso, dourado como atalho de luxo ou cores neon.
- Aplicar vidro, blur, gradiente e sombra como decoração recorrente.
- Comprimir, cortar, filtrar ou reconstruir o logo.
- Cobrir o rosto de qualquer pessoa.
- Fazer mobile como mera redução do desktop.
- Inventar dados clínicos, credenciais, depoimentos ou resultados.

## 34. Checklist de implementação

- [ ] Exports oficiais de marca otimizados, com canvas justo e respiro uniforme, recebidos e auditados.
- [ ] Mapeamento `brand-source` → `brand` acessível aprovado pela clínica e revalidado em contraste.
- [ ] Logo horizontal claro aplicado no Header vermelho e Footer escuro.
- [ ] Favicon e Open Graph oficiais definidos; assets do template removidos apenas na fase de implementação.
- [ ] Cormorant Garamond e Manrope configuradas com pesos mínimos.
- [ ] CSS variables e tokens Tailwind semânticos criados sem hex repetido no JSX.
- [ ] Container, grid, spacing, raios e sombras seguem este documento.
- [ ] Header permanece vermelho em todos os estados e breakpoints.
- [ ] Hero usa `#D8CEC4`, asset por breakpoint e área segura real.
- [ ] Apenas a imagem LCP recebe prioridade; dimensões evitam layout shift.
- [ ] Componentes são Server Components salvo necessidade comprovada.
- [ ] Conteúdo e credenciais foram fornecidos/validados pela clínica.
- [ ] Formulários têm label, ajuda, erro e feedback acessíveis.
- [ ] Focus, skip link, teclado, headings e landmarks implementados.
- [ ] `prefers-reduced-motion` respeitado.
- [ ] Não existe scroll horizontal em 320px.
- [ ] Header, menu, CTA e icon buttons mantêm alvos de 44px.
- [ ] Lighthouse e verificação de contraste executados em páginas representativas.

## 35. Checklist de revisão visual

- [ ] O resultado parece exclusivamente Bellissimo, sem aparência reconhecível de Apple, Ferrari ou Mastercard.
- [ ] A marca transmite cuidado, confiança, precisão e acolhimento.
- [ ] O vermelho identifica e orienta sem dominar a página.
- [ ] Header vermelho, logo claro e CTA branco estão consistentes.
- [ ] Footer vinho/grafite, logo claro e links suaves encerram a página com simplicidade.
- [ ] Hero é uma composição contínua, clara e editorial — não um split com card.
- [ ] A Dra. Aline representa a clínica; o conteúdo não parece página pessoal.
- [ ] Rosto, mãos, cabeça e queixo estão preservados nos crops.
- [ ] Desktop e mobile usam art direction própria.
- [ ] Há alternância entre áreas abertas, imagens e cards.
- [ ] Tipografia tem contraste claro entre display e interface e funciona em 320px.
- [ ] Espaçamento é generoso sem criar rolagem vazia.
- [ ] Bordas, raios e sombras são consistentes e moderados.
- [ ] Todas as combinações de cor passam WCAG AA no contexto real.
- [ ] Hover, active, focus, disabled, loading, erro e sucesso foram revisados.
- [ ] Navegação por teclado e leitor de tela preserva ordem e sentido.
- [ ] Fotografias são reais, autorizadas e tratadas sem artificialização.
- [ ] Conteúdo não contém promessas, urgência, diagnóstico ou dados inventados.
- [ ] A experiência continua clara com redução de movimento e conexão lenta.

---

## Pendências obrigatórias antes da implementação visual

1. Receber exports otimizados dos sete assets existentes, sem margens transparentes excessivas e com respiro uniforme; preservar desenho, proporção e cor. Receber também favicon simplificado e imagem Open Graph.
2. Aprovar com a clínica `#E62F47` como referência extraída e `#C71838` como derivação acessível para Header/CTAs; revalidar contraste se a especificação oficial trouxer outro vermelho.
3. Receber fotografias autorizadas do Hero em art direction desktop e mobile, com áreas seguras definidas.
4. Receber fotografias e dados verificados da equipe, incluindo nomes, funções, especialidades e registros que possam ser publicados.
5. Confirmar tratamentos, endereço, contatos, horários, redes sociais, política de privacidade, fluxo real de agendamento e qualquer prova social.
6. Confirmar se existe manual oficial de marca com área de respiro e tamanhos mínimos; essas regras substituem os guardrails provisórios da seção 13.

Até que essas pendências sejam resolvidas, nenhuma versão de logo, credencial, fotografia ou dado deve ser inventada para preencher a interface.

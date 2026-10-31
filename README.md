# Jornada Full Stack Developer — Laravel

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)
![Node.js](https://img.shields.io/badge/Node.js-24.x-green)
![Git](https://img.shields.io/badge/Git-Versionamento-orange)
![GitHub](https://img.shields.io/badge/GitHub-Repositório-black)
![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-blue)

## Sobre o projeto

Repositório dedicado à minha jornada de aprendizado em desenvolvimento Full Stack, com foco futuro em PHP e Laravel.

O objetivo é construir uma base sólida em programação, desenvolvimento web, lógica, algoritmos, versionamento e boas práticas, registrando exercícios, projetos e minha evolução como desenvolvedor.

**Data de início:** 10/10/2026

## Tecnologias e ferramentas

- JavaScript
- Node.js
- HTML5
- Git e GitHub
- Visual Studio Code
- Futuramente: PHP, Laravel, SQL e outras tecnologias Full Stack.

---

# Progresso dos estudos

## Dia 1 — Configuração do ambiente 🎉

**Status:** Concluído.

- [x] Instalação e configuração do Node.js e npm.
- [x] Instalação do Git e configuração da identidade.
- [x] Configuração de SSH para o GitHub.
- [x] Criação da pasta do projeto e abertura no VS Code.
- [x] Inicialização do repositório Git.
- [x] Primeiro commit.
- [x] Renomeação da branch principal para `main`.
- [x] Configuração do repositório remoto `origin`.
- [x] Primeiro push realizado com sucesso.

## Dia 2 — Fundamentos de JavaScript 🎉

**Status:** Concluído.

- [x] Variáveis com `const` e `let`.
- [x] Tipos de dados e conversões.
- [x] Operadores de comparação e operador `%`.
- [x] Estruturas condicionais `if`, `else if` e `else`.
- [x] Operador ternário.
- [x] Estrutura `switch`, `case`, `break` e `default`.

## Dia 3 — Laços e funções 🎉

**Status:** Concluído.

- [x] Laços `for` e condições de repetição.
- [x] Funções com parâmetros e `return`.
- [x] Acumuladores com `soma += i`.
- [x] Sequência de Fibonacci.
- [x] Atualização de variáveis durante a execução dos algoritmos.

## Dia 4 — Arrays e objetos 🎉

**Status:** Concluído.

- [x] Criação e acesso a arrays usando índices.
- [x] Propriedade `length`.
- [x] Métodos `push()` e `pop()`.
- [x] Iteração com `for`.
- [x] Acumulação de valores e cálculo de média.
- [x] Busca do maior valor em um array.
- [x] Contagem de frequência com contadores.
- [x] Criação e atualização de objetos.
- [x] Acesso a propriedades com notação de ponto.
- [x] Arrays contendo objetos.
- [x] Filtragem com `filter()`.
- [x] Transformação com `map()`.
- [x] Encadeamento de métodos (*method chaining*).

---

# Projetos práticos

## Desafio 1 — Calculadora CLI

**Status:** Concluído.

### Objetivo

Desenvolver uma calculadora executada no terminal utilizando JavaScript e Node.js, com interação por perguntas e respostas.

### Funcionalidades

- Solicita ao usuário a operação matemática desejada.
- Recebe dois números pelo terminal.
- Realiza adição, subtração, multiplicação e divisão.
- Valida entradas numéricas.
- Rejeita entradas vazias ou contendo apenas espaços.
- Impede a divisão por zero.
- Informa quando a operação selecionada é inválida.
- Encerra a interface do terminal após o processamento.

### Tecnologias utilizadas

- JavaScript
- Node.js
- Módulo nativo `readline`

### Como executar

Pré-requisito: Node.js instalado.

```bash
node .\Desafio_1\calculadora.js
```

### Testes realizados

- Soma: `10 + 5 = 15`.
- Subtração: `-5 - 2 = -7`.
- Validação de entrada não numérica.
- Rejeição de entradas vazias ou com espaços.
- Tratamento de divisão por zero.
- Tratamento de operação inválida.

### Aprendizados

- Importação de módulos nativos com `require()`.
- Entrada e saída de dados com `readline`.
- Uso de callbacks e arrow functions.
- Conversão de strings para números com `Number()`.
- Condicionais e estruturas `switch/case`.
- Validação de dados e tratamento de erros.
- Encerramento da interface com `rl.close()`.

## Desafio 2 — Todo List em Node.js

**Status:** Concluído e testado.

### Sobre o projeto

Aplicação de linha de comando (CLI) desenvolvida com JavaScript e Node.js para gerenciar uma lista de tarefas.

O objetivo foi praticar conceitos fundamentais da linguagem, manipulação de arquivos, persistência de dados e tratamento de erros, desenvolvendo uma aplicação funcional sem frameworks externos.

### Funcionalidades

- **Adicionar tarefas:** cadastro com validação para impedir entradas vazias.
- **Listar tarefas:** exibição das tarefas, seus status e resumo de pendências.
- **Alternar status:** permite concluir ou reabrir uma tarefa.
- **Remover tarefas:** exclui uma tarefa selecionada.
- **Persistência de dados:** salva as tarefas em arquivo JSON.
- **Validação de entradas:** verifica dados e identificadores informados.
- **Tratamento de erros:** utiliza `try/catch` na leitura e gravação.
- **Recuperação de dados:** trata arquivos JSON inválidos.
- **Rollback:** restaura o estado anterior em memória quando determinadas operações não conseguem ser salvas.

### Tecnologias utilizadas

- JavaScript
- Node.js
- `readline` — interação pelo terminal.
- `fs` — leitura e gravação de arquivos.
- `path` — manipulação de caminhos.
- JSON — armazenamento dos dados.

### Conceitos praticados

- Variáveis, constantes e tipos de dados.
- Condicionais `if/else` e `switch/case`.
- Funções e valores de retorno.
- Arrays e objetos.
- Métodos `push()`, `splice()`, `forEach()`, `filter()` e `map()`.
- Operadores lógicos e booleanos.
- Validação com `Number()` e `Number.isInteger()`.
- Manipulação de strings com `trim()`.
- Leitura e escrita de arquivos com `fs`.
- Serialização e análise de JSON.
- Tratamento de exceções com `try/catch`.
- Persistência de dados e recuperação após erros.
- Versionamento com Git e GitHub.

### Como executar

```bash
cd Desafio_2
node todo.js
```

As tarefas são armazenadas no arquivo `tarefas.json`, criado na pasta do projeto durante o primeiro salvamento bem-sucedido.

---

# Fundamentos da Web e algoritmos

## Dia 7 — Fundamentos da Web 🎉

**Status:** Concluído.

### Projeto prático

Criação de uma página HTML para cadastro de alunos de uma academia.

**Arquivos:**

- `Dia_7/index.html`
- `Dia_7/script.js`

### Aprendizados

- Estrutura de uma página HTML.
- Conexão de arquivo JavaScript externo.
- Captura do envio de formulários.
- Prevenção do comportamento padrão do navegador.
- Leitura e validação de campos de texto.
- Exibição dinâmica de mensagens.
- Depuração de problemas relacionados à ordem de carregamento do script.

**Observação:** o cadastro é uma simulação no navegador. Os dados ainda não são armazenados em banco de dados.

## Dia 7+ — Strings e manipulação de texto 🎉

**Status:** Concluído.

**Trilha:** Fundamentos da Web & Programação — Semana 2.

### Métodos estudados

| Método | Finalidade |
|---|---|
| `split()` | Divide uma string em partes. |
| `join()` | Junta elementos em uma string. |
| `includes()` | Verifica se um trecho está presente. |
| `slice()` | Extrai parte de uma string. |
| `replace()` | Substitui parte de um texto. |
| `trim()` | Remove espaços das extremidades. |
| `toUpperCase()` | Converte letras para maiúsculas. |
| `toLowerCase()` | Converte letras para minúsculas. |
| `reverse()` | Inverte elementos de um array. |
| `match()` | Localiza correspondências com expressões regulares. |
| `map()` | Transforma elementos de um array. |

### Exercícios realizados

- Formatação de nomes e remoção de espaços extras.
- Inversão de strings.
- Busca e contagem de vogais.
- Busca sem diferenciar maiúsculas e minúsculas.
- Substituição de palavras em textos.

### Conceitos aprendidos

- Encadeamento de métodos.
- Separação de palavras com `split()` e `join()`.
- Expressões regulares, como `/\s+/`.
- Imutabilidade de strings.
- Identificação e correção de erros como `TypeError`.
- Diferenças entre `split()` e `join()`.

## Dia 8 — Algoritmos básicos 🎉

**Status:** Concluído.

**Trilha:** Fundamentos da Web & Programação — Semana 2.

### Objetivos

- Implementar busca binária.
- Implementar Bubble Sort.
- Comparar Bubble Sort com o método `.sort()` do JavaScript.
- Compreender a notação Big O.

### Conceitos estudados

| Conceito | Complexidade | Descrição |
|---|---|---|
| Busca linear | O(n) | Percorre os elementos até encontrar o alvo. |
| Busca binária | O(log n) | Divide as possibilidades pela metade; exige lista ordenada. |
| Bubble Sort | O(n²) | Compara elementos vizinhos e troca suas posições. |
| `.sort()` | Depende da implementação | Método nativo do JavaScript para ordenar elementos. |
| Big O | — | Descreve como o custo de um algoritmo cresce com a entrada. |

### Exercícios realizados

- [x] Implementação da busca binária em `Dia_8/busca.js`.
- [x] Utilização dos limites `inicio` e `fim`.
- [x] Tratamento do retorno `-1`.
- [x] Implementação do Bubble Sort com dois laços `for`.
- [x] Comparação de elementos vizinhos.
- [x] Troca de elementos com desestruturação de arrays.
- [x] Comparação entre Bubble Sort e `.sort((a, b) => a - b)`.
- [x] Estudo de O(n), O(log n) e O(n²).

### Como executar

```bash
node Dia_8/busca.js
node Dia_8/bubblesort.js
```

### Aprendizados

- Busca binária utiliza a estratégia de dividir para conquistar.
- A lista precisa estar ordenada para a busca binária funcionar corretamente.
- Bubble Sort organiza elementos por comparações e trocas entre vizinhos.
- `.sort()` pode ordenar números com um comparador numérico.
- Big O ajuda a avaliar o crescimento do trabalho de um algoritmo.

## Dia 9 — Recapitulação com mini-desafios 🎉

**Status:** Recapitulação concluída.

**Trilha:** Lógica II + algoritmos e resolução de problemas.

### Exercícios realizados

- [x] Contar números pares em um array usando `for`, `if` e `%`.
- [x] Encontrar o maior número de um array, incluindo números negativos.
- [x] Remover elementos duplicados usando `includes()` e `push()`.
- [x] Contar a frequência dos elementos utilizando objetos.
- [x] Criar o arquivo `duvidas.md`.

### Conceitos revisados

- Funções e parâmetros.
- Laços de repetição.
- Estruturas condicionais.
- Operador módulo.
- Manipulação de arrays.
- Métodos `includes()` e `push()`.
- Objetos e propriedades dinâmicas.
- Contadores e acumuladores.
- Comparação de valores e tratamento de números negativos.

### Exercism

- [ ] Resolver o exercício `two-fer`.
- [ ] Resolver um segundo desafio da trilha JavaScript.

**Observação:** atividades externas pendentes devido ao bloqueio da CLI do Exercism pelo Windows Device Guard.

## Dia 10 — Git avançado: branches e Pull Requests 🎉

**Status:** Concluído.

### Objetivos

- Trabalhar com branches independentes.
- Praticar commits e histórico de alterações.
- Compreender o fluxo de Pull Requests.
- Revisar alterações antes de incorporá-las à branch principal.
- Praticar merge e resolução de conflitos.

### Atividades realizadas

- [x] Criação da branch `feature/revisao-dia-10`.
- [x] Criação do arquivo `Dia_10/git-avancado.js`.
- [x] Registro das alterações com commit.
- [x] Envio da branch ao GitHub com `git push`.
- [x] Criação do primeiro Pull Request.
- [x] Revisão dos arquivos alterados na aba `Files changed`.
- [x] Merge do Pull Request na branch `main`.
- [x] Atualização da branch local com `git pull origin main`.
- [x] Criação de branches para simular trabalho colaborativo.
- [x] Simulação de conflito de merge.
- [x] Resolução manual do conflito.
- [x] Finalização do merge com commit.
- [x] Limpeza das branches temporárias.

### Comandos Git praticados

| Comando | Finalidade |
|---|---|
| `git switch -c nome` | Cria e acessa uma branch. |
| `git branch` | Lista as branches locais. |
| `git status` | Mostra a situação do repositório. |
| `git add` | Prepara alterações para commit. |
| `git commit` | Registra alterações no histórico. |
| `git push -u origin nome` | Envia uma branch ao repositório remoto. |
| `git pull origin main` | Atualiza a branch com alterações remotas. |
| `git merge nome` | Incorpora alterações de outra branch. |
| `git log --graph --oneline --all` | Visualiza o histórico de commits e branches. |
| `git branch -d nome` | Remove uma branch local já integrada. |

### Aprendizados

- Branches permitem desenvolver funcionalidades isoladamente.
- Pull Requests permitem revisar alterações antes do merge.
- O merge integra históricos de desenvolvimento.
- Conflitos acontecem quando alterações incompatíveis atingem a mesma parte de um arquivo.
- As marcações `<<<<<<<`, `=======` e `>>>>>>>` identificam as versões em conflito.
- Após resolver um conflito, é necessário executar `git add` e finalizar o merge com `git commit`.


## Dia 11 — Fundamentos da Web: como a web funciona 🌐

**Status:** Concluído.

### Objetivos

- Compreender a comunicação entre cliente e servidor.
- Entender o papel do DNS na resolução de domínios.
- Conhecer os protocolos HTTP e HTTPS.
- Identificar os principais métodos HTTP.
- Interpretar códigos de status HTTP.
- Inspecionar requisições utilizando ferramentas do navegador e terminal.

### Conteúdos estudados

- Cliente (browser) e servidor.
- DNS e resolução de nomes de domínio para endereços IP.
- HTTP e HTTPS.
- Criptografia TLS e segurança na comunicação.
- Métodos HTTP:
  - `GET`: solicita um recurso.
  - `POST`: envia dados ao servidor.
  - `HEAD`: solicita apenas os cabeçalhos da resposta.
- Códigos de status HTTP:
  - `2xx`: sucesso.
  - `3xx`: redirecionamento.
  - `4xx`: erros relacionados à requisição.
  - `5xx`: erros no servidor.

### Atividades realizadas

- [x] Compreensão do fluxo de acesso a um site.
- [x] Diferenciação entre resolução DNS e resposta HTTP.
- [x] Análise de situações envolvendo erros `404` e falhas no servidor.
- [x] Execução de requisições HTTP pelo terminal.
- [x] Utilização do comando `curl -I`.
- [x] Interpretação dos cabeçalhos de uma resposta HTTP.
- [x] Comparação entre requisições `HEAD` e `GET`.

### Comandos e ferramentas praticados

| Comando/ferramenta | Finalidade |
|---|---|
| `curl -I URL` | Realiza uma requisição HEAD e exibe os cabeçalhos. |
| `curl URL` | Realiza uma requisição GET e exibe a resposta. |
| DevTools — Network | Inspeciona as requisições realizadas pelo navegador. |

### Aprendizados

- O DNS resolve o domínio para um endereço IP, mas não verifica se o servidor está funcionando.
- O navegador utiliza HTTP ou HTTPS para se comunicar com o servidor.
- O código `200` indica sucesso e o `404` indica que o recurso solicitado não foi encontrado.
- O HTTPS utiliza TLS para proteger a comunicação.
- Uma resposta GET pode conter o HTML da página, mas outros recursos, como CSS, JavaScript e imagens, podem exigir requisições adicionais.


## Dia 12 — HTML semântico

**Status:** Concluído.

### Objetivos

- Estruturar páginas utilizando elementos HTML semânticos.
- Compreender a importância da semântica para SEO e acessibilidade.
- Construir formulários com campos identificados corretamente.
- Validar a estrutura HTML utilizando o W3C Validator.

### Conteúdos estudados

- Elementos semânticos:
  - `header`: cabeçalho.
  - `nav`: navegação.
  - `main`: conteúdo principal.
  - `section`: agrupamento de conteúdo por tema.
  - `article`: conteúdo independente.
  - `footer`: rodapé.
- Formulários HTML:
  - `label`: identificação dos campos.
  - `input`: entrada de dados.
  - `button`: execução de ações.
- Atributos `id`, `for`, `name` e `required`.
- Navegação interna utilizando âncoras (`href`).
- SEO e acessibilidade.
- Validação de HTML pelo W3C.

### Atividades realizadas

- [x] Criação da pasta `Dia_12`.
- [x] Criação do arquivo `Dia_12/index.html`.
- [x] Construção de uma página para a Academia ELITE.
- [x] Utilização de elementos HTML semânticos.
- [x] Criação de seções e artigos para apresentar planos.
- [x] Construção de formulário de cadastro.
- [x] Associação de `label` e `input`.
- [x] Correção de link de navegação interna.
- [x] Execução de servidor local com `npx serve .`.
- [x] Validação do documento no W3C Validator, sem erros ou avisos.

### Comandos e ferramentas praticados

| Comando/ferramenta | Finalidade |
|---|---|
| `npx serve .` | Inicia um servidor HTTP local para visualizar a página. |
| W3C Validator | Verifica a conformidade da marcação HTML. |

### Aprendizados

- HTML semântico atribui significado aos elementos da página.
- A organização semântica contribui para SEO e acessibilidade.
- `section` agrupa conteúdos relacionados, enquanto `article` representa conteúdo independente.
- O atributo `for` do `label` deve corresponder ao `id` do campo.
- Links com `href="#id"` apontam para elementos que possuem o identificador correspondente.
- A validação do W3C ajuda a identificar problemas na estrutura do HTML.


## Dia 13 — CSS: seletores e box model

- Prática com seletores de classe, ID, descendente e atributo.
- Estudo de margin, padding, border e box-sizing.
- Diferença entre content-box e border-box.
- Teste de especificidade e cascata do CSS.
- Exercício prático: estilização de cartões da Academia.


---

# Objetivo de aprendizagem

Esta jornada tem como objetivo construir uma base sólida em desenvolvimento Full Stack, começando pela lógica de programação e JavaScript, avançando para desenvolvimento web, backend, bancos de dados e frameworks.

O aprendizado é realizado de forma incremental, com exercícios práticos, projetos, testes, depuração e versionamento de código.

**Próximas etapas:** continuar aprofundando JavaScript, desenvolvimento web, APIs, PHP e Laravel.

---

**Projeto:** Full Stack Journey
**Objetivo:** Full Stack Developer com Laravel
**Início:** 10/10/2026
**Status:** Em desenvolvimento contínuo.

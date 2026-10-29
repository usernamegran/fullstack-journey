# Jornada Full Stack Developer Laravel

## Data de início
10/10/2026

## Objetivo
Repositório dedicado a aprender desenvolvimento Full Stack com Laravel, armazenando exercícios práticos e acompanhando minha evolução como desenvolvedor.
## Dia 1 - Concluído - 🎉 - Node.js e npm instalados e funcionando
Praticado:
- Git instalado e identidade configurada
- SSH configurado para o GitHub
- Pasta do projeto criada e aberta no VS Code
- README.md criado com objetivo e data de início
- Repositório Git inicializado
- Primeiro commit criado
- Branch principal renomeada para main
- Remoto origin configurado
- Primeiro push realizado com sucesso


## Dia 2 -  concluído! - 🎉
Praticado:
- Variáveis com const e let.
- Tipos de dados e conversões.
- Operadores de comparação e o operador %.
- if, else if e else.
- Operador ternário.
- switch, case, break e default.

## Dia 3 concluído! 🎉
Praticado:
- Laços for e condições de repetição.
- Funções com parâmetros e return.
- Acumuladores com soma += i.
- Sequência de Fibonacci e atualização de variáveis.

## Dia 4 concluído! 🎉

Praticado:
- Criação e acesso a arrays usando índices.
- Propriedade length.
- Métodos push() e pop().
- Iteração com for.
- Acumulação de valores e cálculo de média.
- Busca do maior valor em um array.
- Contagem de frequência com um contador.
- Criação e atualização de objetos.
- Acesso a propriedades com notação de ponto.
- Arrays contendo objetos.
- Filtragem de dados com filter().
- Transformação de dados com map().
- Encadeamento de métodos (method chaining).

## 🧮 Projeto: Calculadora CLI - Desafio_1

### Objetivo
Desenvolver uma calculadora executada no terminal utilizando JavaScript e Node.js, com interação por perguntas e respostas.

### Funcionalidades
- Solicita ao usuário a operação matemática desejada.
- Recebe dois números pelo terminal.
- Realiza as operações de:
  - Adição (`+`)
  - Subtração (`-`)
  - Multiplicação (`*`)
  - Divisão (`/`)
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

**Pré-requisito:** ter o Node.js instalado.

1. Abra o terminal na pasta do projeto.
2. Execute o comando:

   ```bash
   node .\Desafio_1\calculadora.js
   ```

3. Escolha a operação matemática solicitada.
4. Digite o primeiro e o segundo número.
5. Confira o resultado no terminal.

### Testes realizados
- Soma: `10 + 5 = 15`
- Subtração: `-5 - 2 = -7`
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


# Desafio 2 — Todo List em Node.js

## 📌 Sobre o projeto

Este projeto consiste em uma aplicação de linha de comando (CLI) desenvolvida com JavaScript e Node.js para gerenciar uma lista de tarefas.

O objetivo foi praticar conceitos fundamentais da linguagem JavaScript, manipulação de arquivos, persistência de dados e tratamento de erros, desenvolvendo uma aplicação funcional sem utilizar frameworks externos.

## 🚀 Funcionalidades

- **Adicionar tarefas:** permite cadastrar tarefas com validação para impedir entradas vazias.
- **Listar tarefas:** exibe as tarefas cadastradas, seus status e um resumo com o total de tarefas concluídas e pendentes.
- **Alternar status:** permite marcar uma tarefa como concluída ou devolvê-la ao estado pendente.
- **Remover tarefas:** exclui uma tarefa selecionada pelo usuário.
- **Persistência de dados:** salva as tarefas em um arquivo JSON, mantendo os dados entre execuções.
- **Validação de entradas:** verifica se os dados digitados são válidos e se o número informado corresponde a uma tarefa existente.
- **Tratamento de erros:** utiliza `try/catch` para lidar com problemas na leitura e gravação dos arquivos.
- **Recuperação de dados:** trata arquivos JSON inválidos durante o carregamento.
- **Rollback:** restaura o estado anterior da lista em memória quando determinadas operações não conseguem ser salvas.

## 🛠️ Tecnologias utilizadas

- JavaScript
- Node.js
- Módulo `readline` — interação com o usuário pelo terminal.
- Módulo `fs` — leitura e gravação de arquivos.
- Módulo `path` — manipulação de caminhos de arquivos.
- JSON — armazenamento dos dados das tarefas.

## 📚 Conceitos praticados

Durante o desenvolvimento, foram praticados os seguintes conceitos:

- Variáveis, constantes e tipos de dados.
- Condicionais (`if/else` e `switch/case`).
- Funções e valores de retorno (`return`).
- Arrays e objetos.
- Métodos `push()`, `splice()`, `forEach()`, `filter()` e `map()`.
- Operadores lógicos e booleanos.
- Validação de entradas com `Number()` e `Number.isInteger()`.
- Manipulação de strings com `trim()`.
- Leitura e escrita de arquivos com `fs`.
- Serialização e análise de JSON com `JSON.stringify()` e `JSON.parse()`.
- Tratamento de exceções com `try/catch`.
- Escopo de variáveis.
- Persistência de dados e recuperação após erros.
- Versionamento de código com Git e GitHub.

## ▶️ Como executar

**Pré-requisito:** ter o Node.js instalado.

1. Clone o repositório ou acesse a pasta do projeto.
2. Entre na pasta `Desafio_2`.
3. Execute o programa pelo terminal:

```bash
node todo.js
```

As tarefas serão armazenadas no arquivo `tarefas.json`, criado na pasta do projeto quando ocorrer o primeiro salvamento bem-sucedido.

## 🎯 Objetivo de aprendizagem

Este desafio faz parte da minha jornada de aprendizado em desenvolvimento Full Stack, com foco na construção de uma base sólida em JavaScript e Node.js antes de avançar para tecnologias e frameworks mais complexos.

O projeto foi desenvolvido de forma incremental, implementando e testando cada funcionalidade, investigando erros e aprimorando a organização e a confiabilidade do código.

---

**Projeto:** Full Stack Journey  
**Desafio:** 2 — Todo List em Node.js  
**Status:** Concluído e testado.


## Dia 7 - concluído! 🎉

Projeto prático

Criação de uma página HTML para cadastro de alunos de uma academia.

Arquivos:

Dia_7/index.html

Dia_7/script.js

O que aprendi na prática

Criar a estrutura de uma página HTML.

Conectar um arquivo JavaScript externo à página.

Capturar o envio de um formulário.

Impedir o comportamento padrão do navegador.

Ler e validar o valor de um campo de texto.

Exibir mensagens dinamicamente na página.

Identificar e corrigir um problema causado pela ordem de carregamento do script.

Próximos passos

Aprimorar a validação do formulário.

Estudar CSS para melhorar a aparência da página.

Aprender a enviar dados para um servidor e persistir cadastros em um banco de dados.

Observação: o cadastro desenvolvido nesta etapa é apenas uma simulação no navegador; os dados ainda não são armazenados em um banco de dados.

## Dia 7+ — Strings e manipulação de texto

**Trilha:** Fundamentos da Web & Programação — Semana 2  
**Tema:** Lógica II, algoritmos e resolução de problemas  
**Status:** Concluído

### Objetivos
- [x] Praticar operações comuns de manipulação de strings.
- [x] Formatar nomes com maiúsculas e minúsculas.
- [x] Inverter uma string.
- [x] Localizar e contar vogais.
- [x] Substituir palavras em um texto.
- [x] Praticar depuração e correção de erros.

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
| `reverse()` | Inverte a ordem dos elementos de um array. |
| `match()` | Localiza correspondências usando expressões regulares. |
| `map()` | Transforma os elementos de um array. |

### Exercícios realizados

- **Formatação de nomes:** transformar `mARIA da silva` em `Maria Da Silva`, removendo espaços extras.
- **Inversão de string:** transformar `fullstack` em `kcatslluf`.
- **Busca de vogais:** localizar vogais usando `match()` e praticar verificações com `includes()`.
- **Busca sem diferenciar maiúsculas e minúsculas:** combinar `toLowerCase()` com `includes()`.
- **Substituição de texto:** transformar `A academia é pequena` em `A academia é moderna`.

### Conceitos aprendidos
- Encadear métodos para transformar strings.
- Separar palavras com `split()` e reuni-las com `join()`.
- Usar expressões regulares, como `/\s+/`, para separar palavras por um ou mais espaços.
- Entender que strings são imutáveis e que seus métodos retornam novos valores.
- Identificar erros como `TypeError` e corrigir a causa em vez de apenas alterar o resultado.
- Diferenciar os comportamentos de `split()` e `join()`.

### Comandos praticados

Executar JavaScript diretamente no terminal:

```bash
node -e "console.log('dev fullstack'.split(' ').map(w=>w[0].toUpperCase()+w.slice(1)).join(' '))"
```

**Resultado esperado:**

```text
Dev Fullstack
```

### Próximos passos
- Continuar praticando strings e arrays.
- Aplicar os métodos em validações de formulários.
- Integrar os conhecimentos de JavaScript com HTML e futuramente APIs.

## Dia 8 — Algoritmos básicos

**Trilha:** Fundamentos da Web & Programação  
**Semana:** 2  
**Tema:** Lógica II + algoritmos e resolução de problemas  
**Status:** Em andamento

### Objetivos do dia

- Implementar busca binária.
- Implementar o algoritmo de ordenação Bubble Sort.
- Comparar o Bubble Sort com o método `.sort()` do JavaScript.
- Compreender, de forma introdutória, a notação Big O.

### Conceitos estudados

| Conceito | Complexidade | Descrição |
|---|---|---|
| Busca linear | O(n) | Percorre os elementos até encontrar o alvo. |
| Busca binária | O(log n) | Divide as possibilidades pela metade; exige lista ordenada. |
| Bubble Sort | O(n²) | Compara elementos vizinhos e troca suas posições quando necessário. |
| `.sort()` | Depende da implementação | Método nativo do JavaScript para ordenar elementos. |
| Big O | — | Notação utilizada para descrever como o custo de um algoritmo cresce com a entrada. |

### Exercícios realizados

- [x] Implementação da busca binária em `Dia_8/busca.js`.
- [x] Utilização dos limites `inicio` e `fim` para reduzir o espaço de busca.
- [x] Identificação do índice retornado pela busca e tratamento do retorno `-1`.
- [x] Construção da lógica do Bubble Sort com dois laços `for`.
- [x] Comparação de elementos vizinhos utilizando `j` e `j + 1`.
- [x] Troca de elementos com desestruturação de arrays.
- [x] Comparação conceitual entre Bubble Sort e `.sort((a, b) => a - b)`.
- [x] Estudo introdutório de O(n), O(log n) e O(n²).

### Comandos utilizados

Executar a busca binária:

```bash
node Dia_8/busca.js
```

Executar a ordenação, após salvar o exercício:

```bash
node Dia_8/bubblesort.js
```

### Aprendizados

- A busca binária utiliza a estratégia de dividir para conquistar.
- Uma lista precisa estar ordenada para que a busca binária descarte metades com segurança.
- O Bubble Sort organiza elementos por meio de comparações e trocas entre vizinhos.
- O `.sort()` pode ordenar números numericamente com um comparador, como `(a, b) => a - b`.
- A complexidade ajuda a avaliar como o trabalho de um algoritmo aumenta conforme a quantidade de dados cresce.

### Próximos passos

- Finalizar e testar a função `bubbleSort(lista)`.
- Garantir que o Bubble Sort trabalhe com uma cópia, preservando a lista original.
- Comparar os resultados dos dois métodos de ordenação.
- Revisar os conceitos antes de avançar para o próximo dia.

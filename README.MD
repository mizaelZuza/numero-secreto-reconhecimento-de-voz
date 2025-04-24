**Título:** Jogo de Adivinhação

**Descrição:** Este é um jogo de adivinhação simples que gera um número aleatório entre 1 e 1000 e pede que o usuário adivinhe o número. O jogo fornece dicas e feedback ao usuário após cada tentativa.

***Funcionalidades:***

Geração de número aleatório entre 1 e 1000
Interface de usuário para inserir o chute
Verificação do chute e fornecimento de dicas (maior, menor ou correto)
Opção para jogar novamente após acertar o número


***Tecnologias utilizadas:***

 - HTML
 - CSS
 - JavaScript


***Estrutura do projeto:***

 - index.html: arquivo principal do projeto
 - style.css: arquivo de estilos CSS
 - pasta app: arquivos JavaScript que contém a lógica do jogo

**Como jogar?**

- Abra o arquivo index.html em um navegador.
- Insira um número entre 1 e 1000 no campo de texto.
- Aceite o uso de microfone.
- Fale um número (chute).
- O jogo fornecerá dicas e feedback após cada tentativa.
- Continue tentando até acertar o número.
- Após acertar o número, clique no botão "Jogar novamente" para recomeçar.

**Observações:**

O jogo utiliza a função window.location.reload() para recarregar a página após acertar o número. Isso pode causar perda de estado da página. O jogo não armazena o histórico de tentativas ou resultados.
<h2 align="center"> QA Store Desafio </h2>

<br>

##  Processos

- [ Plano de Testes ](#plano-de-testes)
- [ Execução e Evidências ](#execução-e-evidências)
- [ Automação ](#automação)

<br>


## Plano de Teste

#### 🛒 Funcionalidade de Carrinho de Compras com CUPOM

1. **Objetivo:** 

- [x] Validar a nova feature de CUPOM no carrinho de compras, garantindo 
que o carrinho continue funcionando corretamente e que o benefício do CUPOM seja aplicado com sucesso.

2. **Funcionalidades a serem validadas:**

- [x] Adição de CUPOM no carrinho de compras
- [x] Cálculo de desconto do CUPOM no valor total do carrinho
- [x] Verificação de validade do CUPOM
- [x] Exibição correta do valor de desconto no carrinho
- [x] Interação do CUPOM com outras funcionalidades do carrinho, como frete e subtotal.7

3. **Regras e Critérios de Aceite:**

- [x] O CUPOM deve ser aplicado com sucesso e o valor do desconto deve ser exibido corretamente no carrinho.
- [x] O CUPOM deve ser válido e não expirado.
- [x] O valor total do carrinho deve ser recalculado corretamente após a aplicação do CUPOM.
- [x] O CUPOM não deve interferir em outras funcionalidades do carrinho, como cálculo de frete e subtotal.
- [x] Testar diferentes tipos de CUPONS (porcentagem, valor fixo, frete grátis) para garantir que todos sejam aplicados corretamente.
- [x] Validar a integração com outras funcionalidades do e-commerce, como o pagamento.

4. **Estratégias de Teste Aplicadas:**

- [x] **Teste de Unidade:** testar individualmente as funções relacionadas ao CUPOM, como aplicação e validade.
- [x] **Teste de Integração:** verificar a integração do CUPOM com outras funcionalidades do carrinho e do e-commerce.
- [x] **Teste de Aceitação do Usuário:** realizar testes com usuários reais, para validar a experiência do usuário com a nova funcionalidade.

5. **Motivação das escolhas:**

- [x] O teste de unidade é importante para garantir que cada função relacionada ao CUPOM funcione corretamente individualmente, antes de integrá-las ao carrinho.
- [x] O teste de integração é essencial para verificar se o CUPOM não interfere em outras funcionalidades do carrinho ou do e-commerce.
- [x] O teste de aceitação do usuário é importante para garantir que a nova feature esteja funcionando corretamente na experiência do usuário final.


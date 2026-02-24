## Teste Prático Lumi - Desenvolvedor(a) Full Stack Pleno

Este documento detalha o desafio técnico para o processo de seleção da Lumi. O objetivo é avaliar habilidades em desenvolvimento Full Stack através da criação de um sistema de extração e visualização de dados de faturas de energia.

###  Descrição do Desafio
O candidato deve desenvolver um código capaz de:

- Extrair dados relevantes de faturas de energia elétrica fornecidas.
- Organizar esses dados em um banco de dados PostgreSQL.
- Apresentar os dados em uma aplicação web via API.


**Tecnologias exigidas**: TypeScript, Node.js (NestJS ou Express) e React.

### Detalhamento Técnico
**1. Extração de Dados**
- Desenvolver um extrator para capturar as seguintes informações das faturas (anexo FATURAS):

- Identificação: Nº do Cliente e Mês de referência.
- Itens de Fatura (Quantidade e Valor): * Energia Elétrica.
- Energia SCEEE s/ ICMS.
- Energia Compensada GD I.
- Contrib. Iluminação Pública Municipal.


**Dica**: Utilize bibliotecas como ~pdf-lib~ ou ~pdf-parse~ para a extração.

**1.1 Variáveis de Interesse (Cálculos)**

- Consumo de Energia Elétrica (kWh): Somatório de Energia Elétrica kWh + Energia SCEEE S/ICMS kWh.
- Energia Compensada (kWh): Valor direto da Energia Compensada GD I (kWh).
- Valor Total sem GD (R$): Somatório de Energia Elétrica (R$) + Energia SCEE s/ ICMS (R$) + Contrib Ilum Publica Municipal (R$).
- Economia GD (R$): Valor direto da Energia compensada GD I (R$).

**2. Banco de Dados**
- Utilizar PostgreSQL.
- Interação via ORM (Prisma, TypeORM ou Sequelize).

**3. Aplicação Web**

**3.1 Dashboard**

- Página com gráficos (Chart.js ou Recharts) e cards de resumo:
- Energia (kWh): Consumo vs. Energia Compensada.
- Financeiro (R$): Valor Total sem GD vs. Economia GD.

**3.2 Biblioteca de Faturas**
- Filtros por Nº do Cliente e período.
- Lista de faturas com opção de download do arquivo PDF original.

**4.Testes Automatizados**

- Os testes devem validar:
- O parsing correto dos documentos PDF.
- A persistência no banco e retorno pela API.
- A exatidão dos cálculos das variáveis agregadas.

### Entrega e Avaliação

**Código**: Repositório público no GitHub com README detalhado.


**Hospedagem (Opcional)**: Sugestões como Vercel ou Render.


**Critérios de Avaliação**: Precisão na extração, modelagem de dados, organização do código (Backend/Frontend) e boas práticas de design.
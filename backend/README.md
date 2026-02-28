## 1. Instalar dependências

No terminal, dentro da pasta do seu projeto:

```bash
npm install
```

Isso recria a pasta node_modules com todas as libs.

## 2. Gerar o Prisma Client

```bash
npx prisma generate
```

Esse comando recria o client em node_modules/@prisma/client.

## 3. Rodar migrações (se necessário)
Se você ainda não rodou ou alterou o schema:

```bash
npx prisma migrate dev --name init
```

## 4. Subir o servidor NestJS

```bash
npm run start:dev
```
# 🧛‍♂️ NodeJS-TypeScript

### Conteúdo 05 do GoStack da RocketSeat, este repositório aborda conceitos de:

*   Configuração de tsconfig
*   Personalização de ts-node
    *   **--transpile-only:** Apenas fazer a transpilação sem fazer verificação de tipos (ideal quando se trabalha com VSCode)
    *   **--ignore-watch node_modules:** Ignora alterações na pasta node_modules
*   [Repositórios, services & patterns](https://www.notion.so/Repository-service-e-patterns-82419cceb11c4c4fbbc055ade7fb1ac5)
*   Configuração de ormconfig (com postgres)
*   Utilização de migrations com typeorm
*   Criptografia de senha utilizando bcryptjs
*   Utilização de JWT para manipulação de sessão
*   Utilização de multer para upload de imagens
*   Utilização de lib express-async-errors para tratativa de erros de função assíncronas
*   Utilização de eslint para padronização de código


<br>

## Scripts disponíveis

Neste projeto você pode executar:

| Comando             | Descrição                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `npm install`       | Instala as dependências contidas no arquivo package.json para o diretório node_modules                               |
| `npm run build` | Gera os arquivos necessários para modo produção                                                               |
| `npm run dev:server`   | Inicia a aplicação em modo desenvolvimento |
| `npm run typeorm migration:run` | Executa todas as migrations de banco de dados |
| `npm run typeorm migration:revert`   | Reverte a última migration executada |

<br>

## Solução para possíveis erros

> **error:** database "gostack_gobarber" does not exist
>> **Solução**
>> Crie o BD "gostack_gobarber"

<br>

> **Error:** connect EHOSTUNREACH 192.168.1.120
>> **Solução**
>> Altere o arquivo ormconfig.json com o host do seu servidor postgres

# LabenuTube

## Stack Front-end
O Front-end web desse projeto teve seus arquivos em divididos duas seções. Foram divididos em `Components` onde são guardados os inputs, cards de videos e etc. Já nos `Containers` são as páginas que "pensam" em união aos componentes para se mostrar na tela.

## Linguagens e serviços utilizadas Front-end
ReactJs, Redux, javascript, Material-ui, HTML, CSS, Aws s3 para o hosting do site e gerenciadores de pacotes do Nodejs: yarn e npm.

## Stack Back-end
O Back-end web desse projeto segue uma arquitetura em camadas simples;
1. Presentation: responsável pela comunicação com agentes externos (como o Frontend)
1. Data: responsável pela comunicação direta com o banco de dados
1. Business: responsável pela lógica de negócio
Por fim, ressalta-se que a comunicação da camada `Data` e a `Business` é feita através de interfaces denominadas `Gateway`, para possibilitar os testes unitários desta última camada (inversão de dependências)

## Linguagens e serviços utilizadas Back-end
Typescript, Aws Ec2 virtual machine, Serviço serverless Aws Lambda, Aws api-gateway, Express, banco de dados mysql, gerenciadores de pacotes do Nodejs: yarn e npm.

## Sobre
Esse foi o primeiro projeto Full-stack que fiz. Utilizei os para treinar os casos básicos de um Crud de uma API: Create, Read, Update e Delete. Esse projeto foi baseado no youtube com funcionalidades parecidas. Nele o usuário consegue criar vídeos, consegue criar um conta, deletar vídeos, assistir vídeos, consegue ver os seus próprios dados, modificar dados do próprio usuário logado e também os dados de vídeos criados pelo usuário. 

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em sua máquina, basta abrir o terminal e navegar até o repositório clonado e rodar:
1. `npm install` ou `yarn` para instalar todas as dependências;
1. `npm run start` ou `yarn start` para rodar localmente o projeto
1. `npm run build` ou `yarn build` para gerar uma versão estática do projeto (que ficará na pasta `build`)

## Contato
Brian de Paula Mello
brianmmello@gmail.com
21 98268-1935

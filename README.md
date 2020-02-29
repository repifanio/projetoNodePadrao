# Projeto Base em Node

Esse é o modelo de projeto base que eu utilizo para criar novas aplicações. O mesmo utiliza libs e extensões (visual studio code) para que o código tenha um padrão de escrita.

Abaixo seguem as Libs utilizadas:

- Eslint
- Prettier
- Nodemon
- Sucrase

Abaixo, seguem as extensões utilizadas:

- EsLint
- EditorConfg

## Comentários:

O Eslint realiza o lint do projeto utilizando como base o padrão adotado na AirBnB, no entanto, como utilizo também o Prettier, necessito dos arquivos .eslintrc e .prettierrc para realizar algumas configurações para que as regras não se sobreponham.

## Configurações no VSCode

Para que ao salvar o arquivo o Eslint possa corrigir o código conforme as suas definições, é necessário adicionar algumas linhas de código no arquivo de configuração do Visual Studio Code.

Seguem abaixo:

 

    "[javascriptreact]": {
    	"editor.codeActionsOnSave": {
    		"source.fixAll.eslint": true,
    	}
    },

    "[javascript]": {
    	"editor.codeActionsOnSave": {
    		"source.fixAll.eslint": true,
    	}
    }

const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name: 'pergunta1',
    message: 'Qual seu nome? ',
},
{
    name: 'pergunta2',
    message: 'Qual sua idade? ',
},
])
.then((answers) => {
    const nome = answers.pergunta1
    const idade = answers.pergunta2

    console.log(chalk.bgYellow.black(`Seu nome é ${nome} e sua idade é ${idade}`));
})
.catch((err) => console.log(err))

export default function (plop) {

  plop.setHelper('lowerPascalCase', (txt) => {
    const s = txt.replace(/\w+/g,
      function (w) { return w[0].toLowerCase() + w.slice(1).toLowerCase(); });
    return s;
  });

  // create your generators here
  plop.setGenerator('component', {
    description: 'scaffold out a basic component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is the name of your component?'
    }], // array of inquirer prompts
    actions: [{
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/component.tsx.hbs'
      }, {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/component/component.stories.tsx.hbs'
      }, {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/component/component.test.tsx.hbs'
      }, {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/component/index.ts.hbs'
    }]  // array of actions
  });
};
const execSync = require('child_process').execSync;

const generatePath = '../angular2';

const srcSwagger = '/Users/r.mechany/GitHub/innovi-core-backend/analytics-config/cmd/analytics-config-service/docs/analyticsconfigservice_swagger.json'
console.log('removing generated/openapi directory...');
execSync(`rm -rf ${generatePath}`);

const output = execSync(
  `npx @openapitools/openapi-generator-cli generate -g typescript-angular -i ${srcSwagger} -o ${generatePath} --additional-properties=usePromises=true`,
  { encoding: 'utf-8' }
);



console.log(output);
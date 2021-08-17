const { SSM } = require('aws-sdk');

(async () => {
  const ssm = new SSM();
  const { APP_MONIKER } = process.env;
  const monikerLength = APP_MONIKER.length;
  const params = {
    Path: `/${APP_MONIKER}`,
    WithDecryption: true,
    Recursive: true,
  };

  const { Parameters } = await ssm.getParametersByPath(params).promise();
  const secrets = Parameters.map(({ Name, Value }) => {
    // Name is in the format of /moniker/name and we want just the name
    return `${Name.substr(monikerLength + 2)}=${Value}`;
  }).join(' ');

  console.log(secrets);
})();

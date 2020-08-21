'use strict';

const { KintoneRestAPIClient } = require('@kintone/rest-api-client');
const client = new KintoneRestAPIClient({
  baseUrl: `https://${process.env.KINTONE_DOMAIN}`,
  auth: {
    apiToken: process.env.KINTONE_APITOKEN
  }
});

const app = process.env.KINTONE_APPID;

// 質問の選択肢
const select = [
  '①使ったことある',
  '②何ができるか知ってる',
  '③聞いたことならある',
  '④初耳',
];

// Lambdaのレスポンス処理
const response = (code, msg) => {
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: msg
    })
  };
};

module.exports.main = async event => {
  try {
    console.log(event);
    const data = JSON.parse(event.body);
    const record = {
      question: {
        value: select[Number(data.value)]
      }
    };
    await client.record.addRecord({app, record});
    return response(200, 'success');
  } catch(err) {
    console.log({msg: 'エラー発生', body: err});
    return response(500, 'error');
  };
};

const url = 'https://trbt37uedj.execute-api.ap-northeast-1.amazonaws.com/prod/bbq';
const postData = async function(event) {
  try {
    const resp = await axios.post(url, {value: event});
    console.log(resp);
  await swal('送信完了！');
  } catch(err) {
    await swal('エラー発生！！');
    console.log(err);
  }
};
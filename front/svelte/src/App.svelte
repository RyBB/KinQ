<script>
  import swal from 'sweetalert';
  import axios from 'axios';

  const url = 'https://trbt37uedj.execute-api.ap-northeast-1.amazonaws.com/prod/bbq';
  const postData = async function() {
    try {
      const resp = await axios.post(url, {value: this.value});
      console.log(resp);
    await swal('送信完了！');
    } catch(err) {
      await swal('エラー発生！！');
      console.log(err);
    }
  };
</script>

<main>
  <div class="header-contents">
    <div class="top">
      <div class="logo cursor">☁ kintone </div>
    </div>
    <div class="menu">
      <div class="icon">
        <i class="fas fa-bars cursor"></i>
        <i class="fas fa-home cursor"></i>
        <i class="fas fa-bell cursor"></i>
        <i class="fas fa-star cursor"></i>
      </div>
    </div>
    <div class="image">
      <div class="title">BBQuestion</div>
    </div>
  </div>
  <div class="main-contents">
    <div class="widget">
      <h1>kintone 知ってる？</h1>
      <hr>
      <table class="buttons">
        <tr>
          <td><button class="cursor" value="0" on:click={postData}>①使ったことある</button></td>
          <td><button class="cursor" value="1" on:click={postData}>②何ができるか知ってる</button></td>
        </tr>
        <tr>
          <td><button class="cursor" value="2" on:click={postData}>③聞いたことならある</button></td>
          <td><button class="cursor" value="3" on:click={postData}>④初耳</button></td>
        </tr>
      </table>
    </div>
  </div>
</main>

<style lang="scss">
  .header-contents {
    .top {
      margin: 0;
      height: 50px;
      background-color: rgb(255, 204, 0);
    }
    .logo {
      padding: 0.5em 0 0 1em;
      font-size: 1.3em;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
    }
    .menu {
      height: 40px;
      background-color: #4b4b4b;
      .icon {
        margin: 0 10px;
      }
    }
    .image {
      height: 50px;
      background-color: #9b5252
    }
    .title {
      padding: 13px 0 0 30px;
      font-size: 1.3em;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif
    }
  }
  .main-contents {
    background-color: #D4D7D7;
    height: 80vh;
    padding: 15px;
    text-align: center;
    .widget {
      background-color: #fff;
      height: 75vh;
      h1 {
        margin: 0;
        padding: 5vh 0;
        font-size: 2em;
      }
    }
    .buttons {
      margin: auto;
      button {
        height: 15vh;
        width: 30vw;
        border-radius: 3%;
        margin: 2vw;
        color: #fff;
        font-size: 1em;
      }
      tr:nth-child(1) {
        :nth-child(1) {
          button {
            background-color: #42A5F5;
          }
        }
        :nth-child(2) {
          button {
            background-color: #9CCC65;
          }
        }
      }
      tr:nth-child(2) {
        :nth-child(1) {
          button {
            background-color: #FFA726;
          }
        }
        :nth-child(2) {
          button {
            background-color: #EF5350;
          }
        }
      }
    }
  }
  .cursor {
    cursor: pointer;
  }
  i {
    font-size: 1.3em;
    margin: 0 5px;
    padding: 10px 0 0 0;
    color: gray;
  }
</style>
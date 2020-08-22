<template>
  <div class="cssElement">
    <!-- 清楚浮动 -->
    <div class="fixFloat">
      <ul>
        <li>篮球</li>
        <li>网球</li>
        <li>棒球</li>
      </ul>
    </div>
    <!-- 伪元素实现提示框 -->
    <div class="MessagePromptBox">你好，这是一个提示框</div>
    <!-- 实现阴影 -->
    <div class="bg">
      <div class="outer">
        <div class="child">我是内容我是内容我是内容</div>
      </div>
    </div>
    <!-- 实现五角星 -->
    <div id="star-five"></div>
  </div>
</template>
<style lang="less" scoped>
.cssElement {
  //清楚浮动
  .fixFloat {
    ul {
      margin: 200px;
      background: #ccc;
      padding: 10px;
      border: 1px solid #999;
      list-style: none;
    }
    ul::after {
      //伪元素清除浮动
      clear: both;
      content: "";
      display: block;
    }
    li {
      float: left;
      margin-left: 10px;
    }
    li::after {
      //利用伪元素给每个li后面添加 /
      content: "/";
      margin-left: 10px;
    }
    li:last-child::after {
      //利用伪类 去除 最后一个li的 /
      content: none;
    }
  }
  //   消息提示框
  .MessagePromptBox {
    width: 300px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-family: "Microsoft YaHei";
    text-align: center;
    padding: 5px;
    margin: 100px auto;
    position: relative;
  }
  .MessagePromptBox::before {
    //css3伪类实现消息提示框 实现一个三角形
    content: " ";
    width: 0px;
    height: 0px;
    position: absolute;
    left: -12px;
    top: 50%;
    -webkit-transform: translate(0px, -50%);
    border: 6px solid rgba(0, 0, 0, 0.7);
    border-color: transparent rgba(0, 0, 0, 0.7) transparent transparent;
  }
  //实现阴影
  .bg {
    background-color: #ebebeb;
    padding: 50px;
    div.outer {
      width: 400px;
      height: 250px;
      padding: 5px;
      margin: 100px auto;
      position: relative;
    }
    div.child {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background-color: #fff;
      //   border: 1px solid red;
      color: #000;
      line-height: 250px;
      font-family: "Microsoft YaHei";
      text-align: center;
      z-index: 2;
    }
    div.outer::before,
    div.outer::after {
      content: "";
      z-index: 1;
      width: 50%;
      height: 3px;
      position: absolute;
      left: 10px;
      bottom: 5px;
      background-color: transparent;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
      -webkit-transform: rotate(-3deg);
    }
    div.outer::after {
      left: auto;
      right: 10px;
      -webkit-transform: rotate(3deg);
    }
  }
  //实现五角星
  #star-five {
    margin-top: 60px;
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 70px solid blue;
    position: relative;
    transform: rotate(35deg);
  }
  #star-five:before {
    border-bottom: 80px solid red;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    content: "";
    transform: rotate(-35deg);
  }
  #star-five:after {
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 70px solid yellow;
    top: 7px;
    left: -110px;
    position: absolute;
    display: block;
    content: "";
    transform: rotate(-70deg);
  }
}
</style>
# Discord.js-ReactionClickEvent
![예시 이미지](https://github.com/NoBrain0917/Discord.js-ReactionClickEvent/blob/master/ex.gif?raw=true)
<br>
Discord.js 이모지 클릭 이벤트

### 예제
```javascript
messageReaction.send("안녕하세요.", ["👍","👎"],function (reaction, user, message) {
  message.channel.send(`${user.username}님이 ${reaction.emoji.name}를 눌렀습니다.`);
});
```

# Discord.js-ReactionClickEvent
Discord.js 이모지 클릭 이벤트

### 예제
```javascript
messageReaction.send("안녕하세요.", ["👍","👎"],function (reaciton, user, message) {
message.channel.send(`${user.username}님이 눌렀습니다.`);
});
```

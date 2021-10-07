# 三面包夹芝士 - 星座占卜DAPP

#### 我们团队完成了一个支持社交挖矿的星座占卜DAPP，能够支持第三方预测师在线预测玩家的各种运势并打分，并且根据玩家选择的占卜时间和根据占卜时间所预测的各种运势生成相应的星座NFT，这些NFT都具有和玩家运势相同的属性（打分分数会刻印于NFT上）。占卜后的玩家会拥有一次通过质押NFT，配对社交的挖矿机会，玩家在质押NFT后在限定时间内与另一名玩家展开对话并根据规则获得社交挖矿奖励。

## 安装方法
1. 安装reach相关环境：https://docs.reach.sh/tut-1.html
2. clone repo 到本地
3. 打开Linux系统命令行（windows下命令行输入`wsl`），进入到对应文件夹，输入`npm install`
4. 输入 `npm run reach:compile-all` 编译文件
5. 打开另一Linux命令行输入`REACH_CONNECTOR_MODE=CFX ./reach devnet` 连接conflux devnet（此命令行不能在程序运行期间关闭）
5. 在第一次使用的命令行输入 `npm start` 运行应用

## 原创性

除请求代币，部署合约相关代码参考了tutorial 2-9，其余均为原创代码


## 基础功能：
1.	NFT发行：NFT分发/购买/抽取
2.	NFT属性：NFT产出时外接第三方预测师对属性进行打分
3.	NFT配对：NFT可以进行配对（类似拼多多拼团）
4.	NFT质押社交挖矿：NFT配对后会进行捆绑社交，参与者双方会先交换部分个人信息，之后在限定时间内与对方展开对话，并为此次社交体验打分，所打分数会对应对方的代币收入，分数高于8分（10分制）会在对话结束后额外有一次交换社交信息深入了解对方的机会

## 更多扩展功能：
### NFT种类（NFT都可以进行拍卖/交易）：

1. 永久性NFT：

- 选项1：基础属性：爱情/事业/财运（暂定三种）由预测师根据NFT生成的时间进行打分 (打分不会影响挖矿效率，配对才会）高级属性：占卜属性，通过占卜刻印得到，用于挖矿/收藏
- 选项2：无开始属性，属性需要通过占卜刻印，占卜刻印后的NFT挖矿效率可以有一定提升

2. 暂时性NFT：只能留存一段时间，有多个项目属性，用于占星咨询费用
3. 消耗性NFT：消耗品，有多个属性，组合起来可以占卜，在线出具系统内容，可以选择将内容（占卜属性）刻印在已有的永久性NFT上
4. NFT样式类别：根据十二星座与不同数量、不同种类属性的结合产生不同样式的NFT


### 代币抽卡卡池：

1. 星座卡池：生成对应时间的星座NFT
2. 占卜卡池：主要生成暂时性以及占卜消耗性NFT，有一定概率产出不同的星座NFT 

### 矿池：

1. 永久性NFT配对社交挖矿矿池 – 产出代币（可同时有多个配对）（也可以多人联合挖矿）
2. 永久性NFT质押矿池
3. 代币流动性矿池


### 第三方预测功能：
1. 在占卜卡池抽到的暂时性NFT项目可在30天内咨询专业占星师解答个人运势，过了期限会自动销毁。当抽到不想解答的项目时也可以转卖给其他人
2. 消耗性占卜NFT会一直存在，用作详细占卜的消耗材料

### DAPP流程图:
![Image description](https://images.gitee.com/uploads/images/2021/0816/001223_d6911955_9395587.png "QQ图片20210806025718.png")

### 致谢：

- Reach Team（discord）
- Ivan
- 所有给过我们帮助和鼓励的人
#   R e a c h B o u n t y H a c k  
 # hackreach

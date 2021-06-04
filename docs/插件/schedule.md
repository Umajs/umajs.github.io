
# 定时任务(schedule)

例：我们在app/schedule 目录下创建一个
pvSchedule.ts文件

```js
import {AbstractSchedule}  from '@umajs/plugin-schedule'

export default class PvSchedule extends AbstractSchedule {
    constructor(app){
        super(app)
        this.scheduleInfo = {
           // rule:'0 0/1 * * * ?', // 每1分鐘更新一次
           // name:'PV', // 定时任务名称
            // switch:true, // 开启定时任务
        }
    }

    /**
     * 业务实现
     */
    public task() {
       // todo task
    }

}


```
### 配置

1，在config/plugin.config.ts开启
```js
    'schedule': {
        enable: true,
    }

```
2，新建schedule.config.ts，在其中填入配置项
```js
export default [
    {
        task: PvSchedule, // 定时任务类
        auto: true, // true 代表自动执行，false代表手动执行
        mark:"pv" // 任务标记
    },
    {
        ...
    }]

```
3，controller 初始化定时任务参数配置
```js
export default class PvSchedule extends AbstractSchedule {
    constructor(app){
        super(app)
        this.scheduleInfo = {
           rule:'0 0/1 * * * ?', // 每1分鐘更新一次
           name:'PV', // 定时任务名称
            switch:true, // true:开启定时任务; false:关闭定时任务
            ...app
        }
    }

    /**
     * 业务实现
     */
    public task() {
       // todo task
    }

}
```

### 任务
- 手动启动定时任务
```js
import { umaTask } from '@umajs/plugin-schedule'

umaTask("pv").start() 
```

- 自动启动
```js
 auto: true

```
- 手动关闭定时任务

```js

umaTask("pv").cancel()

```
### 定时方式 

- Cron风格定时器 （建议使用Cron风格,避免服务器时间不一致）

```js
*  *  *  *  *  *
┬ ┬ ┬ ┬ ┬ ┬
│ │ │ │ │  |
│ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
│ │ │ │ └───── month (1 - 12)
│ │ │ └────────── day of month (1 - 31)
│ │ └─────────────── hour (0 - 23)
│ └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

6个占位符从左到右分别代表：秒、分、时、日、月、周几

```

- interval风格定时器，更多配置参考 node-schedule 
```js
import * as schedule from 'node-schedule';
let rule = new schedule.RecurrenceRule();
rule.second =[0,1,2,3......59] 每秒执行
rule.second =0 每分钟0秒执行
rule.minute =0 每小时30分执行

this.scheduleInfo = {
    rule, // 每1分鐘更新一次
}

```

### 集群/分布式部署 执行定时任务

- 插件包含在分布式部署下，需要保证同一个定时任务只能运行一次，所以需要用事物锁来控制;
- 插件采用的是分布式事务锁方案，支持单台redis和多台redis方案，基于redis实现


```js
import * as RedLock  from 'redlock'

var client1 = require('redis').createClient(6379, 'redis1.example.com');
var client2 = require('redis').createClient(6379, 'redis2.example.com');

   this.scheduleInfo= {
            rule: '0 0/1 * * * ?', // 每1分鐘更新一次
            name: 'pv', // 任务名称
            switch: true, // 定时任务开启
            redLock:new RedLock([client1,client2]), // 采用redis锁 
            redLockTKL:10000 ,//单位毫秒，锁的生存时间，在该时间内，若锁未释放，强行释放 避免死锁情况
            sleep:1000  //单位毫秒，执行任务后主动释放锁的时间
    },
```
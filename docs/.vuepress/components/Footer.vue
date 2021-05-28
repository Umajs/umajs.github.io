<template>
    <div class="global-foot">
        <div class="global-foot-body">
            <div class="global-foot-item" style="flex: 1">
                <div class="title">Github</div>
                <div class="list">
                    <a target="_blank" href="https://github.com/Umajs" class="list-item">Organization</a>
                </div>
            </div>
            <div class="global-foot-item" style="flex: 1">
                <div class="title">插件</div>
                <div class="list">
                    <a target="_blank" href="https://github.com/Umajs/plugin-redis" class="list-item">plugin-redis</a>
                    <a target="_blank" href="https://github.com/Umajs/plugin-schedule" class="list-item">plugin-schedule</a>
                    <a target="_blank" href="https://github.com/Umajs/plugin-logger" class="list-item">plugin-logger</a>
                    <a target="_blank" href="https://github.com/Umajs/umajs-express" class="list-item">umajs-express</a>
                    <a target="_blank" href="https://github.com/Umajs/umajs-react-ssr" class="list-item">umajs-react-ssr</a>
                    <a target="_blank" href="https://github.com/Umajs/umajs-deno" class="list-item">umajs-deno</a>
                </div>
            </div>
            <div class="global-foot-item global-foot-itemt" style="flex: 2">
                <div class="title">Umajs故事</div>
                <div class="content">
                    <div class="text">Umajs 就是我们针对业务项目里所存在的这些问题而进行的一系列探索的产出：它来自于具体业务、最终也服务于具体业务；无论是参数装饰器还是切面，都是围绕着关注点分离这一主旨而展开，通过提供这些简洁的、行之有效的方式来方便使用者对业务逻辑进行拆分、进而促进使用者对代码的思考：在这套范式下我们可以把校验逻辑、通信逻辑、计算逻辑、转换逻辑轻松的与主业务逻辑做切割；而通过上述这些手段对代码职责进一步的细化，显著提高可复用性之余，也更加便于重构和优化：修改或者优化某处切割出去的逻辑，完全不会影响其它的逻辑。</div>
                    <div class="text">它不仅仅是一系列常用工具的集合与封装，它更像是我们对代码的一种期许。</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css">
.global-foot {
    padding: 3rem;
    background-color: #06080a;
}
.global-foot-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 900px;
}

.global-foot-item .title {
    padding-bottom: .75rem;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.5rem;
}

.global-foot-item .list-item {
    display: block;
    margin: .75rem 0;
    font-size: .88rem;
    line-height: 1.38rem;
    color: hsla(0,0%,100%,.65);
}

.global-foot-itemt .text {
    font-size: .88rem;
    line-height: 1.38rem;
    color: hsla(0,0%,100%,.65);
}
</style>
<template>
    <div class="oiu">
        {{name}}
        <img src="../../images/logo_03.png">
        <img src="../../images/girl.jpg">
        <span class="iconfont  icon-yiwen"></span>
        改变颜色
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        改变大小
        <mt-button size="small">small</mt-button>
        <mt-button size="large">large</mt-button>
        <mt-button size="normal">normal</mt-button>
        禁用按钮
        <mt-button disabled>disabled</mt-button>
        幽灵按钮
        <mt-button plain>plain</mt-button>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>


    </div>
</template>

<script>

    export default{
        name: 'set',
        components: {
            //模块
        },
        data(){
            return {
                name:'我是set，set，set情深',
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    },
                    {
                        value: '选项2',
                        label: '双皮奶'
                    },
                    {
                        value: '选项3',
                        label: '蚵仔煎'
                    },
                    {
                        value: '选项4',
                        label: '龙须面'
                    },
                    {
                        value: '选项5',
                        label: '北京烤鸭'
                }],
                value5: [],
                value1: 0,
                slots: [
                    {
                        flex: 1,
                        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot1',
                        textAlign: 'right'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot3',
                        textAlign: 'left'
                    }
                ]
            }
        },
        mounted(){

        }, //初始化方法
        methods: {
            onValuesChange(picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
            }
        }   //内部函数
    }
</script>


<style>
    .mini{
        height: 140px;
        background: lightyellow;
    }
    .oiu{
        overflow: hidden;max-width: 100%;
        background: darkblue;
    }
</style>
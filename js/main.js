
//ーーカウンターーー
new Vue({

    el:"#content01",
    data: {
        number :0
    },
    methods:{
        countUp:function(time){
            this.number += 1 * time
        },
        countReset:function(){
            this.number = 0
        }
    }
});

//ーーストップウォッチーー
new Vue({
    el: "#content02",
    data: {
        times: [],
        animateFrame: 0,
        nowTime: 0,
        diffTime: 0,
        startTime: 0,
        isRunning: false        
    },
    methods: {
        // 現在時刻から引数に渡した数値を startTime に代入
        setSubtractStartTime: function (time) {
        var time = typeof time !== 'undefined' ? time : 0;
        this.startTime = Math.floor(performance.now() - time);
        },
        // タイマーをスタートさせる
        startTimer: function () {
            // loop()内で this の値が変更されるので退避
            var vm = this;
            vm.setSubtractStartTime(vm.diffTime);
            // ループ処理
            (function loop(){
            vm.nowTime = Math.floor(performance.now());
            vm.diffTime = vm.nowTime - vm.startTime;
            vm.animateFrame = requestAnimationFrame(loop);
            }());
            vm.isRunning = true;
        },
        // タイマーを停止させる
        stopTimer: function () {
            this.isRunning = false;
            cancelAnimationFrame(this.animateFrame);
        },
        // 計測中の時間を配列に追加
        pushTime: function () {
            this.times.push({
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds,
            milliSeconds: this.milliSeconds
            });
        },
        // 初期化
        clearAll: function () {
            this.startTime = 0;
            this.nowTime = 0;
            this.diffTime = 0;
            this.times = [];
            this.stopTimer();
            this.animateFrame = 0;
        }
    },
    computed: {
        // 時間を計算
        hours: function () {
            return Math.floor(this.diffTime / 1000 / 60 / 60);
        },
        // 分数を計算 (60分になったら0分に戻る)
        minutes: function () {
            return Math.floor(this.diffTime / 1000 / 60) % 60;
        },
        // 秒数を計算 (60秒になったら0秒に戻る)
        seconds: function () {
            return Math.floor(this.diffTime / 1000) % 60;
        },
        // ミリ数を計算 (1000ミリ秒になったら0ミリ秒に戻る)
        milliSeconds: function () {
            return Math.floor(this.diffTime % 1000);
        }
    },
    filters: {
        // ゼロ埋めフィルタ 引数に桁数を入力する
        // ※ String.prototype.padStart() は IEじゃ使えない
        zeroPad: function(value, num){
            var num = typeof num !== 'undefined' ? num : 2;
            return value.toString().padStart(num,"0");
        }
    }
});


//ーーデジタル時計ーー
new Vue({
    el:"#content03",
    data: {
        date: '',
        time: '',
        week: [' Sun',' Mon', ' Tue', ' Wed', ' Thu',  ' Fri', ' Sta'] 
        },
    mounted: function()  {
        let timerID = setInterval(this.updateTime, 1000); 
        }, 
    methods: { 
        updateTime: function() { 
            //現在の日付・時刻を取得 
            let currentdate = new Date()
        
            // 現在の時刻
            this.time = this.zeroPadding(currentdate.getHours(), 2) + ':' + this.zeroPadding(currentdate.getMinutes(), 2) + ':' + this.zeroPadding(currentdate.getSeconds(), 2)
        
            // 現在の年月日
            this.date = this.zeroPadding(currentdate.getFullYear(), 4) + '年' + this.zeroPadding(currentdate.getMonth() + 1, 2) + '月' + this.zeroPadding(currentdate.getDate(), 2) + '日' + this.week[currentdate.getDay()]
            },
            zeroPadding: function(num, len) {
            let zero = '';
        
            // 0の文字列を作成
            for(var i = 0; i < len; i++) {
                zero += '0';
            }
        
            // zeroの文字列と、数字を結合し、後ろ２文字を返す
            return (zero + num).slice(-len);
            }
        }
});

//ーーカラーコードーー
new Vue({

    el:"#content01",
    data: {
        number :0
    },
    methods:{
        countUp:function(time){
            this.number += 1 * time
        },
        countReset:function(){
            this.number = 0
        }
    }
});


//ーー電卓ーー
new Vue({

    el:"#content05",
    data: {
        result:'0',
        items:[
            ['7','8','9','/'],
            ['4','5','6','*'],
            ['1','2','3','-'],
            ['0','.','+','='],
        ]
    },
    methods: {
        calculate:function(cmd){
            if(cmd == '='){
                this.result = eval(this.result);
            }else if(cmd == 'c'){
                this.result = '0';
            }else if(this.result == '0'){
                this.result = cmd;
            }else{
                this.result += cmd;
            }
        }  
    },
});


//ーーカウンターーー
new Vue({

    el:"#content01",
    data: {
        number :0
    },
    methods:{
        countUp:function(time){
            this.number += 1 * time
        },
        countReset:function(){
            this.number = 0
        }
    }
});
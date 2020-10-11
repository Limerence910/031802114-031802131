var tree = require('./tree.js');
var expect = require('chai').expect;

describe('数据处理的测试',function () {
    it('输出转换后的数据',function () {
        expect(tree('导师：张三\n' +
            '2016级博士生：天一、王二、吴五\n' +
            '2015级硕士生：李四、王五、许六\n' +
            '2016级硕士生：刘一、李二、李三\n' +
            '2017级本科生：刘六、琪七、司四\n' +
            '\n' +
            '刘六：JAVA、数学建模\n' +
            '\n' +
            '李二：字节跳动、京东云\n' +
            '\n')).to.be.equal([{id:0,label:'张三',children:[
                {id:1,label:'2016级',children:[
                    {id:2,label:'博士生',children:[
                        {id:3,label:'天一'},
                        {id:4,label:'王二'},
                        {id:5,label:'吴五'}]},
                    {id:6,label:'硕士生',children:[
                        {id:7,label:'刘一'},
                        {id:8,label:'李二',children:[
                            {id:9,label:'字节跳动'},
                            {id:10,label:'京东云'}]},
                        {id:11,label:'李三'}]}]},
                {id:12,label:'2015级',children:[
                    {id:13,label:'硕士生',children:[
                        {id:14,label:'李四'},
                        {id:15,label:'王五'},
                        {id:16,label:'许六'}
                        ]}]},
                {id:17,label:'2017级',children:[
                    {id:18,label:'本科生',children:[
                        {id:19,label:'刘六',children:[
                                {id:20,label:'JAVA'},
                                {id:21,label:'数学建模'}]},
                        {id:22,label:'琪七'},
                        {id:23,label:'司四'}]}
                ]}]
        }]);
    });
});

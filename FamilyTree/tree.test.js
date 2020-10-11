var Cinput_test = require('./tree.js');
var expect = require('chai').expect;
var data = [{"id":0,"label":"导师：张三","children":[{"id":1,"label":"2016级","children":[{"id":2,"label":"博士生","children":[{"id":3,"label":"天一","children":[]},{"id":4,"label":"王二","children":[]},{"id":5,"label":"吴五","children":[]}]},{"id":10,"label":"硕士生","children":[{"id":11,"label":"刘一","children":[]},{"id":12,"label":"李二","children":[{"id":21,"label":"字节跳动"},{"id":22,"label":"京东云"}]},{"id":13,"label":"李三","children":[]}]}]},{"id":6,"label":"2015级","children":[{"id":7,"label":"硕士生","children":[{"id":8,"label":"王五","children":[]},{"id":9,"label":"许六","children":[]}]}]},{"id":14,"label":"2017级","children":[{"id":15,"label":"本科生","children":[{"id":16,"label":"刘六","children":[{"id":19,"label":"JAVA"},{"id":20,"label":"数学建模"}]},{"id":17,"label":"琪七","children":[]},{"id":18,"label":"司四","children":[]}]}]}]}];

describe('样例测试1', function() {
  it('数据处理', function() {
    expect(Cinput_test('导师：张三\n' +
        '2016级博士生：天一、王二、吴五\n' +
        '2015级硕士生：王五、许六\n' +
        '2016级硕士生：刘一、李二、李三\n' +
        '2017级本科生：刘六、琪七、司四\n' +
        '\n' +
        '刘六：JAVA、数学建模\n' +
        '\n' +
        '李二：字节跳动、京东云')).to.be.equal(data);
  });
});

data = [{"id":0,"label":"导师：张三","children":[{"id":1,"label":"2016级","children":[{"id":2,"label":"博士生","children":[{"id":3,"label":"天一","children":[]},{"id":4,"label":"王二","children":[]},{"id":5,"label":"吴五","children":[]}]},{"id":11,"label":"硕士生","children":[{"id":12,"label":"刘一","children":[]},{"id":13,"label":"李二","children":[{"id":21,"label":"字节跳动"},{"id":22,"label":"京东云"}]},{"id":14,"label":"李三","children":[]}]}]},{"id":6,"label":"2015级","children":[{"id":7,"label":"硕士生","children":[{"id":8,"label":"李四","children":[]},{"id":9,"label":"王五","children":[]},{"id":10,"label":"许六","children":[]}]}]},{"id":15,"label":"2017级","children":[{"id":16,"label":"本科生","children":[{"id":17,"label":"刘六","children":[{"id":19,"label":"JAVA"},{"id":20,"label":"数学建模"}]},{"id":18,"label":"司四","children":[]}]}]}]}];
describe('样例测试2', function() {
  it('数据处理', function() {
    expect(Cinput_test('导师：张三\n' +
        '2016级博士生：天一、王二、吴五\n' +
        '2015级硕士生：李四、王五、许六\n' +
        '2016级硕士生：刘一、李二、李三\n' +
        '2017级本科生：刘六、司四\n' +
        '\n' +
        '刘六：JAVA、数学建模\n' +
        '\n' +
        '李二：字节跳动、京东云')).to.be.equal(data);
  });
});

data = [{"id":0,"label":"导师：张三","children":[{"id":1,"label":"2016级","children":[{"id":2,"label":"博士生","children":[{"id":3,"label":"天一","children":[]},{"id":4,"label":"王二","children":[]}]},{"id":10,"label":"硕士生","children":[{"id":11,"label":"刘一","children":[]},{"id":12,"label":"李二","children":[{"id":21,"label":"字节跳动"},{"id":22,"label":"京东云"}]},{"id":13,"label":"李三","children":[]}]}]},{"id":5,"label":"2015级","children":[{"id":6,"label":"硕士生","children":[{"id":7,"label":"李四","children":[]},{"id":8,"label":"王五","children":[]},{"id":9,"label":"许六","children":[]}]}]},{"id":14,"label":"2017级","children":[{"id":15,"label":"本科生","children":[{"id":16,"label":"刘六","children":[{"id":19,"label":"JAVA"},{"id":20,"label":"数学建模"}]},{"id":17,"label":"琪七","children":[]},{"id":18,"label":"司四","children":[]}]}]}]}];
describe('样例测试3', function() {
  it('数据处理', function() {
    expect(Cinput_test('导师：张三\n' +
        '2016级博士生：天一、王二\n' +
        '2015级硕士生：李四、王五、许六\n' +
        '2016级硕士生：刘一、李二、李三\n' +
        '2017级本科生：刘六、琪七、司四\n' +
        '\n' +
        '刘六：JAVA、数学建模\n' +
        '\n' +
        '李二：字节跳动、京东云')).to.be.equal(data);
  });
});

data = [{"id":0,"label":"导师：张三","children":[{"id":1,"label":"2016级","children":[{"id":2,"label":"博士生","children":[{"id":3,"label":"天一","children":[]},{"id":4,"label":"王二","children":[]},{"id":5,"label":"吴五","children":[]},{"id":6,"label":"马飞飞","children":[]}]},{"id":12,"label":"硕士生","children":[{"id":13,"label":"刘一","children":[]},{"id":14,"label":"李二","children":[{"id":23,"label":"字节跳动"},{"id":24,"label":"京东云"}]},{"id":15,"label":"李三","children":[]}]}]},{"id":7,"label":"2015级","children":[{"id":8,"label":"硕士生","children":[{"id":9,"label":"李四","children":[]},{"id":10,"label":"王五","children":[]},{"id":11,"label":"许六","children":[]}]}]},{"id":16,"label":"2017级","children":[{"id":17,"label":"本科生","children":[{"id":18,"label":"刘六","children":[{"id":21,"label":"JAVA"},{"id":22,"label":"数学建模"}]},{"id":19,"label":"琪七","children":[]},{"id":20,"label":"司四","children":[]}]}]}]}];
describe('样例测试4', function() {
  it('数据处理', function() {
    expect(Cinput_test('导师：张三\n' +
        '2016级博士生：天一、王二、吴五、马飞飞\n' +
        '2015级硕士生：李四、王五、许六\n' +
        '2016级硕士生：刘一、李二、李三\n' +
        '2017级本科生：刘六、琪七、司四\n' +
        '\n' +
        '刘六：JAVA、数学建模\n' +
        '\n' +
        '李二：字节跳动、京东云')).to.be.equal(2);
  });
});


data = [{"id":0,"label":"导师：张三","children":[{"id":1,"label":"2016级","children":[{"id":2,"label":"博士生","children":[{"id":3,"label":"天一","children":[]},{"id":4,"label":"卢本伟","children":[]}]},{"id":8,"label":"硕士生","children":[{"id":9,"label":"刘一","children":[]},{"id":10,"label":"李二","children":[{"id":19,"label":"字节跳动"},{"id":20,"label":"京东云"}]},{"id":11,"label":"李三","children":[]}]}]},{"id":5,"label":"2015级","children":[{"id":6,"label":"硕士生","children":[{"id":7,"label":"李四","children":[]}]}]},{"id":12,"label":"2017级","children":[{"id":13,"label":"本科生","children":[{"id":14,"label":"刘六","children":[{"id":17,"label":"JAVA"},{"id":18,"label":"数学建模"}]},{"id":15,"label":"琪七","children":[]},{"id":16,"label":"司四","children":[]}]}]}]}];
describe('样例测试5', function() {
  it('数据处理', function() {
    expect(Cinput_test('导师：张三\n' +
        '2016级博士生：天一、卢本伟\n' +
        '2015级硕士生：李四\n' +
        '2016级硕士生：刘一、李二、李三\n' +
        '2017级本科生：刘六、琪七、司四\n' +
        '\n' +
        '刘六：JAVA、数学建模\n' +
        '\n' +
        '李二：字节跳动、京东云')).to.be.equal(2);
  });
});

let id = 1000;
var Main = {
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    data() {
        return {
            filterText: '',
            teacher: 0,
            id: 0,
            id2: 0,
            mytext: '',
            data: [],
            Grade:[],
            Name:[],
            Location: [],
            number2: 0,
            defaultProps: {
                children: 'children',
                label: 'label',
                id: 'id'
            }
        };
      },
    methods: {

    filterNode(value, data) {
        if (!value) return true;
            return data.label.indexOf(value) !== -1;
    },
    append(node,data) {
       console.log(node,data,'增加')
       this.$prompt('节点名字', '增加节点', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            }).then(({ value }) => {
                this.dfs(node.id - 1 ,value);
        });
    },

        dfs(k,value){

            alert(this.data[0].id);
            for(var m = 0; m < this.data.length; m++){
                    if(this.data[m].id === k){
                        newChild = {id: this.id2++ ,label: value, children:[]};

                        this.data[m].children.push(newChild);
                        alert("Success1");
                        return;
                    }
                    else{
                        for(var n = 0; n < this.data[m].children.length; n++){
                            // alert(this.data[m].children[n].id);
                            if(this.data[m].children[n].id === k){
                                newChild = {id: this.id2++ ,label: value, children:[]};
                                this.data[m].children[n].children.push(newChild);
                                alert("Success2");
                                return;
                            }
                            else{
                                for(var o = 0; o < this.data[m].children[n].children.length; o++){
                                    // alert(this.data[m].children[n].children[o].id);
                                    if(this.data[m].children[n].children[o].id === k){
                                        newChild = {id: this.id2++ ,label: value, children:[]};
                                        this.data[m].children[n].children[o].children.push(newChild);
                                        alert("Success3");
                                        return;
                                    }
                                    else{
                                        for(var p = 0; p < this.data[m].children[n].children[o].children.length; p++){
                                            // alert(this.data[m].children[n].children[o].children[p].id);
                                            if(this.data[m].children[n].children[o].children[p].id === k){
                                                newChild = {id: this.id2++ ,label: value};
                                                this.data[m].children[n].children[o].children[p].children.push(newChild);
                                                alert("Success4");
                                                return;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
            }

        },

        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },

        CInput() {

        lines = this.mytext.split('\n');
        for (var i = 0; i < lines.length; i++){
            parts = lines[i].split("：");
            if(parts[0] != ""){
                if(parts[0] === "导师"){

                    var newChild = { id: this.id2++, label: lines[0], children: [] };

                    this.data.push(newChild);
                }
                else{
                    if(parts[0].search(/博士生|硕士生|本科生/) != -1){
                        parts2 = parts[0].split("级");
                        if(this.Grade.indexOf(parts2[0]) >= 0){
                            number = this.Grade.indexOf(parts2[0]);
                        }
                        else{
                            this.number2 = 0;
                            newChild = {id: this.id2++, label: parts2[0] + "级", children: []};
                            this.data[this.teacher].children.push(newChild);
                            this.Grade.push(parts2[0]);
                            number = this.Grade.indexOf(parts2[0]);
                        }

                        newChild = {id: this.id2++, label: parts2[1],children: []};
                        this.data[this.teacher].children[number].children.push(newChild);

                        students = parts[1].split('、');
                        for (var j = 0; j < students.length; j++){
                            newChild = {id: this.id2++, label:students[j], children: []};
                            this.data[this.teacher].children[number].children[this.number2].children.push(newChild);

                            this.Name.push(students[j]);
                            this.Location.push([this.teacher,number,this.number2,this.id]);
                            this.id++;
                        }
                        this.id = 0;
                        this.number2++;
                    }
                    else{
                        experience = parts[1].split('、');
                        for(var k = 0; k < this.Name.length; k++){
                            if(this.Name[k] === parts[0]){
                                for(var l = 0; l < experience.length; l++){
                                    newChild = {id: this.id2++, label: experience[l] };
                                    this.data[this.Location[k][0]].children[this.Location[k][1]].children[this.Location[k][2]].children[this.Location[k][3]].children.push(newChild);
                                }

                            }
                        }

                    }
                }
            }
        }
        this.teacher++;
        console.log(this.data);
        this.Grade = [];
        this.Location = [];
        this.Name = [];
        this.number = 0;
        this.number2 = 0;

    },

    clearData(){
        this.data = [];
        this.Location = [];
        this.Name = [];
        this.number2 = 0;
        this.number = 0;
        this.teacher = 0;
        this.id = 0;
        this.id2 = 0;
        this.Grade = [];
    },


        allowDrop(draggingNode, dropNode, type) {
            if (dropNode.data.label === '二级 3-1') {
                return type !== 'inner';
            } else {
                return true;
            }
        },
        allowDrag(draggingNode) {
            return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
        }
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')


<template>
    <div class="container" @click.self="selfClick">
        <h1>input - tree</h1>
        <div>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
             <el-popover
                placement="bottom"
                title="标题"
                width="200"
                trigger="manual"
                 v-model="popver" 
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                <el-tree
                    :data="data"
                    show-checkbox
                    node-key="id"
                    ref="tree"
                  
                    :default-expanded-keys="[1,2, 3]"
                    @check-change="checkChange"
                    @node-click="nodeClick"
                    @check="nodeCheck"
                    :props="defaultProps">
                </el-tree>
                <refer slot="reference" @click.native="changePop" :selectedTree="selectedTree" :popverState="popver" />
            </el-popover>

        </div>
        <br>
         <el-button @click="getCheckedNodes">通过 node 获取</el-button>
        <el-button @click="getCheckedKeys">通过 key 获取</el-button>
        <el-button @click="setCheckedNodes">通过 node 设置</el-button>
        <el-button @click="setCheckedKeys">通过 key 设置</el-button>
        <el-button @click="resetChecked">清空</el-button>
    </div>
</template>

<script> 
import refer from './components/refer.vue'
//   默认展开的节点的 key 的数组   :default-expanded-keys 
//   默认勾选的节点的 key 的数组   :default-checked-keys    :default-checked-keys="[5]"
export default {
    components:{refer},
    data () {
        return {
            popver:false,
            input:'',
            data: [
                {
                    id: 1,
                    label: 'VWATJ',
                    children: [{
                        id: 4,
                        label: 'DL382',  
                    }]
                },
                {
                    id: 2,
                    label: 'TEST1',
                    children: [
                        {
                            id: 5,
                            label: 'AAAA'
                        }, {
                            id: 6,
                            label: 'BBBB'
                        }
                    ]
                }, 
                {
                    id: 3,
                    label: 'TEST3',
                    children: [{
                        id: 7,
                        label: 'CCCC'
                    }, {
                        id: 8,
                        label: 'DDDD'
                    }]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            selectedTree:[]
        }
    },
    methods:{
        selfClick(){
            this.popver =false
        },
        changePop(){
           this.popver=!this.popver
        },
        //点击节点的回调  共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。
        nodeClick(row,node,self){
            console.log(row,node,self)
        },
        //当复选框被点击的时候触发  共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性
        nodeCheck(row,select){
           
            let oneAllNode = this.handleOneAllNode(select.checkedNodes)
            let oneNode = this.handleOneNode(select.checkedKeys,select.halfCheckedNodes)
            this.selectedTree = [...oneAllNode,...oneNode]
            console.log('selectedTree',this.selectedTree)
        },
        handleOneNode(oneKes,oneNodes){
            let keys = [...oneKes]
            let nodes = [...oneNodes]
            let nodeInfos = []
            nodes.forEach(node =>{
                let childNode = node.children.filter( c=>{
                  
                    return keys.indexOf(c.id)!=-1
                })
                childNode.forEach(cd =>{
                    let info = { label:'',id:'' ,pid:''}
                    info.label = node.label + '/' + cd.label
                    info.id = cd.id
                    info.pid = node.id
                    nodeInfos.push(info)
                })
            })
       //    console.log('oneNode',nodeInfos)
            return nodeInfos
        },
        handleOneAllNode(allNode){
            let nodes = [...allNode]
            let nodeInfos = []
            nodes = nodes.filter(node => node.hasOwnProperty('children'))
           
            nodes.forEach(node =>{
               
                node.children.forEach( n =>{
                     let info = { label:'',id:'' ,pid:''}
                    info.label = node.label + '/' + n.label
                    info.id = n.id
                    info.pid = node.id
                    nodeInfos.push(info)
                })
            })
           // console.log('allNode',nodeInfos)
            return nodeInfos
        },
         getCheckedNodes() {
            console.log(this.$refs.tree.getCheckedNodes());
        },
        getCheckedKeys() {
            console.log(this.$refs.tree.getCheckedKeys());
        },
        setCheckedNodes() {
            this.$refs.tree.setCheckedNodes([{
            id: 5,
            label: '二级 2-1'
            }, {
            id: 9,
            label: '三级 1-1-1'
            }]);
        },
        setCheckedKeys() {
            this.$refs.tree.setCheckedKeys([8]);
        },
        resetChecked() {
            this.$refs.tree.setCheckedKeys([]);
        },
        checkChange(row,isselect,node){
            console.log(row,isselect,node)
        }
    }
}
</script>

<style>
.container{
   margin: 24px;
    width: 97%;
    min-height: 500px;
    background: #ffffff
}
</style>

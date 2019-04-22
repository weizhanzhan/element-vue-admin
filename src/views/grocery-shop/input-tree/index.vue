<template>
    <div class="container" @click.self="selfClick">
        <h1>input - tree</h1>
        <div>
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
        <el-button @click="getHalfCheckedNodes">getHalfCheckedNodes</el-button>
        
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
                        isselect:true 
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
                            label: 'BBBB',
                            isselect:true
                        }
                    ]
                }, 
                {
                    id: 3,
                    label: 'TEST3',
                    isselect:true,
                    children: [{
                        id: 7,
                        label: 'CCCC',
                        isselect:true
                    }, {
                        id: 8,
                        label: 'DDDD',
                        isselect:true
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
            console.log(select)
            let oneAllNode = this.handleOneAllNode(select.checkedNodes)//checkedNodes 是tree下 全部选择的节点
            let oneNode = this.handleOneNode(select.checkedKeys,select.halfCheckedNodes) //halfCheckedNodes 是返回 某个父节点 没有全部选择的 这个节点，如果每个父节点下是全选的 ，该参数就没有值  //halfCheckedKeys 就是该节点的id
            this.selectedTree = [...oneAllNode,...oneNode]
            console.log('selectedTree',this.selectedTree)
        },
        handleOneNode(oneKes,oneNodes){//是处理 选择子节点的时候的数据格式 （即父节点没有被选，该父节点下没有全选），onekeys就是tree所有选择的key，handleOneAllNode已经把父节点全选的处理完了，然后我们通过halfCheckedNodes，获取到某些父节点没有全选的节点，然后通过遍历该节点的children，去所有选择的key中去匹配和自己children相对应的id，这样就全部出来完成了
            let keys = [...oneKes]
            let nodes = [...oneNodes]
            let nodeInfos = []
            nodes.forEach(node =>{
                let childNode = node.children.filter( c=>{      //匹配 该父节点下（非全选） 选中的某个子节点       
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
        handleOneAllNode(allNode){ //是处理父节点选择的时候的数据格式 ，意思就是当父节点选中 那么她下面的所有子节点都选中， 这里把带有children的节点也就是说把子节点全部选中的节点（返回的选中节点项有children，即整个节点都被选中），处理完成，剩下的交给handleOneNode去处理
            let nodes = [...allNode]
            let nodeInfos = []
            nodes = nodes.filter(node => node.hasOwnProperty('children'))//这里的allNode 也就是tree 所有选择的节点，把是父节点选中的（全选）筛选出来统一处理
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
        getHalfCheckedNodes(a,b,c){
            this.$nextTick(()=>{
                      console.log('getHalfCheckedNodes',this.$refs.tree.getHalfCheckedNodes());
                console.log('getHalfCheckedKeys',this.$refs.tree.getHalfCheckedKeys())
                console.log('getCurrentKey',this.$refs.tree.getCurrentKey())
                console.log('getCurrentNode',this.$refs.tree.getCurrentNode())
                console.log('tree',this.$refs.tree)
                console.log('getnode',this.$refs.tree.getNode())
            })
      
        },
        checkChange(row,isselect,node){
          //  console.log(row,isselect,node)
        },
        setInit(arr){
            let nodes = []
            let keys = []
            arr.forEach(item =>{
                
                item.children.forEach(citem=>{
                    let info = { label:'',id:'',pid:''}
                    if(citem.isselect){
                        info.label = item.label + '/'  + citem.label
                        info.id=citem.id
                        info.pid = item.id
                        nodes.push(info)
                        keys.push(citem.id)               
                    }
                })
            })
            this.$refs.tree.setCheckedKeys(keys); //设置选中的节点
            this.selectedTree = [...nodes]
        }
    },
    mounted(){
        this.setInit(this.data)
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

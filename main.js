"ui";

ui.Layout(
  <drawer id="drawer">
    <vertical>
      <appbar>
        <toolbar title="一键通话"></toolbar>
      </appbar>
      <grid id="userList" spanCount="4" h="*">
        <card h="200" margin="10">
          <img h="180" margin="10" src="https://img-qn.51miz.com/Element/00/79/78/04/372c7712_E797804_81ee5239.png"></img>
          <text w="*" gravity="center" textSize="20sp">{{this.name}}</text>
        </card>
      </grid>
    </vertical>
    <relative id="dialog" w="*" h="*" bg="rgba(0, 0, 0, 0.8)" left="0" top="0" visibility="gone">
      <card w="400" layout_gravity="center">
        <img w="300" h="300" margin="10 50" src="https://img-qn.51miz.com/Element/00/79/78/04/372c7712_E797804_81ee5239.png"></img>
        <input id="name" hint="联系人名字（需要与微信或通讯录中名字一致）"></input>
        <button id="add">添加</button>
      </card>
    </relative>
  </drawer>
)

ui.emitter.on("create_options_menu", menu => {
  menu.add('添加联系人')
})

ui.emitter.on("options_item_selected", (e) => {
  e.consumed = true
})

const users = [
 {name: 'test'},
 {name: 'test1'},
 {name: 'test2'},
 {name: 'test3'}
]

ui.userList.setDataSource(users)
ui.userList.on('item_click', (user) => {
  console.log(user.name)
})
// noinspection JSUnresolvedVariable
let obj = chrome || browser;

obj.commands.onCommand.addListener(command => {
  if (command === 'toggle-slack-sidebar') {
    obj.tabs.query({currentWindow: true, active: true}, tabs => {
      obj.tabs.sendMessage(tabs[0].id, {sidebar: 'toggle'});
    })
  }
});

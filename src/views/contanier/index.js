import component from './index.vue'

export default function(Vue){
	const Constructor = Vue.extend(component)
	const Instance = new Constructor();
	Instance.$mount()
	
	document.body.appendChild(Instance.$el)
	Vue.prototype.$MessageBox = ({title,content}) => {
		Instance.visible = true
		Instance.title = title
		Instance.content = content
		
		return Instance.showMsgBox()
		  .then(val => {
			 return Promise.resolve(val);
		  })
		  .catch(err => {
			 return Promise.reject(err);
		  });
	}
}

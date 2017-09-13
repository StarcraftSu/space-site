class Person {
	constructor(fullName,favColor){
		this.name = fullName;
	    this.favoriteColor = favColor;
	}

	greet(){
		console.log('Hi there,my name is '+this.name+' and my favorite color is '+this.favoriteColor+'.');
	}
}

export default Person;
//module是exports的父类
//exports等于是把Person构造方法绑架到一个袋子里
//然后运到app.js 
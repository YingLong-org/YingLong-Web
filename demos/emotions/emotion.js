// JavaScript Document

class CommentBlock {
	
	constructor({data}){
    	//
		this.data = {
			content: data.content || ''
	   	};
		this.input = undefined;
		this.wrapper = undefined;
  	}
	
	/**
	* Automatic sanitize config
	*/
	static get sanitize(){
		return {
			
		}
	}
	
  	render(){
		this.wrapper = document.createElement('div');
    	this.input = document.createElement('div');
		this.input.contentEditable = true;
		this.wrapper.classList.add('text_block');
		this.wrapper.appendChild(this.input);
		
		
    	return this.wrapper;
  	}
	
	save(blockContent){
    	const content = blockContent.querySelector('[contentEditable]');
		// Manual sanitizer
//		const sanitizerConfig = {
//			b: true, 
//			a: {
//				href: true
//			},
//			i: true
//	   };
//		data = Object.assign(data, content);
		let contents = {}
//		let data = deepCopy(content); //
		contents = Object.assign(contents, content.getElementsByClassName('emo'));
//		let contents = (content.getElementsByClassName('emo'));
		let len = Object.keys(contents).length;
		
//		console.log(data);
		console.log(contents);
		for (let i = 0; i < len; i++){
			let p = document.createElement('p');
			p.innerHTML = contents[i].alt;
			console.log(contents[i].alt);
			content.replaceChild(p, contents[i]);
		}
		console.log(content.innerHTML);
    	return Object.assign(this.data, {
      		content: content.innerHTML || ''
		// Manual sanitizer
//			caption: this.api.sanitizer.clean(caption.innerHTML || '', sanitizerConfig)
    	});
  	}
	
	validate(savedData){
    	return true;
  	}
	
	//Add Block Actions
	renderSettings(){
		
	}
	
	// Insert emotions
	insertText(text){
		if (text.search('[疑惑]') != -1){
			const emo = document.createElement('img');
			emo.src = 'http://www.yinglong.org/forum/img/smilies/haku-confused.png';
			emo.alt = '[疑惑]';
			emo.classList.add('emo');
			this.input.appendChild(emo);
		}
//		this.input.innerHTML += text;
	}
	
}

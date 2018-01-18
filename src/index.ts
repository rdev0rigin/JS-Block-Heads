import { blockHead, BlockHead } from './lib/block-head.decorator';

console.log('Test');



@BlockHead
class Cat {
	name: any = 'default';
	
	@blockHead
	meow() {
		return `${this.name} says Meow!`
	}
}

const Betty = new Cat();
console.log('cat', Betty.meow());
console.log('cat', Betty.meow());
console.log('cat', Betty.meow());

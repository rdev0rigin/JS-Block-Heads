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

let House: any = new Cat();
House.foo = 'Bat Metal \\,,/';
House.name = 'House';
House.addLink();
console.log('cat', House.meow());
House.name = 'Lulu';
console.log('cat', House.meow());
console.log('cat', House.getChain());

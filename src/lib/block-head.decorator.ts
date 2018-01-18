/**
 * A property mixin.
 * @param target
 * @param key
 * @param descriptor
 * @returns {any}
 */
export function blockHead(target, key, descriptor){
	console.log('target', target);
	console.log('key', key);
	console.log('descriptor', descriptor);
	descriptor.writable = false;
	return descriptor;
}

export const BlockHead = blockChainMixin();

function blockChainMixin(){
	let blockChain = [];
	// used to mixin behavior
	const BlockChainBehavior = {
		addLink(){
			console.log('Adding link!');
		},
		getHashes(){
		
		},
		getChain(){
			return blockChain;
		}
		
	};
	
	// create a Genesis block
	function genBlock(initTarget) {
		return {
			hash: checkSum(initTarget.toString()),
			hashHistory: [],
		}
	}
	// create hash
	
	// add link
	const bKeys = Reflect.ownKeys(BlockChainBehavior);
	
	function _mixin(clazz){
		return new Proxy(clazz, {
			construct(target, args, newTarget) {
			let instance = new target(...args);
				blockChain = [genBlock(instance)];
				for (let key of bKeys) {
					Object.defineProperty(instance, key, {
						value: BlockChainBehavior[key]
					});
				}
				let instanceProxy = new Proxy(instance, {
					set(target, prop, value, receiver) {
						blockChain = [...blockChain, ]
						target[prop] = value;
						console.log(`property set: ${prop}  =  ${value}`);
						return true;
					}
					
				});
				return instanceProxy;
			},
		});
	}
	return _mixin;
}

// https://gist.github.com/nblackburn/17530c05520a33a4e872dbcc4f258261
function checkSum(string){
	
	let index;
	let checksum = 0x1235235;
	
	for (index = 0; index < string.length; index++) {
		checksum += (string.charCodeAt(index) * (index + 1));
	}
	
	return checksum;
}

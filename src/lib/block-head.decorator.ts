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
	let hashHistory = [];
	let hash = 0x00000000;
	// used to mixin behavior
	const BlockChainBehavior = {
		addLink(){
			console.log('Adding link!');
		},
		getHash(){
		
		},
		getHashes(){
		
		},
		getChain(){
			return blockChain;
		},
		// create a new block
		genBlock(nextObj) {
			hash = checkSum(JSON.stringify(nextObj));
			console.log('hashing', JSON.stringify(nextObj), hash);
			hashHistory = [...hashHistory, hash];
			return {
				hash: hash,
				hashHistory: hashHistory,
			}
		}
	};
	
	// add link
	const bKeys = Reflect.ownKeys(BlockChainBehavior);
	function _mixin(clazz) {
		return new Proxy(clazz, {
			construct(target, args) {
			let instance = new target(...args);
			for (let key of bKeys) {
				Object.defineProperty(instance, key, {
					value: BlockChainBehavior[key]
				});
			}
			blockChain = [instance.genBlock(instance)];
			return new Proxy(instance, {
				set(setTarget, prop, value) {
					setTarget[prop] = value;
					console.log('set Target', setTarget);
					blockChain = [...blockChain, instance.genBlock(setTarget)];
					console.log(`property set: ${prop}  =  ${value}`);
					return true;
				}
			})},
		});
	}
	return _mixin;
}

// https://gist.github.com/nblackburn/17530c05520a33a4e872dbcc4f258261
function checkSum(string){
	let index;
	let checksum = 0x12332248;
	
	for (index = 0; index < string.length; index++) {
		checksum += (string.charCodeAt(index) * (index + 1));
	}
	return checksum;
}

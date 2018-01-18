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

// used to mixin behavior
const BlockChain = {
	addLink(){
	
	}
};

function blockChainMixin(){
	const props = {
	// create a Genesis block
	
	// create hash
	
	// add link
	
	};
	function _mixin(clazz){
		const clazzProxy = new Proxy(clazz, {
			construct(target, args, newTarget) {
				console.log('hash?', checkSum(target.toString()));
				return new target(args);
			}
		});
		return clazzProxy;
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

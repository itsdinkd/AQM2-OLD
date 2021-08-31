// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
//  event.remove({output: 'kibe:kibe'});
//  event.remove({output: 'kibe:cursed_kibe'});
//  event.remove({output: 'kibe:golden_kibe'});
//  event.remove({output: 'kibe:diamond_kibe'});
//  event.remove({output: 'kibe:angel_ring'});
//	event.remove({output: 'kibe:chunk_loader'});
//})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
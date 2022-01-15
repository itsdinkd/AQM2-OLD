// priority: 0

console.info('Modifying AQM2 Items...');

onEvent('item.modification', event => {
  event.modify('kubejs:star_of_icon', item => {
    item.fireResistant = true
  });
  event.modify('kubejs:demon_pearl', item => {
    item.fireResistant = true
  });
  event.modify('kubejs:corrupted_emerald', item => {
    item.fireResistant = true
  });

});
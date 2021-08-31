// Another Quality Modpack 2 //
///////////////////////////////


events.listen("recipes", function (event) {

// Aether Book
  event.shapeless(item.of('the_aether:lore_book', 1), ['minecraft:dirt', 'minecraft:book'])

// Origins Orb
  event.shaped(item.of('origins:orb_of_origin', 1), [
    ['gobber2:dragon_star', 'bewitchment:cleansing_balm', 'winged:dipped_ceremonial_knife'],
    ]);

});

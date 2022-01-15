// Another Quality Modpack 2 //
///////////////////////////////


settings.useOriginalRecipeForFilters = true;
onEvent('recipes', event => {

  // Charm Barrel
   // event.remove({ output: "minecraft:barrel" });

   // event.shapeless('charm:spruce_barrel', ['minecraft:barrel']);
   // event.shapeless('minecraft:barrel', ['charm:spruce_barrel']);

  // salt
   event.shapeless('croptopia:salt', ['valley:salt']);
   event.shapeless('valley:salt', ['croptopia:salt']);


   event.shapeless('bewitchment:salt', ['valley:salt']);
   event.shapeless('bewitchment:salt', ['croptopia:salt']);
   event.shapeless('croptopia:salt', ['bewitchment:salt']);
   event.shapeless('valley:salt', ['bewitchment:salt']);
   event.replaceInput({}, "#c:salt_dusts", "bewitchment:salt");
   event.replaceOutput({}, "#c:salt_dusts", "bewitchment:salt");

  // // rice
  event.shapeless("farmersdelight:rice", ['valley:rice_item']);
  event.shapeless("farmersdelight:rice", ['croptopia:rice']);
  event.shapeless("valley:rice_item", ['farmersdelight:rice']);
  event.shapeless("valley:rice_item", ['croptopia:rice']);

  event.shapeless("croptopia:rice", ['farmersdelight:rice']);
  event.shapeless("croptopia:rice", ['valley:rice_item']);

  // // onion
  event.shapeless("farmersdelight:onion", ['valley:onion']);
  event.shapeless("farmersdelight:onion", ['croptopia:onion']);

  event.shapeless("valley:onion", ['farmersdelight:onion']);
  event.shapeless("valley:onion", ['croptopia:onion']);

  event.shapeless("croptopia:onion", ['farmersdelight:onion']);
  event.shapeless("croptopia:onion", ['valley:onion']);

  //  // tomato
  event.shapeless("farmersdelight:tomato", ['croptopia:tomato']);
  //event.shapeless("farmersdelight:tomato", ['sandwichable:tomato']);

  //  event.shapeless("croptopia:tomato", ['sandwichable:tomato']);
  event.shapeless("croptopia:tomato", ['farmersdelight:tomato']);

  //  event.shapeless("sandwichable:tomato", ['croptopia:tomato']);
  //  event.shapeless("sandwichable:tomato", ['farmersdelight:tomato']);

  //  // lettuce
  //  event.shapeless("sandwichable:lettuce_head", ['croptopia:lettuce']);
  //  event.shapeless("croptopia:lettuce", ['sandwichable:lettuce_head']);

  // Wooden Bucket / Small Logs
  event.remove({ output: "blockus:oak_small_logs" });
  event.remove({ output: "blockus:spruce_small_logs" });
  event.remove({ output: "blockus:birch_small_logs" });
  event.remove({ output: "blockus:jungle_small_logs" });
  event.remove({ output: "blockus:acacia_small_logs" });
  event.remove({ output: "blockus:dark_oak_small_logs" });
  event.remove({ output: "blockus:white_oak_small_logs" });

  event.shaped("3x blockus:oak_small_logs", [
    ["minecraft:oak_log", "minecraft:oak_log", "minecraft:oak_log"],
  ]);
  event.shaped("3x blockus:spruce_small_logs", [
    ["minecraft:spruce_log", "minecraft:spruce_log", "minecraft:spruce_log"],
  ]);
  event.shaped("3x blockus:birch_small_logs", [
    ["minecraft:birch_log", "minecraft:birch_log", "minecraft:birch_log"],
  ]);
  event.shaped("3x blockus:jungle_small_logs", [
    ["minecraft:jungle_log", "minecraft:jungle_log", "minecraft:jungle_log"],
  ]);
  event.shaped("3x blockus:acacia_small_logs", [
    ["minecraft:acacia_log", "minecraft:acacia_log", "minecraft:acacia_log"],
  ]);
  event.shaped("3x blockus:dark_oak_small_logs", [
    [
      "minecraft:dark_oak_log",
      "minecraft:dark_oak_log",
      "minecraft:dark_oak_log",
    ],
  ]);
  event.shaped("3x blockus:white_oak_small_logs", [
    ["blockus:white_oak_log", "blockus:white_oak_log", "blockus:white_oak_log"],
  ]);


  //Blockus Golden bars
  // event.remove({ output: "blockus:golden_bars" });

  // event.shapeless('blockus:golden_bars', ['charm:gold_bars'])
  // event.shapeless('charm:gold_bars', ['blockus:golden_bars'])

  // Aluminum plate for catalyst
  event.shapeless('techreborn:aluminum_plate', ['agape_space:aluminum_catalyst'])

  // Silver
  event.replaceOutput({}, "bewitchment:silver_ingot", "techreborn:silver_ingot");
  event.replaceOutput({}, "bewitchment:silver_nugget", "techreborn:silver_nugget");
  event.replaceOutput({}, "bewitchment:raw_silver", "techreborn:raw_silver");
  event.replaceOutput({}, "bewitchment:raw_silver_block", "techreborn:raw_silver_storage_block");

  // veggie_way:knife
event.remove({output: 'veggie_way:knife'});
event.shaped('veggie_way:knife', [
[null, null, null],
['minecraft:iron_ingot', null, null],
[null, 'minecraft:stick', 'minecraft:wheat_seeds'],
]);

// mcdw:dagger_dagger
event.remove({output: 'mcdw:dagger_dagger'});
event.shaped('mcdw:dagger_dagger', [
[null, null, null],
['mythicmetals:osmium_ingot', null, null],
[null, 'minecraft:stick', null],
]);

// chisel chisel
event.remove({output: 'chisel:chisel'});
event.shaped('chisel:chisel', [
[null, null, null],
['minecraft:stick', null, null],
['minecraft:iron_ingot', null, null],
]);

// bits n chisel chisel
event.remove({output: 'bitsandchisels:iron_chisel'});
event.shaped('bitsandchisels:iron_chisel', [
['chisel:chisel', null, null],
['minecraft:stick', null, null],
['minecraft:iron_ingot', null, null],
]);

event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:copper_ingot', '#c:copper_ingots')

event.remove({output: 'friendsandfoes:copper_button'});
event.shaped('friendsandfoes:copper_button', [
['#c:copper_ingots', "minecraft:coal", null],
[null,null,null],
[null,null,null],
]);

// Garlic Choice
event.replaceInput('croptopia:garlic', 'bewitchment:garlic')

// Smooth Calcite Consistency + - Interferes with Spectrum Calcite
event.remove({output:'consistency_plus:smooth_calcite'})
});

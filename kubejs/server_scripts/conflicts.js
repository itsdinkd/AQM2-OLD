// Another Quality Modpack 2 //
// Credits to AOF4           //
///////////////////////////////


settings.useOriginalRecipeForFilters = true
events.listen("recipes", function (event) {

  // Charm Barrel
   event.remove({ output: "minecraft:barrel" });

   event.shapeless('charm:spruce_barrel', ['minecraft:barrel']);
   event.shapeless('minecraft:barrel', ['charm:spruce_barrel']);

  // salt
   event.shapeless('croptopia:salt', ['valley:salt']);
   event.shapeless('valley:salt', ['croptopia:salt']);


   event.shapeless('bewitchment:salt', ['valley:salt']);
   event.shapeless('bewitchment:salt', ['croptopia:salt']);
   event.shapeless('croptopia:salt', ['bewitchment:salt']);
   event.shapeless('valley:salt', ['bewitchment:salt']);
   event.replaceInput({}, "#c:salt_dusts", "bewitchment:salt");
   event.replaceOutput({}, "#c:salt_dusts", "bewitchment:salt");

  // rice
   event.shapeless("farmersdelight:rice", ['valley:rice_item']);
   event.shapeless("farmersdelight:rice", ['croptopia:rice']);

   event.shapeless("valley:rice_item", ['farmersdelight:rice']);
   event.shapeless("valley:rice_item", ['croptopia:rice']);

   event.shapeless("croptopia:rice", ['farmersdelight:rice']);
   event.shapeless("croptopia:rice", ['valley:rice_item']);

  // onion
   event.shapeless("farmersdelight:onion", ['valley:onion']);
   event.shapeless("farmersdelight:onion", ['croptopia:onion']);

   event.shapeless("valley:onion", ['farmersdelight:onion']);
   event.shapeless("valley:onion", ['croptopia:onion']);

   event.shapeless("croptopia:onion", ['farmersdelight:onion']);
   event.shapeless("croptopia:onion", ['valley:onion']);

   // tomato
   event.shapeless("farmersdelight:tomato", ['croptopia:tomato']);
   event.shapeless("farmersdelight:tomato", ['sandwichable:tomato']);

   event.shapeless("croptopia:tomato", ['sandwichable:tomato']);
   event.shapeless("croptopia:tomato", ['farmersdelight:tomato']);

   event.shapeless("sandwichable:tomato", ['croptopia:tomato']);
   event.shapeless("sandwichable:tomato", ['farmersdelight:tomato']);

   // lettuce
   event.shapeless("sandwichable:lettuce_head", ['croptopia:lettuce']);
   event.shapeless("croptopia:lettuce", ['sandwichable:lettuce_head']);

 //  // Gunpowder Block
 // event.remove({ output: "blast:gunpowder_block" });
 // event.shaped(item.of("blast:gunpowder_block"), [
 //  ["minecraft:gunpowder", "minecraft:gunpowder", "minecraft:gunpowder"],
 //  ["minecraft:gunpowder", "minecraft:coal_block", "minecraft:gunpowder"],
 //  ["minecraft:gunpowder", "minecraft:gunpowder", "minecraft:gunpowder"],
 //  ]);

  // Wooden Bucket / Small Logs
  event.remove({ output: "blockus:oak_small_logs" });
  event.remove({ output: "blockus:spruce_small_logs" });
  event.remove({ output: "blockus:birch_small_logs" });
  event.remove({ output: "blockus:jungle_small_logs" });
  event.remove({ output: "blockus:acacia_small_logs" });
  event.remove({ output: "blockus:dark_oak_small_logs" });
  event.remove({ output: "blockus:white_oak_small_logs" });

  event.shaped(item.of("blockus:oak_small_logs", 3), [
    ["minecraft:oak_log", "minecraft:oak_log", "minecraft:oak_log"],
  ]);
  event.shaped(item.of("blockus:spruce_small_logs", 3), [
    ["minecraft:spruce_log", "minecraft:spruce_log", "minecraft:spruce_log"],
  ]);
  event.shaped(item.of("blockus:birch_small_logs", 3), [
    ["minecraft:birch_log", "minecraft:birch_log", "minecraft:birch_log"],
  ]);
  event.shaped(item.of("blockus:jungle_small_logs", 3), [
    ["minecraft:jungle_log", "minecraft:jungle_log", "minecraft:jungle_log"],
  ]);
  event.shaped(item.of("blockus:acacia_small_logs", 3), [
    ["minecraft:acacia_log", "minecraft:acacia_log", "minecraft:acacia_log"],
  ]);
  event.shaped(item.of("blockus:dark_oak_small_logs", 3), [
    [
      "minecraft:dark_oak_log",
      "minecraft:dark_oak_log",
      "minecraft:dark_oak_log",
    ],
  ]);
  event.shaped(item.of("blockus:white_oak_small_logs", 3), [
    ["blockus:white_oak_log", "blockus:white_oak_log", "blockus:white_oak_log"],
  ]);
 
  
  //Blockus Golden bars
  event.remove({ output: "blockus:golden_bars" });

  event.shapeless('blockus:golden_bars', ['charm:gold_bars'])
  event.shapeless('charm:gold_bars', ['blockus:golden_bars'])

  // Aluminum plate for catalyst
  event.shapeless('techreborn:aluminum_plate', ['agape_space:aluminum_catalyst'])

  // Silver
  event.replaceOutput({}, "bewitchment:silver_ingot", "techreborn:silver_ingot");
  event.replaceOutput({}, "bewitchment:silver_nugget", "techreborn:silver_nugget");
  event.replaceOutput({}, "bewitchment:raw_silver", "techreborn:raw_silver");
  event.replaceOutput({}, "bewitchment:raw_silver_block", "techreborn:raw_silver_storage_block");

});

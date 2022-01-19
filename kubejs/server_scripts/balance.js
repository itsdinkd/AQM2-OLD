// Another Quality Modpack 2          //
////////////////////////////////////////

onEvent('recipes', event => {

//template
// event.remove({ output: "" });
// event.shaped(item.of(""), [
// ["","", ""],
// ["", "",""],
// ["","", ""],
// ]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Prefabs Balancing//

// Starter Farm
// event.remove({ output: "prefab:item_starter_farm" });
// event.shaped(item.of("prefab:item_starter_farm"), [
// ["minecraft:wheat_seeds","croptopia:corn_seed", "minecraft:wheat_seeds"],
// ["prefab:item_bundle_of_timber", "prefab:block_compressed_dirt","prefab:item_bundle_of_timber"],
// ["minecraft:white_wool","minecraft:water_bucket", "minecraft:white_wool"],
// ]);

event.remove({ output: "prefab:item_starter_farm" });
event.shaped("prefab:item_starter_farm", [
["minecraft:wheat_seeds","croptopia:corn_seed", "minecraft:wheat_seeds"],
["prefab:item_bundle_of_timber", "prefab:block_compressed_dirt","prefab:item_bundle_of_timber"],
["prefab:white_wool","minecraft:water_bucket", "minecraft:white_wool"],
]);


// // Moderate Farm
 event.remove({ output: "prefab:item_moderate_farm" });
 event.shaped("prefab:item_moderate_farm", [
 ["prefab:block_double_compressed_dirt","prefab:block_compressed_obsidian", "prefab:block_double_compressed_dirt"],
 ["prefab:item_heap_of_timber", "prefab:item_starter_farm","prefab:item_heap_of_timber"],
 ["prefab:item_pallet_of_bricks","prefab:item_compressed_chest", "prefab:item_pallet_of_bricks"],
 ]);

// // Advance Farm
 event.remove({ output: "prefab:item_advanced_farm" });
 event.shaped("prefab:item_advanced_farm", [
 ["prefab:block_triple_compressed_stone","prefab:block_double_compressed_obsidian", "prefab:block_triple_compressed_stone"],
 ["prefab:item_ton_of_timber", "prefab:item_moderate_farm","prefab:item_ton_of_timber"],
 ["prefab:item_coil_of_lanterns","inmis:withered_backpack", "prefab:item_pallet_of_bricks"],
 ]);

// //snowblock to ice -> packed ice -> blue ice
// event.shaped(item.of("minecraft:ice"), [
// ["minecraft:snow_block","minecraft:snow_block", "minecraft:snow_block"],
// ["minecraft:snow_block", "minecraft:snow_block","minecraft:snow_block"],
// ["minecraft:snow_block","minecraft:snow_block", "minecraft:snow_block"],
// ]);

// event.replaceInput({ id: ""}, "", "");

// End of Prefab Balancing//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Block Placing -- Ban
//
// const banBlock = ["minecraft:iron_ore", "minecraft:gold_ore"];
//
// onEvent("block.place", (event) => {
//   banBlock.forEach((e) => {
//     if (event.getBlock() == e) {
//       event.cancel();
//       console.log("test");
//     }
//   });
// });
//
///// Tech Reborn, Gobber, Kibe Recipe Changes
//
// Quantum Suit
event.remove({ output: "techreborn:quantum_chestplate" });
event.shaped("techreborn:quantum_chestplate", [
["techreborn:tungstensteel_plate",null, "techreborn:tungstensteel_plate"],
["techreborn:superconductor_cable", "kibe:angel_ring","techreborn:superconductor_cable"],
["techreborn:data_storage_chip","techreborn:iridium_neutron_reflector", "techreborn:data_storage_chip"],
]);

// Light Ring
event.remove({ output: "kibe:light_ring" });
event.shaped("kibe:light_ring", [
 ['agape_space:rocket_ship_box_v3',"techreborn:data_storage_chip", 'agape_space:rocket_ship_box_v3'],
 ["gobber2:dragon_star", "kibe:diamond_ring", "gobber2:dragon_elytra"],
 ['techreborn:iridum_plate',"techreborn:data_storage_chip", 'techreborn:iridum_plate'],
 ]);


// Gobber Vision Ring
event.remove({ output: "gobber2:gobber2_ring_vision" });
event.shaped("gobber2:gobber2_ring_vision", [
 ['bewitchment:demon_heart',"modern_industrialization:highly_advanced_upgrade", "ae2:spatial_cell_component_16"],
 ["gobber2:dragon_star", "gobber2:gobber2_ring_end", "gobber2:dragon_star"],
 ['bewitchment:demon_horn',"modern_industrialization:highly_advanced_upgrade", 'bewitchment:harbinger'],
 ]);


// OLD RECIPE -- Angel Ring
// event.remove({ output: "kibe:angel_ring" });
// event.shaped("kibe:angel_ring", [
//  ['techreborn:iridium_neutron_reflector','gobber2:gobber2_chestplate_dragon_no_flight','adventurez:source_stone'],
//  ['techreborn:interdimensional_su', 'modern_industrialization:quantum_upgrade', 'techreborn:interdimensional_su'],
//  ['techreborn:nak_coolant_cell_360k','ae2:cell_component_64k','bosses_of_mass_destruction:earthdive_spear'],
//  ]);

  // Abyss Watcher
  event.remove({output: 'waystones:abyss_watcher'});
  event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "FEF"
      ],
      "key": {
        "E": {
          "item": "minecraft:ender_pearl"
        },
        "F": {
          "item": "gobber2:gobber2_ingot"
        }
      },
      "result": {
        "item": "waystones:abyss_watcher",
        "count": 1
      }
    });

  // Pocket Wormhole
  event.remove({output: 'waystones:pocket_wormhole'});
  event.custom({
          "type": "minecraft:crafting_shaped",
      "pattern": [
        " A ",
        "PSP",
        " P "
      ],
      "key": {
        "P": {
          "item": "gobber2:dragon_star"
        },
        "A": {
          "item": "waystones:abyss_watcher"
        },
        "S": {
          "item": "gobber2:dragon_star"
        }
      },
      "result": {
        "item": "waystones:pocket_wormhole",
        "count": 1
      }
    });


// Angel Ring
event.remove({output: 'kibe:angel_ring'});
event.custom({
  "type": "bigbenchtheory:crafting_shaped",
  "pattern": [
    "@NyCHCyN@",
    "gMAAaAAMg",
    "^I1DDD4I^",
    "gM2DND5Mg",
    "&I3DDD6I&",
    "gMAA7AAMg",
    "!NsCECsN!"
  ],
  "key": {
    "D": {
      "item": "gobber2:dragon_star"
    },
    "N": {
      "item": "modern_industrialization:quantum_upgrade"
    },
    "A": {
      "item": "ae2:cell_component_64k"
    },
    "1": {
      "item": "kubejs:demon_pearl"
    },
    "2": {
      "item": "kubejs:star_of_icon"
    },
    "3": {
      "item": "kubejs:corrupted_emerald"
    },
    "4": {
      "item": "bosses_of_mass_destruction:void_thorn"
    },
    "5": {
      "item": "bosses_of_mass_destruction:ancient_anima"
    },
    "6": {
      "item": "bosses_of_mass_destruction:blazing_eye"
    },
    "7": {
      "item": "bosses_of_mass_destruction:obsidian_heart"
    },
    "M": {
      "item": "mobz:boss_ingot"
    },
    "H": {
      "item": "adventurez:stone_golem_heart"
    },
    "E": {
      "item": "adventurez:prime_eye"
    },
    "I": {
      "item": "techreborn:interdimensional_su"
    },
    "C": {
      "item": "techreborn:nak_coolant_cell_360k"
    },
    "s": {
      "item": "spectrum:upgrade_speed3"
    },
    "y": {
      "item": "spectrum:upgrade_yield2"
    },
    "g": {
      "item": "botania:gaia_ingot"
    },
    "@": {
      "item": "magicfungi:impetus_essence"
    },
    "!": {
      "item": "magicfungi:clypeus_essence"
    },
    "^": {
      "item": "magicfungi:utilis_essence"
    },
    "&": {
      "item": "magicfungi:vivifica_essence"
    },
    "a": {
      "item": "minecraft:apple"
    }
  },
  "result": {
    "item": "kibe:angel_ring"
  }
})

    // event.custom({
    //   "type": "botania:runic_altar",
    //   "output": {
    //     "item": "kibe:angel_ring"
    //   },
    //   "mana": 99999,
    //   "ingedients": [
    //    {
    //      "item": "techreborn:iridium_neutron_reflector"
    //    },
    //    {
    //      "item": "gobber2:gobber2_chestplate_dragon_no_flight"
    //    },
    //    {
    //      "item": "adventurez:source_stone"
    //    },
    //    {
    //      "item": "techreborn:interdimensional_su"
    //    },
    //    {
    //      "item": "modern_industrialization:quantum_upgrade"
    //    },
    //    {
    //      "item": "techreborn:interdimensional_su"
    //    },
    //    {
    //      "item": "techreborn:nak_coolant_cell_360k"
    //    },
    //    {
    //      "item": "ae2:cell_component_64k"
    //    },
    //    {
    //      "item": "bosses_of_mass_destruction:void_thorne"
    //    }
    //    ]
    //  });

///// Tech Reborn Removal

// TECH Reborn Solar Panels
event.remove({ id: "techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt" });
event.remove({ id: "techreborn:crafting_table/solar_panel/industrial_solar_panel_alt" });
event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });
event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });

// Tech Reborn Gem Tools & Gear - Useless
var gems = [
"ruby"
];

gems.forEach(function (item, index) {
event.remove({ output: "techreborn:" + item + "_pickaxe"});
event.remove({ output: "techreborn:" + item + "_spade"});
event.remove({ output: "techreborn:" + item + "_axe"});
event.remove({ output: "techreborn:" + item + "_hoe"});
event.remove({ output: "techreborn:" + item + "_sword"});
});



///////////////////////////////////
// Single item in recipe replace //

// Steam drill

event.replaceInput(
{ id: "modern_industrialization:steam_mining_drill" },
"minecraft:furnace",
"gobber2:gobber2_rod"
);

// Building Gadgets - Destruction Gadget, end game. its too destructive.
event.replaceInput(
{ id: "buildinggadgets:gadget_destruction" },
"minecraft:lapis_lazuli",
"kibe:angel_ring"
);

////// Things

// Riot Gauntlet
event.replaceInput(
{ id: "things:riot_gauntlet" },
"minecraft:iron_ingot",
"techreborn:hot_tungstensteel_ingot"
);

 // Riot Gauntlet
event.replaceInput(
{ id: "things:mining_gloves" },
"minecraft:leather",
"modern_industrialization:highly_advanced_upgrade"
);

// Enchanted Wax Gland -- old recipe
 event.replaceInput(
 { id: "things:enchanted_wax_gland" },
 "minecraft:pufferfish",
 "gobber2:gobber2_medallion_sea"
);

 // Compress Ruby Block
//  event.replaceInput(
// { id: "compress:compressed_ruby_block_1" },
// "compress:ruby_block",
// "betternether:nether_ruby_block"
// );

// // blast --dirt bomb
// event.replaceInput(
// { id: "blast:dirt_bomb" },
// "minecraft:dirt",
// "prefab:block_compressed_dirt"
// );
// event.replaceInput(
// { id: "blast:dirt_trigger_bomb" },
// "minecraft:dirt",
// "prefab:block_compressed_dirt"
// );

// // blast --diamond bomb
// event.replaceInput(
// { id: "blast:diamond_bomb" },
// "minecraft:diamond",
// "magicfungi:magical_fungi_alloy"
// );
// event.replaceInput(
// { id: "blast:diamond_trigger_bomb" },
// "minecraft:diamond",
// "magicfungi:magical_fungi_alloy"
// );

// // blast --gold bomb
// event.replaceInput(
// { id: "blast:golden_bomb" },
// "minecraft:gold_ingot",
// "indrev:gold_chunk"
// );
// event.replaceInput(
// { id: "blast:golden_trigger_bomb" },
// "minecraft:gold_ingot",
// "indrev:gold_chunk"
// );

// // blast --bomb
// event.replaceInput(
// { id: "blast:bomb" },
// "minecraft:iron_ingot",
// "indrev:iron_chunk"
// );
// event.replaceInput(
// { id: "blast:trigger_bomb" },
// "minecraft:iron_ingot",
// "indrev:iron_chunk"
// );

// Custom Portals Infinity Range
// event.replaceInput(
// { id: "customportals:infinity_rune" },
// "minecraft:netherite_ingot",
// "gobber2:dragon_star"
// );


// Dark Enchanter
event.replaceInput(
{ id: "dark-enchanting:dark_enchanter" },
"minecraft:crying_obsidian",
"gobber2:gobber2_glob_nether"
);

// Dark Enchanter Upgrade
event.replaceInput(
{ id: "dark-enchanting:dark_enchanter" },
"minecraft:air",
"dark-enchanting:dark_enchanter"
);

// SoulFire
event.remove({ output: "conjuring:soulfire_forge" });
event.shaped("conjuring:soulfire_forge", [
["minecraft:nether_star", "minecraft:dragon_head", "minecraft:nether_star"],
["gobber2:gobber2_ingot_end", null, "gobber2:gobber2_ingot_end"],
["minecraft:crying_obsidian", "gobber2:gobber2_links_end", "minecraft:crying_obsidian"],
]);



///////////////////////////////////////////////// EXTRA GENERATORS

// extra generators heavenly
event.replaceInput(
{ id: "extragenerators:heavenly_generator" },
"minecraft:netherite_block",
"gofish:aquatic_astral_stew"
);

// extra generators infernal
event.replaceInput(
{ id: "extragenerators:infernal_generator" },
"minecraft:netherite_block",
"modern_industrialization:superconductor_ingot"
);
// extra generators dragon
event.replaceInput(
{ id: "extragenerators:dragon_generator" },
"#c:iron_ingots",
"gobber2:dragon_star"
);
// extra generators withered
event.replaceInput(
{ id: "extragenerators:withered_generator" },
"#c:iron_ingots",
"conjuring:soul_slice"
);

// extra generators burnable
event.replaceInput(
{ id: "extragenerators:burnable_generator" },
"#c:iron_ingots",
"modern_industrialization:copper_double_ingot"
);

// extra generators sludgy
// event.replaceInput(
// { id: "extragenerators:sludgy_generator" },
// "#c:iron_ingots",
// "betternether:cincinnasite_ingot"
// );

// extra generators teleport
event.replaceInput(
{ id: "extragenerators:teleport_generator" },
"#c:iron_ingots",
"minecraft:beacon"
);
// extra generators scalding
event.replaceInput(
{ id: "extragenerators:scalding_generator" },
"#c:iron_ingots",
"blockus:chiseled_lava_bricks"
);
// extra generators steam
event.replaceInput(
{ id: "extragenerators:steam_generator" },
"#c:iron_ingots",
"modern_industrialization:steam_blast_furnace"
);
// extra generators demise
event.replaceInput(
{ id: "extragenerators:demise_generator" },
"#c:iron_ingots",
"conjuring:soul_alloy"
);
// extra generators enchanted
event.replaceInput(
{ id: "extragenerators:enchanted_generator" },
"#c:iron_ingots",
"things:enchanted_wax_gland"
);
// extra generators gluttony
event.replaceInput(
{ id: "extragenerators:gluttony_generator" },
"#c:iron_ingots",
"gofish:smokey_salmon"
);
// extra generators gluttony
event.replaceInput(
{ id: "extragenerators:redstone_generator" },
"#c:iron_ingots",
"techreborn:redstone_plate"
);
//////////////////////////////////////////////////////////////////////

////// Bewitchment

// Juniper Brooms
event.replaceInput(
{ id: "bewitchment:juniper_broom" },
"bewitchment:juniper_log",
"magicfungi:magical_fungi_alloy"
);

// // Cypress Brooms
event.replaceInput(
{ id: "bewitchment:cypress_broom" },
"bewitchment:cypress_log",
"magicfungi:magical_fungi_alloy"
);

// // Elder Broom
event.replaceInput(
{ id: "bewitchment:elder_broom" },
"bewitchment:elder_log",
"magicfungi:magical_fungi_alloy"
);

// // Dragon Blood Broom
event.replaceInput(
{ id: "bewitchment:dragons_blood_broom" },
"bewitchment:dragons_blood_log",
"magicfungi:magical_fungi_alloy"
);

////// Gobber2

// Dragon Armor Chestplate recipe change
event.replaceInput(
{ id: "gobber2:gobber2_chestplate_dragon_no_flight" },
"minecraft:dragon_head",
"gobber2:dragon_elytra"
);

// Dragon Armor Leggings recipe change
event.replaceInput(
{ id: "gobber2:gobber2_leggings_dragon_no_flight" },
"minecraft:dragon_head",
"gobber2:dragon_star"
);

// Dragon Armor Boots recipe change
event.replaceInput(
{ id: "gobber2:gobber2_boots_dragon_no_flight" },
"minecraft:dragon_head",
"gobber2:dragon_star"
);

// Dragon Armor Helmet recipe change
event.replaceInput(
{ id: "gobber2:gobber2_helmet_dragon_no_flight" },
"minecraft:dragon_head",
"gobber2:dragon_star"
);

// Doom Argent Ingot
event.replaceInput(
{ id: "doom:argent_plate" },
"minecraft:iron_ingot",
"techreborn:tungstensteel_plate"
);

// // dim doors - gold
// event.replaceInput(
// { id: "dimdoors:gold_dimensional_door" },
// "minecraft:ender_pearl",
// "compress:compressed_gold_block_4"
// );

// // dim doors - iron
// event.replaceInput(
// { id: "dimdoors:iron_dimensional_door" },
// "minecraft:ender_pearl",
// "gobber2:dragon_star"
// );

// // dim doors - oak
// event.replaceInput(
// { id: "dimdoors:oak_dimensional_door" },
// "minecraft:ender_pearl",
// "conjuring:scope_charm"
// );

// // dim doors - quartz
// event.replaceInput(
// { id: "dimdoors:quartz_dimensional_door" },
// "minecraft:ender_pearl",
// "gobber2:gobber2_ingot_nether"
// );

// // Dim Doors - stabrift signature
// event.remove({ output: "dimdoors:stabilized_rift_signature" });
// event.shaped(item.of("dimdoors:stabilized_rift_signature"), [
// ["","gobber2:gobber2_rod_end", ""],
// ["gobber2:gobber2_rod_end", "dimdoors:rift_signature","gobber2:gobber2_rod_end"],
// ["","gobber2:gobber2_rod_end", ""],
// ]);

// // dim doors - rift sig
// event.remove({ output: "dimdoors:rift_signature" });
// event.shaped(item.of("dimdoors:rift_signature"), [
// ["","gobber2:gobber2_rod_nether", ""],
// ["gobber2:gobber2_rod_nether", "dimdoors:stable_fabric","gobber2:gobber2_rod_nether"],
// ["","gobber2:gobber2_rod_nether", ""],
// ]);

// kibe Slime Boots
event.replaceInput(
{ id: "kibe:slime_boots" },
"minecraft:slime_ball",
"gofish:slimefish"
);

// kibe Slime Sling
event.replaceInput(
{ id: "kibe:slime_sling" },
"minecraft:slime_ball",
"gofish:slimefish"
);

// Gobber2 - Ring of haste
event.replaceInput(
{ id: "gobber2:gobber2_ring_haste" },
"minecraft:emerald",
"modern_industrialization:highly_advanced_upgrade"
);

// Gobber2 - Medallion healing lesser
event.replaceInput(
{ id: "gobber2:gobber2_medallion_healing" },
"minecraft:rabbit_foot",
"bewitchment:glowing_bramble"
);

// Gobber2 - Medallion healing lesser 2
event.replaceInput(
{ id: "gobber2:gobber2_medallion_healing2" },
"minecraft:weeping_vines",
"minecraft:nether_star"
);

// Gobber2 - Medallion healing lesser 3
event.replaceInput(
{ id: "gobber2:gobber2_medallion_healing3" },
"minecraft:nether_star",
"adventurez:warthog_shell_piece"
);

// Gobber2 - Ring of Void
event.replaceInput(
{ id: "gobber2:gobber2_ring_void" },
"minecraft:ender_eye",
"minecraft:shulker_shell"
);

// Gobber2 - Ring of Above
event.replaceInput(
{ id: "gobber2:gobber2_ring_above" },
"minecraft:emerald",
"adventurez:orc_skin"
);

// Gobber2 - Ring of Above pt2
event.replaceInput(
{ id: "gobber2:gobber2_ring_above" },
"minecraft:lapis_lazuli",
"adventurez:warthog_shell_piece"
);

// Gobber2 - Ring of Explorer
event.replaceInput(
{ id: "gobber2:gobber2_ring_explorer" },
"gobber2:gobber2_ring_return",
"bosses_of_mass_destruction:void_thorn"
);

//Gobber2 - Swiftness
event.remove({ output: "gobber2:gobber2_ring_swiftness" });
event.shaped("gobber2:gobber2_ring_swiftness", [
["","mcdar:boots_of_swiftness", ""],
["magicfungi:vivifica_mushroom","gobber2:gobber2_ring","magicfungi:vivifica_mushroom"],
["","magicfungi:vivifica_mushroom", ""],
]);

// Kibe Escape Rope
event.replaceInput(
{ id: "kibe:escape_rope" },
"minecraft:iron_ingot",
"adventurez:gilded_stone"
);


  // Croptosis Watering Cans
  // event.remove({output: 'croptosis:iron_watering_can'});
  // event.custom({
  //   "type": "lacrimis:infusion_shaped",
  //   "pattern": [
  //     "AAA",
  //     "D  ",
  //     "   "
  //   ],
  //   "key": {
  //     "A": {
  //       "item": "gobber2:gobber2_rod"
  //     },
  //     "D": {
  //       "item": "minecraft:bucket"
  //     }
  //   },
  //   "result": {
  //     "item": "croptosis:iron_watering_can",
  //     "count": 1
  //   },
  //   "tears": 150
  //   });

  // event.remove({output: 'croptosis:gold_watering_can'});
  // event.custom({
  //   "type": "lacrimis:infusion_shaped",
  //   "pattern": [
  //     "AAA",
  //     "D  ",
  //     "   "
  //   ],
  //   "key": {
  //     "A": {
  //       "item": "gobber2:gobber2_rod_nether"
  //     },
  //     "D": {
  //       "item": "croptosis:iron_watering_can"
  //     }
  //   },
  //   "result": {
  //     "item": "croptosis:gold_watering_can",
  //     "count": 1
  //   },
  //   "tears": 250
  //   });

  // event.remove({output: 'croptosis:diamond_watering_can'});
  // event.custom({
  //   "type": "lacrimis:infusion_shaped",
  //   "pattern": [
  //     "AAA",
  //     "D  ",
  //     "   "
  //   ],
  //   "key": {
  //     "A": {
  //       "item": "gobber2:gobber2_rod_end"
  //     },
  //     "D": {
  //       "item": "croptosis:gold_watering_can"
  //     }
  //   },
  //   "result": {
  //     "item": "croptosis:diamond_watering_can",
  //     "count": 1
  //   },
  //   "tears": 500
  //   });

  // event.remove({output: 'croptosis:netherite_watering_can'});
  // event.custom({
  //   "type": "lacrimis:infusion_shaped",
  //   "pattern": [
  //     "AAA",
  //     "D  ",
  //     "   "
  //   ],
  //   "key": {
  //     "A": {
  //       "item": "gobber2:dragon_star"
  //     },
  //     "D": {
  //       "item": "croptosis:diamond_watering_can"
  //     }
  //   },
  //   "result": {
  //     "item": "croptosis:netherite_watering_can",
  //     "count": 1
  //   },
  //   "tears": 1000
  //   });


// Tools and Sword

var doom_tools = [
  "shovel",
  "hoe",
  "sword",
]

doom_tools.forEach(function (item, index) {
event.replaceInput(
  { id: "doom:argent_" + item},
  "minecraft:stick",
  "doom:argent_plate"
  );
});

  ///// Extra Alchemy

  // Empty Ring
  // event.replaceInput(
  //   { id: "extraalchemy:empty_ring" },
  //   "minecraft:gold_ingot",
  //   "gobber2:gobber2_ingot_end"
  // );

  // event.replaceInput(
  //   { id: "extraalchemy:empty_ring_mirror" },
  //   "minecraft:gold_ingot",
  //   "gobber2:gobber2_ingot_end"
  // );


  // Quarry Plus
   event.replaceInput(
     { id: "quarryplus:quarry" },
     "minecraft:iron_ingot",
     "techreborn:hot_tungstensteel_ingot"
     );

   event.replaceInput(
     { id: "quarryplus:quarry" },
     "minecraft:dropper",
     "modern_industrialization:electric_quarry"
     );

   event.replaceInput(
     { id: "quarryplus:quarry" },
     "minecraft:redstone_block",
     "modern_industrialization:advanced_upgrade"
     );


  // kibe gliders

    var kibeGlidersX = [
    "white",
    "magenta",
    "orange",
    "light_blue",
    "yellow",
    "green",
    "pink",
    "gray",
    "lime",
    "blue",
    "light_gray",
    "cyan",
    "purple",
    "brown",
    "red",
    "black"
  ];

  kibeGlidersX.forEach(function (item, index) {
    event.replaceInput(
      { id: "kibe:" + item + "_glider" },
      "minecraft:iron_ingot",
      "gobber2:gobber2_rod"
      )
    });

  // Remove Doom OP items
event.remove({output: 'doom:daisy'});
event.remove({output: 'doom:soulcube'});

// Origins Orb
event.remove({output: 'origins:orb_of_origin'});
event.shaped('origins:orb_of_origin', [
['doom:argent_energy', 'bewitchment:cleansing_balm', 'minecraft:nether_star'],
]);

// QoL Sticks
event.shaped("16x minecraft:stick", [
  ["#minecraft:logs"],
  ["#minecraft:logs"],
]);

// Tanks
event.replaceInput(
  { id: "fluidtank:tank_copper" },
  "minecraft:copper_ingot",
  "techreborn:copper_plate"
);
event.replaceInput(
  { id: "fluidtank:tank_iron" },
  "minecraft:iron_ingot",
  "techreborn:refined_iron_plate"
);
event.replaceInput(
  { id: "fluidtank:tank_diamond" },
  "minecraft:diamond",
  "techreborn:diamond_plate"
);
event.replaceInput(
  { id: "fluidtank:tank_emerald" },
  "minecraft:emerald",
  "techreborn:emerald_plate"
);
event.replaceInput(
  { id: "fluidtank:tank_star" },
  "minecraft:nether_star",
  "techreborn:industrial_tank_unit"
);
event.replaceInput(
  { id: "fluidtank:tank_gold" },
  "minecraft:gold_ingot",
  "techreborn:gold_plate"
);

event.remove({ output: "things:enchanted_wax_gland" });
event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "things:enchanted_wax_gland"
  },
  "mana": 50000,
  "ingredients": [
    {
      "item": "gobber2:gobber2_medallion_sea"
    },
    {
      "item": "gobber2:gobber2_medallion_sea"
    },
    {
      "item": "minecraft:heart_of_the_sea"
    },
    {
      "item": "things:gleaming_compound"
    },
    {
      "item": "things:gleaming_compound"
    },
    {
      "item": "botania:rune_water"
    }
    ]
  })

//AE2 SkyBlocks
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "minecraft:crying_obsidian"
  },
  "output": {
    "item": "ae2:sky_stone_block",
    "count": 2
  },
  "mana": 200,
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
});
//AE2 calculation_processor_press
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "ae2:certus_quartz_crystal"
  },
  "output": {
    "item": "ae2:calculation_processor_press"
  },
  "mana": 125
});
//AE2 engineering press
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "techreborn:diamond_nugget"
  },
  "output": {
    "item": "ae2:engineering_processor_press"
  },
  "mana": 200
});
//AE2 logic press
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "minecraft:gold_nugget"
  },
  "output": {
    "item": "ae2:logic_processor_press"
  },
  "mana": 200
});
//AE2 silicon press
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "ae2:silicon"
  },
  "output": {
    "item": "ae2:silicon_press"
  },
  "mana": 200
});
//Cloud
event.replaceInput(
  { id: "botania:cloud_pendant" },
  "botania:manasteel_ingot",
  "botania:terrasteel_ingot"
);
event.replaceInput(
  { id: "botania:thunder_sword" },
  "botania:mana_diamond",
  "gobber2:dragon_star"
);
event.replaceInput(
  { id: "botania:clip" },
  "botania:dreamwood",
  "gobber2:dragon_star"
);

event.replaceInput(
  { id: "botania:mana_gun" },
  "botania:mana_diamond",
  "arcanus:master_wand"
);

event.replaceInput(
  { id: "botania:reach_ring" },
  "botania:elementium_ingot",
  "botania:gaia_ingot"
);

// Magictek Mechs
event.replaceInput(
  { id: "mtmechs:magicite" },
  "minecraft:soul_sand",
  "botania:mana_diamond"
);

event.replaceInput(
  { id: "mtmechs:magicite" },
  "minecraft:quartz",
  "gobber2:gobber2_rod"
);


// Heartbond
// extra generators gluttony
event.replaceInput(
{ id: "heartbond:ender_heart" },
"minecraft:nether_star",
"gobber2:gobber2_ring"
);

// Doom Gun table
event.replaceInput(
{ id: "doom:gun_table" },
"minecraft:comparator",
"doom:argent_block"
);

//end
})
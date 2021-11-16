// Another Quality Modpack 2          //
// Credits to AOF for ideas           //
////////////////////////////////////////

events.listen("recipes", function (event) {

  //template
  //   event.remove({ output: "" });
  // event.shaped(item.of(""), [
  //   ["",  "",                                   ""],
  //   ["", "",                      ""],
  //   ["",    "", ""],
  // ]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Prefabs Balancing                                                                                                                                      //

  // Starter Farm
  event.remove({ output: "prefab:item_starter_farm" });
  event.shaped(item.of("prefab:item_starter_farm"), [
    ["minecraft:wheat_seeds",  "croptopia:corn_seed",                                   "minecraft:wheat_seeds"],
    ["prefab:item_bundle_of_timber", "prefab:block_compressed_dirt",                      "prefab:item_bundle_of_timber"],
    ["minecraft:white_wool",    "minecraft:water_bucket", "minecraft:white_wool"],
  ]);

  event.remove({ output: "prefab:item_starter_farm" });
  event.shaped(item.of("prefab:item_starter_farm"), [
    ["minecraft:wheat_seeds",  "croptopia:corn_seed",                                   "minecraft:wheat_seeds"],
    ["prefab:item_bundle_of_timber", "prefab:block_compressed_dirt",                      "prefab:item_bundle_of_timber"],
    ["minecraft:white_wool",    "minecraft:water_bucket", "minecraft:white_wool"],
  ]);


  // Moderate Farm
  event.remove({ output: "prefab:item_moderate_farm" });
  event.shaped(item.of("prefab:item_moderate_farm"), [
    ["prefab:block_double_compressed_dirt",  "prefab:block_compressed_obsidian",                                   "prefab:block_double_compressed_dirt"],
    ["prefab:item_heap_of_timber", "prefab:item_starter_farm",                      "prefab:item_heap_of_timber"],
    ["minecraft:item_pallet_of_bricks",    "prefab:item_compressed_chest", "prefab:item_pallet_of_bricks"],
  ]);

  // Advance Farm
  event.remove({ output: "prefab:item_advanced_farm" });
  event.shaped(item.of("prefab:item_advanced_farm"), [
    ["prefab:block_triple_compressed_stone",  "prefab:block_double_compressed_obsidian",                                   "prefab:block_triple_compressed_stone"],
    ["prefab:item_ton_of_timber", "prefab:item_moderate_farm",                      "prefab:item_ton_of_timber"],
    ["minecraft:item_coil_of_lanterns",    "inmis:withered_backpack", "prefab:item_pallet_of_bricks"],
  ]);

  //snowblock to ice -> packed ice -> blue ice
  event.shaped(item.of("minecraft:ice"), [
    ["minecraft:snow_block",  "minecraft:snow_block",                                   "minecraft:snow_block"],
    ["minecraft:snow_block", "minecraft:snow_block",                      "minecraft:snow_block"],
    ["minecraft:snow_block",    "minecraft:snow_block", "minecraft:snow_block"],
  ]);

  // event.replaceInput({ id: ""}, "", "");

  // End of Prefab Balancing                                                                                                                                //
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///// Tech Reborn, Gobber, Kibe Recipe Changes

  // Quantum Suit
  event.remove({ output: "techreborn:quantum_chestplate" });
  event.shaped(item.of("techreborn:quantum_chestplate"), [
    ["techreborn:tungstensteel_plate",  null,                                   "techreborn:tungstensteel_plate"],
    ["techreborn:superconductor_cable", "kibe:angel_ring",                      "techreborn:superconductor_cable"],
    ["techreborn:data_storage_chip",    "techreborn:iridium_neutron_reflector", "techreborn:data_storage_chip"],
  ]);

  // Light Ring
  event.remove({ output: "kibe:light_ring" });
  event.shaped(item.of("kibe:light_ring"), [
   ['agape_space:rocket_ship_box_v3',            "techreborn:data_storage_chip", 'agape_space:rocket_ship_box_v3'],
   ["gobber2:dragon_star", "kibe:diamond_ring",                             "gobber2:dragon_elytra"],
   ['techreborn:iridum_plate',            "techreborn:data_storage_chip", 'techreborn:iridum_plate'],
 ]);


  // Gobber Vision Ring
  event.remove({ output: "gobber2:gobber2_ring_vision" });
  event.shaped(item.of("gobber2:gobber2_ring_vision"), [
   ['bewitchment:demon_heart',            "indrev:netherite_scrap_purified_ore", "magicfungi:magical_fungi_alloy"],
   ["gobber2:dragon_star", "gobber2:gobber2_ring_end",                             "gobber2:dragon_star"],
   ['bewitchment:demon_horn',            "indrev:netherite_scrap_purified_ore", 'bewitchment:harbinger'],
 ]);


  // OLD RECIPE -- Angel Ring
  // event.remove({ output: "kibe:angel_ring" });
  // event.shaped(item.of("kibe:angel_ring"), [
  //   ['bosses_of_mass_destruction:blazing_eye',  'gobber2:gobber2_chestplate_dragon_no_flight',                        'bosses_of_mass_destruction:obsidian_heart'],
  //   ['techreborn:interdimensional_su', 'bosses_of_mass_destruction:ancient_anima', 'techreborn:interdimensional_su'],
  //   ['techreborn:iridium_neutron_reflector',          'dml-refabricated:glitch_ingot',    'minecraft:dragon_breath'],
  // ]);

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
    "type": "lacrimis:infusion_shaped",
    "pattern": [
      "ABC",
      "DEF",
      "GHI"
    ],
    "key": {
      "A": {
        "item": "bosses_of_mass_destruction:blazing_eye"
      },
      "B": {
        "item": "gobber2:gobber2_chestplate_dragon_no_flight"
      },
      "C": {
        "item": "bosses_of_mass_destruction:obsidian_heart"
      },
      "D": {
        "item": "techreborn:interdimensional_su"
      },
      "E": {
        "item": "bosses_of_mass_destruction:ancient_anima"
      },
      "F": {
        "item": "techreborn:interdimensional_su"
      },
      "G": {
        "item": "techreborn:nak_coolant_cell_360k"
      },
      "H": {
        "item": "dml-refabricated:glitch_ingot"
      },
      "I": {
        "item": "kibe:light_ring"
      }
    },
    "result": {
      "item": "kibe:angel_ring",
      "count": 1
    },
    "tears": 9999
    });

  ///// Kibe Removal since other tiered items give resistance and water breathing




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
    "dimdoors:rift_signature"
  );

  // Enchanted Wax Gland
  event.replaceInput(
    { id: "things:enchanted_wax_gland" },
    "minecraft:pufferfish",
    "gobber2:gobber2_medallion_sea"
  );

 // Compress Ruby Block
   event.replaceInput(
    { id: "compress:compressed_ruby_block_1" },
    "compress:ruby_block",
    "betternether:nether_ruby_block"
  );

  // // blast --dirt bomb
  // event.replaceInput(
  //   { id: "blast:dirt_bomb" },
  //   "minecraft:dirt",
  //   "prefab:block_compressed_dirt"
  // );  
  // event.replaceInput(
  //   { id: "blast:dirt_trigger_bomb" },
  //   "minecraft:dirt",
  //   "prefab:block_compressed_dirt"
  // );  

  // // blast --diamond bomb
  // event.replaceInput(
  //   { id: "blast:diamond_bomb" },
  //   "minecraft:diamond",
  //   "magicfungi:magical_fungi_alloy"
  // );  
  // event.replaceInput(
  //   { id: "blast:diamond_trigger_bomb" },
  //   "minecraft:diamond",
  //   "magicfungi:magical_fungi_alloy"
  // );  

  // // blast --gold bomb
  // event.replaceInput(
  //   { id: "blast:golden_bomb" },
  //   "minecraft:gold_ingot",
  //   "indrev:gold_chunk"
  // );  
  // event.replaceInput(
  //   { id: "blast:golden_trigger_bomb" },
  //   "minecraft:gold_ingot",
  //   "indrev:gold_chunk"
  // );  

  // // blast --bomb
  // event.replaceInput(
  //   { id: "blast:bomb" },
  //   "minecraft:iron_ingot",
  //   "indrev:iron_chunk"
  // );  
  // event.replaceInput(
  //   { id: "blast:trigger_bomb" },
  //   "minecraft:iron_ingot",
  //   "indrev:iron_chunk"
  // );  

  // Custom Portals Infinity Range
  event.replaceInput(
    { id: "customportals:infinity_rune" },
    "minecraft:netherite_ingot",
    "gobber2:dragon_star"
  ); 

  // Conjuring Soul Forge
  event.replaceInput(
    { id: "conjuring:soulfire_forge" },
    "minecraft:obsidian",
    "techreborn:industrial_grinder"
  ); 



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
    "magicfungi:magical_fungi_alloy"
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
    "indrev:copper_chunk"
  );  

    // extra generators sludgy
  event.replaceInput(
    { id: "extragenerators:sludgy_generator" },
    "#c:iron_ingots",
    "betternether:cincinnasite_ingot"
  );
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
    "indrev:battery"
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
    "valley:bbox_salmon"
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

  // Cypress Brooms
  event.replaceInput(
    { id: "bewitchment:cypress_broom" },
    "bewitchment:cypress_log",
    "magicfungi:magical_fungi_alloy"
  );

  // Elder Broom
  event.replaceInput(
    { id: "bewitchment:elder_broom" },
    "bewitchment:elder_log",
    "magicfungi:magical_fungi_alloy"
  );

  // Dragon Blood Broom
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

  // Doom

  // Argent Ingot
  event.replaceInput(
    { id: "doom:argent_plate" },
    "minecraft:iron_ingot",
    "techreborn:tungstensteel_plate"
  );

  // dim doors - gold
  event.replaceInput(
    { id: "dimdoors:gold_dimensional_door" },
    "minecraft:ender_pearl",
    "compress:compressed_gold_block_4"
  );

  // dim doors - iron
  event.replaceInput(
    { id: "dimdoors:iron_dimensional_door" },
    "minecraft:ender_pearl",
    "gobber2:dragon_star"
  );

  // dim doors - oak
  event.replaceInput(
    { id: "dimdoors:oak_dimensional_door" },
    "minecraft:ender_pearl",
    "conjuring:scope_charm"
  );

  // dim doors - quartz
  event.replaceInput(
    { id: "dimdoors:quartz_dimensional_door" },
    "minecraft:ender_pearl",
    "gobber2:gobber2_ingot_nether"
  );

  // Dim Doors - stab  rift signature
  event.remove({ output: "dimdoors:stabilized_rift_signature" });
  event.shaped(item.of("dimdoors:stabilized_rift_signature"), [
    ["",  "gobber2:gobber2_rod_end",                                   ""],
    ["gobber2:gobber2_rod_end", "dimdoors:rift_signature",                      "gobber2:gobber2_rod_end"],
    ["",    "gobber2:gobber2_rod_end", ""],
  ]);

  // dim doors - rift sig
  event.remove({ output: "dimdoors:rift_signature" });
  event.shaped(item.of("dimdoors:rift_signature"), [
    ["",  "gobber2:gobber2_rod_nether",                                   ""],
    ["gobber2:gobber2_rod_nether", "dimdoors:stable_fabric",                      "gobber2:gobber2_rod_nether"],
    ["",    "gobber2:gobber2_rod_nether", ""],
  ]);

    // Slime Boots
  event.replaceInput(
    { id: "kibe:slime_boots" },
    "minecraft:slime_ball",
    "gofish:slimefish"
  );

    // Slime Sling
  event.replaceInput(
    { id: "kibe:slime_sling" },
    "minecraft:slime_ball",
    "gofish:slimefish"
  );

    // Gobber2 - Ring of haste
  event.replaceInput(
    { id: "gobber2:gobber2_ring_haste" },
    "minecraft:emerald",
    "magicfungi:heart_of_vivifica"
  );

    // Gobber2 - Medallion healing lesser
  event.replaceInput(
    { id: "gobber2:gobber2_medallion_healing" },
    "minecraft:rabbit_foot",
    "magicfungi:sanctificare_glyph"
  );

    // Gobber2 - Medallion healing lesser 2
  event.replaceInput(
    { id: "gobber2:gobber2_medallion_healing2" },
    "minecraft:weeping_vines",
    "betternether:willow_leaves"
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
    "winged:bat_wing"
  );

      // Gobber2 - Ring of Above pt2
  event.replaceInput(
    { id: "gobber2:gobber2_ring_above" },
    "minecraft:lapis_lazuli",
    "winged:black_feather"
  );

        // Gobber2 - Ring of Explorer
  event.replaceInput(
    { id: "gobber2:gobber2_ring_explorer" },
    "gobber2:gobber2_ring_return",
    "bosses_of_mass_destruction:void_thorn"
  );

  //  Gobber2 - Swiftness
  event.remove({ output: "gobber2:gobber2_ring_swiftness" });
  event.shaped(item.of("gobber2:gobber2_ring_swiftness"), [
    ["",  "mcdar:boots_of_swiftness", ""],
    ["magicfungi:vivifica_mushroom",  "gobber2:gobber2_ring",  "magicfungi:vivifica_mushroom"],
    ["",  "magicfungi:vivifica_mushroom", ""],
  ]);

  // Kibe Escape Rope
  event.replaceInput(
    { id: "kibe:escape_rope" },
    "minecraft:iron_ingot",
    "lacrimis:tear_ingot"
  );


  // Croptosis Watering Cans
  event.remove({output: 'croptosis:iron_watering_can'});
  event.custom({
    "type": "lacrimis:infusion_shaped",
    "pattern": [
      "AAA",
      "D  ",
      "   "
    ],
    "key": {
      "A": {
        "item": "gobber2:gobber2_rod"
      },
      "D": {
        "item": "minecraft:bucket"
      }
    },
    "result": {
      "item": "croptosis:iron_watering_can",
      "count": 1
    },
    "tears": 150
    });

  event.remove({output: 'croptosis:gold_watering_can'});
  event.custom({
    "type": "lacrimis:infusion_shaped",
    "pattern": [
      "AAA",
      "D  ",
      "   "
    ],
    "key": {
      "A": {
        "item": "gobber2:gobber2_rod_nether"
      },
      "D": {
        "item": "croptosis:iron_watering_can"
      }
    },
    "result": {
      "item": "croptosis:gold_watering_can",
      "count": 1
    },
    "tears": 250
    });

  event.remove({output: 'croptosis:diamond_watering_can'});
  event.custom({
    "type": "lacrimis:infusion_shaped",
    "pattern": [
      "AAA",
      "D  ",
      "   "
    ],
    "key": {
      "A": {
        "item": "gobber2:gobber2_rod_end"
      },
      "D": {
        "item": "croptosis:gold_watering_can"
      }
    },
    "result": {
      "item": "croptosis:diamond_watering_can",
      "count": 1
    },
    "tears": 500
    });

  event.remove({output: 'croptosis:netherite_watering_can'});
  event.custom({
    "type": "lacrimis:infusion_shaped",
    "pattern": [
      "AAA",
      "D  ",
      "   "
    ],
    "key": {
      "A": {
        "item": "gobber2:dragon_star"
      },
      "D": {
        "item": "croptosis:diamond_watering_can"
      }
    },
    "result": {
      "item": "croptosis:netherite_watering_can",
      "count": 1
    },
    "tears": 1000
    });


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
  event.replaceInput(
    { id: "extraalchemy:empty_ring" },
    "minecraft:gold_ingot",
    "gobber2:gobber2_ingot_end"
  );

  event.replaceInput(
    { id: "extraalchemy:empty_ring_mirror" },
    "minecraft:gold_ingot",
    "gobber2:gobber2_ingot_end"
  );


  // Quarry Plus
  // event.replaceInput(
  //   { id: "quarryplus:quarry" },
  //   "minecraft:iron_ingot",
  //   "techreborn:hot_tungstensteel_ingot"
  // );

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

  // End single recipe replacements //
  ////////////////////////////////////

    // Remove Doom OP items 
  event.remove({output: 'doom:daisy'});
  event.remove({output: 'doom:soulcube'});

  // Origins Orb
  event.shaped(item.of('origins:orb_of_origin', 1), [
    ['doom:argent_energy', 'bewitchment:cleansing_balm', 'winged:dipped_ceremonial_knife'],
    ]);
  
  // QoL Sticks 
  event.shaped(item.of("minecraft:stick", 16), [
    ["#minecraft:logs"],
    ["#minecraft:logs"],
  ]);

})
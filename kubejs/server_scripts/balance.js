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

  // Heart of the Sky (Creative Flight Recipe item requirement)
  event.remove({ output: "winged:heart_of_the_sky" });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Prefabs Balancing                                                                                                                                      //

  // Starter Farm
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

  // Angel Ring
  event.remove({ output: "kibe:angel_ring" });
  event.shaped(item.of("kibe:angel_ring"), [
    ['bosses_of_mass_destruction:blazing_eye',  'gobber2:gobber2_chestplate_dragon_no_flight',                        'bosses_of_mass_destruction:obsidian_heart'],
    ['techreborn:interdimensional_su', 'bosses_of_mass_destruction:ancient_anima', 'techreborn:interdimensional_su'],
    ['techreborn:iridium_neutron_reflector',          'dml-refabricated:glitch_ingot',    'minecraft:dragon_breath'],
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
   ['bewitchment:demon_heart',            "indrev:netherite_scrap_purified_ore", 'artofalchemy:materia_omega'],
   ["gobber2:dragon_star", "gobber2:gobber2_ring_end",                             "gobber2:dragon_star"],
   ['bewitchment:demon_horn',            "indrev:netherite_scrap_purified_ore", 'bewitchment:harbinger'],
 ]);



  ///// Kibe Removal since other tiered items give resistance and water breathing

  // Underwater Breathing and Fire Resistance
  event.remove({ output: "kibe:water_ring"});
  event.remove({ output: "kibe:magma_ring"});




  ///// Tech Reborn Removal

    // TECH Reborn Solar Panels
  event.remove({ id: "techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/industrial_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });

  // Tech Reborn Gem Tools & Gear - Useless
  var gems = [
    "ruby",
    "sapphire",
    "peridot",
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


  ////// Things 

  // Riot Gauntlet
  event.replaceInput(
    { id: "things:riot_gauntlet" },
    "minecraft:iron_ingot",
    "techreborn:hot_tungstensteel_ingot"
  );

  // Enchanted Wax Gland
  event.replaceInput(
    { id: "things:enchanted_wax_gland" },
    "minecraft:pufferfish",
    "gobber2:gobber2_medallion_sea"
  );


  // SimpleGrinder
  
  event.replaceInput(
    { id: "simplegrinder:machine_core" },
    "minecraft:redstone",
    "indrev:pulverizer_mk1"
  );

 // Blast
  
  event.replaceInput(
    { id: "blast:cold_digger" },
    "blast:stripminer",
    "blast:gunpowder_block"
  ); 
  // event.replaceInput(
  //   { id: "blast:stripminer" },
  //   "minecraft:stonecutter",
  //   "minecraft:tnt"
  // );  

  // blast --dirt bomb
  event.replaceInput(
    { id: "blast:dirt_bomb" },
    "minecraft:dirt",
    "prefab:block_compressed_dirt"
  );  
  event.replaceInput(
    { id: "blast:dirt_trigger_bomb" },
    "minecraft:dirt",
    "prefab:block_compressed_dirt"
  );  

  // blast --diamond bomb
  event.replaceInput(
    { id: "blast:diamond_bomb" },
    "minecraft:diamond",
    "magicfungi:magical_fungi_alloy"
  );  
  event.replaceInput(
    { id: "blast:diamond_trigger_bomb" },
    "minecraft:diamond",
    "magicfungi:magical_fungi_alloy"
  );  

  // blast --gold bomb
  event.replaceInput(
    { id: "blast:golden_bomb" },
    "minecraft:gold_ingot",
    "indrev:gold_chunk"
  );  
  event.replaceInput(
    { id: "blast:golden_trigger_bomb" },
    "minecraft:gold_ingot",
    "indrev:gold_chunk"
  );  

  // blast --bomb
  event.replaceInput(
    { id: "blast:bomb" },
    "minecraft:iron_ingot",
    "indrev:iron_chunk"
  );  
  event.replaceInput(
    { id: "blast:trigger_bomb" },
    "minecraft:iron_ingot",
    "indrev:iron_chunk"
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
    "waystones:abyss_watcher"
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
    "artofalchemy:materia_omega"
  );

  // Juniper Brooms pt2
  event.replaceInput(
    { id: "bewitchment:juniper_broom" },
    "bewitchment:demon_heart",
    "dml-refabricated:glitch_ingot"
  );

  // Cypress Brooms
  event.replaceInput(
    { id: "bewitchment:cypress_broom" },
    "bewitchment:cypress_log",
    "artofalchemy:materia_omega"
  );

  // Cypress Brooms pt2
  event.replaceInput(
    { id: "bewitchment:cypress_broom" },
    "bewitchment:demon_heart",
    "dml-refabricated:glitch_ingot"
  );

  // Elder Broom
  event.replaceInput(
    { id: "bewitchment:elder_broom" },
    "bewitchment:elder_log",
    "artofalchemy:materia_omega"
  );

  // Elder Broom pt2
  event.replaceInput(
    { id: "bewitchment:elder_broom" },
    "bewitchment:demon_heart",
    "dml-refabricated:glitch_ingot"
  );

  // Dragon Blood Broom
  event.replaceInput(
    { id: "bewitchment:dragons_blood_broom" },
    "bewitchment:dragons_blood_log",
    "artofalchemy:materia_omega"
  );

  // Dragon Blood Broom
  event.replaceInput(
    { id: "bewitchment:dragons_blood_broom" },
    "bewitchment:demon_heart",
    "dml-refabricated:glitch_ingot"
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

  // Tools and Sword

  var doom_tools = [
    "axe",
    "pickaxe",
    "shovel",
    "hoe",
    "paxel",
    "sword",
    ]

    doom_tools.forEach(function (item, index) {
      event.replaceInput(
        { id: "doom:argent_" + item},
        "minecraft:stick",
        "doom:argent_plate"
        );
    });

  // Argent Ingot
  event.replaceInput(
    { id: "doom:argent_plate" },
    "minecraft:iron_ingot",
    "techreborn:tungstensteel_plate"
  );


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
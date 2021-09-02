// Another Quality Modpack 2 //
///////////////////////////////

events.listen("recipes", function (event) {
  // Heart of the Sky (Creative Flight Recipe item requirement)
  event.remove({ output: "winged:heart_of_the_sky" });

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
    ['dml-refabricated:glitch_ingot',  'gobber2:dragon_elytra',                        'dml-refabricated:glitch_ingot'],
    ['techreborn:interdimensional_su', 'winged:wing_bat_alt', 'techreborn:interdimensional_su'],
    ['minecraft:end_crystal',          'dml-refabricated:glitch_ingot',    'minecraft:dragon_breath'],
  ]);


  // Light Ring
  event.remove({ output: "kibe:light_ring" });
  event.shaped(item.of("kibe:light_ring"), [
   ['agape_space:starship_powersource',            "techreborn:data_storage_chip", 'agape_space:starship_powersource'],
   ["gobber2:gobber2_chestplate_dragon", "kibe:diamond_ring",                             "gobber2:gobber2_chestplate_dragon"],
   ['techreborn:iridum_plate',            "techreborn:data_storage_chip", 'techreborn:iridum_plate'],
 ]);


  // Argent Ingot
  event.replaceInput(
    { id: "doom:argent_plate" },
    "minecraft:iron_ingot",
    "techreborn:tungstensteel_plate"
  );


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


    // Juniper Brooms
  event.replaceInput(
    { id: "bewitchment:juniper_broom" },
    "bewitchment:juniper_log",
    "artofalchemy:materia_s"
  );

    // Juniper Brooms pt2
  event.replaceInput(
    { id: "bewitchment:juniper_broom" },
    "bewitchment:demon_heart",
    "dml-refabricated:glitch_ingot",
  );



    // Cypress Brooms
  event.replaceInput(
    { id: "bewitchment:cypress_broom" },
    "bewitchment:cypress_log",
    "artofalchemy:materia_s"
  );

    // Cypress Brooms pt2
  event.replaceInput(
    { id: "bewitchment:cypress_broom" },
    "bewitchment:demon_heart",
    "dml-refabricated:glitch_ingot",
  );



    // Elder Broom
  event.replaceInput(
    { id: "bewitchment:elder_broom" },
    "bewitchment:elder_log",
    "artofalchemy:materia_s"
  );

    // Elder Broom pt2
  event.replaceInput(
    { id: "bewitchment:elder_broom" },
    "bewitchment:demon_heart",
    "dml-refabricated:glitch_ingot",
  );




    // Dragon Blood Broom
  event.replaceInput(
    { id: "bewitchment:dragons_blood_broom" },
    "bewitchment:dragons_blood_log",
    "artofalchemy:materia_s"
  );

    // Dragon Blood Broom
  event.replaceInput(
    { id: "bewitchment:dragons_blood_broom" },
    "bewitchment:demon_heart",
    "dml-refabricated:glitch_ingot",
  );



// Origins Orb
  event.shaped(item.of('origins:orb_of_origin', 1), [
    ['doom:argent_energy', 'bewitchment:cleansing_balm', 'winged:dipped_ceremonial_knife'],
    ]);
  
})
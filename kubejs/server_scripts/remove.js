// Another Quality Modpack 2 //
///////////////////////////////

events.listen("recipes", function (event) {
  // Kibe
  event.remove({output: 'kibe:chunk_loader'});
  event.remove({output: 'kibe:diamond_kibe'});
  event.remove({output: 'kibe:golden_kibe'});

  // Things
  event.remove({output: 'things:moss_necklace'});
  event.remove({output: 'things:hades_crystal'});
  event.remove({output: 'things:hardening_catalyst'});

  // Kibe -- Removed to make conjuring balanced
  event.remove({output: 'kibe:diamond_lasso'});
  event.remove({output: 'kibe:cursed_lasso'});
  event.remove({output: 'kibe:gold_spikes'});
  event.remove({output: 'kibe:iron_spikes'});
  event.remove({output: 'kibe:stone_spikes'});
  event.remove({output: 'kibe:diamond_spikes'});
  event.remove({output: "kibe:water_ring"});
  event.remove({output: "kibe:magma_ring"});

  // copper nugget duplicates
  event.remove({output: 'consistency_plus:copper_nugget'});
  event.remove({output: "valleycraft:copper_nugget"});
  event.remove({output: "mythicmetals:copper_nugget"});

  // Winged
  event.remove({output: "winged:wing_random"});
  event.remove({output: "winged:wing_random_creative_flight"});
  event.remove({output: "winged:heart_of_the_sky"});

  // Lacrimis
  event.remove({output:'lacrimis:rune/spawner'});

 // Croptosis
  event.remove({ output: 'croptosis:feather_meal'});
  event.remove({ output: 'croptosis:rotten_pile'});
  // Doom Daisy 
  event.remove({output: 'doom:daisy'});
  event.remove({output: 'doom:invisiblesphere'});

  // Remove Fast ass quarry markers [mod removed 2.9.3]
  // event.remove({output: 'quarryplus:flex_marker'});
  // event.remove({output: 'quarryplus:marker16'});
  // event.remove({output: 'quarryplus:remove_bedrock_module'});

  // Night vision (Since Phantom is enabled, this is too OP)
  event.remove({output: 'agape_space:enhanced_helmet'});
  event.remove({output: 'things:monocle'});
  event.remove({output: 'bewitchment:prickly_belt'});
  event.remove({output: 'bewitchment:specter_bangle'});

  // // Stripminer removal (due to bug)
  // event.remove({output: 'blast:stripminer'});
  // event.remove({output: 'blast:cold_digger'});

  // Boss Key (Destroy spawners to get)
  event.remove({ output: "battletowers:boss_key" });
  // Antimatter cannon
  event.remove({output: 'appliedenergistics2:matter_cannon'});

  // Botania
  event.remove({output: 'botania:blood_pendant'});
  event.remove({output: 'botania:balance_cloak'});
  event.remove({output: 'botania:flight_tiara'});
  event.remove({output: 'botania:flight_tiara_0'});
  event.remove({output: 'botania:spawner_claw'});
  event.remove({output: 'botania:fel_pumpkin'});
  event.remove({output: 'botania:cocoon'});
  event.remove({output: 'botania:laputa_shard'});
  event.remove({output: 'botania:water_ring'});
  event.remove({output: 'botania:super_lava_pendant'});
  event.remove({output: 'botania:diving_rod'});
  event.remove({output: 'botania:missile_rod'});
  event.remove({output: 'botania:smelt_rod'});
  event.remove({output: 'botania:terraform_rod'});
  event.remove({output: 'botania:tornado_rod'});

  // MCDW
  event.remove({output: 'mcdw:sword_the_starless_night'});
  // Doom

  // Tools

      var doom_tools = [
    "axe",
    "pickaxe",
    "paxel",
    ];

    doom_tools.forEach(function (item, index) {
      event.remove({output: "doom:argent_" + item});
    });


  // Remove Kibe Generators due to ticking entity crashes

  var kibe_gen = [
    "mk1",
    "mk2",
    "mk3",
    "mk4",
    "mk5",
    ];

  kibe_gen.forEach(function(item, index) {
    event.remove({output: 'kibe:cobblestone_generator_' + item})
    event.remove({output: 'kibe:basalt_generator_' + item})
  });

  // Bewitchment Boats (Crashes due to TerraForm API)
    var bwBoats = [
    "juniper_boat",
    "cypress_boat",
    "elder_boat",
    "dragons_blood_boat"
  ];

  bwBoats.forEach(function(item, index) {
      event.remove({output: 'bewitchment:' + item})
  });

})
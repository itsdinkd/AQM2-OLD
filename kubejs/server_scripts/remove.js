// Another Quality Modpack 2 //
// Credits to AOF4           //
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

  // Doom Daisy 
  event.remove({output: 'doom:daisy'});
  event.remove({output: 'doom:invisiblesphere'});

  // // Simple Grinder OP Food
  event.remove({output: 'simplegrinder:mash_potato'});
  event.remove({output: 'simplegrinder:mash_carrot'});

  // Remove Fast ass quarry markers
  event.remove({output: 'quarryplus:flex_marker'});
  event.remove({output: 'quarryplus:marker16'});
  event.remove({output: 'quarryplus:remove_bedrock_module'});

  // Night vision (Since Phantom is enabled, this is too OP)
  event.remove({output: 'agape_space:enhanced_helmet'});
  event.remove({output: 'things:monocle'});
  event.remove({output: 'bewitchment:prickly_belt'});
  event.remove({output: 'bewitchment:specter_bangle'});

  // Stripminer removal (due to bug)
  event.remove({output: 'blast:stripminer'});

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
  })
})
// Another Quality Modpack 2 //
///////////////////////////////

events.listen("recipes", function (event) {
  event.remove({output: 'kibe:chunk_loader'});
  //event.remove({output: 'kibe:angel_ring'});
  event.remove({output: 'doom:invisiblesphere'});
  event.remove({output: 'kibe:diamond_kibe'});
  event.remove({output: 'kibe:golden_kibe'});
  event.remove({output: 'things:moss_necklace'});
  event.remove({output: 'things:hades_crystal'});
  event.remove({output: 'things:hardening_catalyst'});
  event.remove({output: 'gobber2:gobber2_ring_stealth'});\
  event.remove({output: 'quarryplus:remove_bedrock_module'});

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